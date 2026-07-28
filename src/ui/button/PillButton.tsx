import { ComponentProps } from 'react';
import { Icon } from '@tabler/icons-react';
import styles from './PillButton.module.scss'

interface PillButtonProps extends ComponentProps<'button'> {
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