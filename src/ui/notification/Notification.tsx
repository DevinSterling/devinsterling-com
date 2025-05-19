import { NotificationType } from './NotificationType.ts';
import { IconAlertCircle, IconCheck, IconInfoCircle, IconLoader2 } from '@tabler/icons-react';
import styles from './Notification.module.scss';
import { PropsWithChildren } from 'react';

interface NotificationProps extends PropsWithChildren {
  type?: NotificationType,
  message: string,
}

function get_icon(type: NotificationType) {
  switch(type) {
    case NotificationType.SUCCESS: return IconCheck;
    case NotificationType.ERROR:   return IconAlertCircle;
    case NotificationType.LOADING: return IconLoader2;
    default: return IconInfoCircle;
  }
}

export default function Notification({ type = NotificationType.INFO, message, children }: NotificationProps) {
  const Icon = get_icon(type);

  return (
    <div className={`${styles.notification} ${styles[type]}`} >
      <div className={`${styles.header}`}>
        <Icon />
        <span>{message}</span>
      </div>
      {children}
    </div>
  );
}