import { ComponentPropsWithoutRef, SyntheticEvent } from 'react';
import ModalAware from './ModalAware.ts';
import styles from './Modal.module.scss';

export interface ModalProps extends ModalAware, ComponentPropsWithoutRef<'dialog'> {
  show: boolean,
  requestClose(): void,
}

export default function Modal({ show, requestClose, onModalShow, onModalClose, ...props}: ModalProps) {
  const dialogRefCallback = (el: HTMLDialogElement | null) => {
    if (el) {
      document.body.classList.add(styles.disable_scrolling);
      el.showModal();
      onModalShow?.();
    } else {
      document.body.classList.remove(styles.disable_scrolling);
      onModalClose?.();
    }
  };

  const onCancel = (event: SyntheticEvent<HTMLDialogElement>) => {
    event.preventDefault();
    requestClose();
  };

  return (
    <>
      { show && <dialog ref={dialogRefCallback} {...props} onCancel={onCancel} />}
    </>
  );
}