import { ButtonHTMLAttributes } from 'react';
import { Icon } from '@tabler/icons-react';
import styles from './PillButton.module.css'

interface PillButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  Icon?: Icon,
  signatureColor?: boolean,
}

export default function PillButton({ className = '', Icon, signatureColor, children, ...props }: PillButtonProps) {
  return (
    <button {...props}
            className={`${className} ${styles.button} ${signatureColor ? styles.signature_color : ''}`}>
      {Icon && <Icon />}
      {children}
    </button>
  );
}