import { HTMLAttributes, PropsWithChildren } from 'react';
import styles from './BarGroup.module.css';

interface ListGroupProps extends HTMLAttributes<HTMLUListElement> {
  spacing?: number,
}

export default function ListGroup({ className = '', spacing, style, ...props }: ListGroupProps) {
  return (
    <ul {...props}
         className={`${className} ${styles.bar_group}`}
         style={{...style,  gap: spacing}} />
  );
}

ListGroup.Item = function(props: PropsWithChildren) {
  return (
    <li {...props} />
  );
}