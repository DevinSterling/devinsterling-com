import { Link, LinkProps } from 'react-router';
import { Icon } from '@tabler/icons-react';
import styles from './ChipLink.module.css';

interface ChipProps extends LinkProps {
  Icon?: Icon,
}

export default function ChipLink({ to, Icon, children, ...props }: ChipProps) {
  return (
    <Link {...props} to={to} className={styles.chip}>
      {Icon && <Icon />}
      {children}
    </Link>
  );
}