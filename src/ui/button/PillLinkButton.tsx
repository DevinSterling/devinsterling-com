import { Link, LinkProps } from 'react-router';
import { Icon } from '@tabler/icons-react';
import styles from './PillButton.module.css'

interface PillButtonProps extends LinkProps {
  Icon?: Icon,
  signatureColor?: boolean,
}

export default function PillLinkButton({ className = '', Icon, signatureColor, children, ...props }: PillButtonProps) {
  return (
    <Link {...props}
            className={`${className} ${styles.button} ${signatureColor ? styles.signature_color : ''}`}>
      {Icon && <Icon />}
      {children}
    </Link>
  );
}