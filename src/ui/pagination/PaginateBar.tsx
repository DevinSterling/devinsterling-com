import { useEffect } from 'react';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import { wrapIndex } from '../../util';
import { PlayState } from './PlayState.ts';
import PillButton from '../button/PillButton.tsx';
import styles from './PaginateBar.module.scss';

export interface PaginateBarProps {
  length: number,
  selected: number,
  onSelectedChange: (page: number) => void,
  autoIncrementTime?: number,
  autoIncrementPlayState?: PlayState,
}

export default function PaginateBar({ 
  length,
  selected,
  onSelectedChange,
  autoIncrementTime,
  autoIncrementPlayState,
}: PaginateBarProps) {
  const auto_classname = autoIncrementPlayState === PlayState.PLAY ? styles.play_auto : styles.no_auto;
  const onNext = () => onSelectedChange(wrapIndex(selected + 1, length));
  const onPrevious = () => onSelectedChange(wrapIndex(selected - 1, length));

  // Manage timer to select the next page
  useEffect(() => {
    let interval = 0;

    if (autoIncrementPlayState === PlayState.PLAY) {
      interval = setInterval(() => {
        // Increment page by 1
        onSelectedChange((selected + 1) % length);
      }, autoIncrementTime);
    }

    return () => clearInterval(interval);
  }, [autoIncrementPlayState, autoIncrementTime, length, onSelectedChange, selected]);

  return (
    <nav className={styles.container} role={'navigation'} aria-label="Pagination">
      <PillButton className={styles.previous} Icon={IconChevronLeft} onClick={onPrevious} title={`Previous Page`} />
      <PillButton className={styles.next} Icon={IconChevronRight} onClick={onNext} title={`Next Page`} />
      <ul className={styles.pages}>
        {Array.from({length}, (_, i) => {
          const isSelected = i === selected;

          return (
            <li key={i}
                className={`${styles.page} ${isSelected ? auto_classname : ''}`}
                aria-current={isSelected}
                style={isSelected ? {animationDuration: `${autoIncrementTime}ms`} : {}}>
              <button tabIndex={-1} onClick={() => onSelectedChange(i)} title={`Page ${i + 1}`}/>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}