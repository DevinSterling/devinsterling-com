import { useCallback, useEffect, useRef, useState } from 'react';

export interface ScrambleConfiguration {
  duration: number,
  maxIterations: number,
  separator: string | RegExp,
}

export function useScramble(initialText: string, config: ScrambleConfiguration = {
  duration: 500,
  maxIterations: 15,
  separator: ' ',
}) {
  const [ text, setText ] = useState(initialText);
  const [ isScrambling, setIsScrambling ] = useState(false);
  const intervalRef = useRef<number>(null);

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const doScramble = useCallback(() => {
    if (!initialText) return;
    if (intervalRef.current) clearInterval(intervalRef.current);

    const words = initialText.split(config.separator);
    let iteration = 0;
    setIsScrambling(true);

    intervalRef.current = setInterval(() => {
      if (iteration++ < config.maxIterations) {
        setText(words.map(fisherYatesShuffle).join(' '));
      } else {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }

        setIsScrambling(false);
        setText(initialText);
      }
    }, config.duration / config.maxIterations);
  }, [initialText, config.duration, config.maxIterations, config.separator])

  return { text, doScramble, isScrambling };
}

function fisherYatesShuffle(input: string): string {
  const chars = input.split('');

  for (let i = chars.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    const temp = chars[i];
    chars[i] = chars[j];
    chars[j] = temp;
  }

  return chars.join('');
}