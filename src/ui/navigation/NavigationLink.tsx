import { Link, LinkProps } from 'react-router';
import styles from './NavigationLink.module.scss';

export default function NavigationLink({ children, ...props }: LinkProps) {
  return (
    <li className={styles.link}>
      <Link {...props}>
        <span className={styles.strike}>
          {children}
        </span>
      </Link>
    </li>
  )
}