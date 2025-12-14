
export interface ScrambleConfiguration {
  duration: number,
  maxIterations: number,
  separator: string | RegExp,
}

export default function scramble(element: HTMLElement, configuration: ScrambleConfiguration = {
  duration: 500,
  maxIterations: 15,
  separator: ' ',
}) {
  if (element.dataset.scrambling) return;
  const words = element.textContent?.split(configuration.separator);
  if (!words) return;

  element.dataset.scrambling = 'true';

  let iteration = 0;
  const original = element.textContent;
  const interval = setInterval(() => {
    if (iteration++ < configuration.maxIterations) {
      element.textContent = words.map(fisherYatesShuffle).join(' ');
    } else {
      clearInterval(interval);
      element.textContent = original;
      delete element.dataset.scrambling;
    }
  }, configuration.duration / configuration.maxIterations);
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