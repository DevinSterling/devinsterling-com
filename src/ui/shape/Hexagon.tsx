import { HTMLAttributes } from 'react';
import styles from './Hexagon.module.scss';

export default function Hexagon(props: HTMLAttributes<HTMLElement>) {
  return (
    <div {...props} className={`${styles.container} ${props.className?? ''}`}>
      <div className={styles.shape}>
        <span className={styles.hexagon} />
      </div>
      {props.children}
    </div>
  );
}