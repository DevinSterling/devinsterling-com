import { ComponentProps } from 'react';
import styles from './ListGroup.module.scss';

interface ListGroupProps extends ComponentProps<'ul'> {
  spacing?: number,
}

export default function ListGroup({ className = '', spacing, style, ...props }: ListGroupProps) {
  return (
    <ul {...props}
         className={`${className} ${styles.bar_group}`}
         style={{...style,  gap: spacing}} />
  );
}

ListGroup.Item = function(props: ComponentProps<'li'>) {
  return (
    <li {...props} />
  );
}