import { FormEvent, HTMLAttributes } from 'react';
import { FormState } from './FormState.ts';
import { NotificationType } from '../ui/notification/NotificationType.ts';
import Notification from '../ui/notification/Notification.tsx';
import FormContext from './FormContext.ts';

interface FormProps extends HTMLAttributes<HTMLFormElement> {
  context: FormContext,
  onRequestSubmit(data: FormData): void,
}

const NOTIFICATION_TYPES = {
  [FormState.SUBMITTING]: NotificationType.LOADING,
  [FormState.SUCCESS]: NotificationType.SUCCESS,
  [FormState.ERROR]: NotificationType.ERROR,
};

function createNotification(context: FormContext) {
  if (context.state === FormState.UNSUBMITTED) return null;
  return <Notification message={context.message} type={NOTIFICATION_TYPES[context.state]} />;
}

export default function Form({ context, onRequestSubmit, ...props }: FormProps) {
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onRequestSubmit(new FormData(event.currentTarget));
  };

  return (
    <>
      {createNotification(context)}
      <form {...props} onSubmit={onSubmit}/>
    </>
  );
}