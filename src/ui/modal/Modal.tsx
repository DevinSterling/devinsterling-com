import { HTMLAttributes, KeyboardEvent, useEffect, useRef } from 'react';
import ModalAware from './ModalAware.ts';
import styles from './Modal.module.scss';

export interface ModalProps extends ModalAware, HTMLAttributes<HTMLDialogElement> {
  show: boolean,
  requestClose(): void,
}

export default function Modal({ show, requestClose, onModalShow, onModalClose, ...props}: ModalProps) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (show) {
      document.body.classList.add(styles.disable_scrolling);
      ref.current?.showModal();
      onModalShow?.();
    } else {
      document.body.classList.remove(styles.disable_scrolling);
      ref.current?.close();
      onModalClose?.();
    }
  }, [onModalClose, onModalShow, show]);

  const onKeyDown = (event: KeyboardEvent<HTMLDialogElement>) => {
    if (event.code === 'Escape') {
      requestClose();
      event.preventDefault();
    } else {
      props.onKeyDown?.(event);
    }
  };

  return (
    <>
      { show && <dialog ref={ref} {...props} onKeyDown={onKeyDown}/>}
    </>
  );
}