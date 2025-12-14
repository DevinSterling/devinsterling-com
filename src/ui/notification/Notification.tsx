import { PropsWithChildren } from 'react';
import { NotificationType } from './NotificationType.ts';
import { IconAlertCircle, IconCheck, IconInfoCircle, IconLoader2 } from '@tabler/icons-react';
import styles from './Notification.module.scss';

interface NotificationProps extends PropsWithChildren {
  className?: string,
  type?: NotificationType,
  message: string,
}

const ICONS = {
  [NotificationType.SUCCESS]: IconCheck,
  [NotificationType.ERROR]: IconAlertCircle,
  [NotificationType.LOADING]: IconLoader2,
  [NotificationType.INFO]: IconInfoCircle,
}

export default function Notification({ type = NotificationType.INFO, message, className, children }: NotificationProps) {
  const Icon = ICONS[type];

  return (
    <div className={`${styles.notification} ${styles[type]} ${className?? ''}`} >
      <div className={`${styles.header}`}>
        <Icon />
        <span>{message}</span>
      </div>
      {children}
    </div>
  );
}