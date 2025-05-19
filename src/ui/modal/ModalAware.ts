export default interface ModalAware {
  /** Callback when a modal is now shown. */
  onModalShow?(): void,
  /** Callback when a modal is now closed. */
  onModalClose?(): void,
}