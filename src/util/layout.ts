/** Double rAF to ensure an operation occurs. */
export function onNextPaint(callback: () => void) {
  requestAnimationFrame(() => {
    requestAnimationFrame(callback);
  });
}

export function scrollTo(target: HTMLElement, options?: boolean | ScrollIntoViewOptions) {
  // On some browsers (e.g., Firefox) a scroll event may not occur at all.
  // Perform a "double rAF" to ensure scrolling to the target element.
  onNextPaint(() => target.scrollIntoView(options));
}

export function scrollToById(id: string, options?: boolean | ScrollIntoViewOptions) {
  const element = document.getElementById(id);
  if (element) {
    scrollTo(element, options);
  }
}