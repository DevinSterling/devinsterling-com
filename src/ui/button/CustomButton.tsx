import { createElement, HTMLAttributes, JSX, UIEvent, KeyboardEvent, MouseEvent } from 'react';
import styles from './CustomButton.module.css';

interface ContentButtonProps extends HTMLAttributes<HTMLElement> {
  as?: keyof JSX.IntrinsicElements,
}

function isIgnorableChildEvent(event: UIEvent): boolean {
  let node: HTMLElement = event.target as HTMLElement;

  while (node != event.currentTarget) {
    if (node instanceof HTMLAnchorElement
      || node instanceof HTMLButtonElement
      || node.onclick) {
      return true;
    }
    // calling parent always leads to `currentTarget`
    node = node.parentElement!;
  }
  return false;
}

function onKeyDown(event: KeyboardEvent<HTMLElement>) {
  if (!isIgnorableChildEvent(event) && event.code === 'Enter') {
    event.currentTarget.click();
    event.preventDefault();
  }
}

// A valid HTML "button" that supports other buttons within
export default function CustomButton({ as = 'div', children, className = '', ...props }: ContentButtonProps) {
  const onClick = (event: MouseEvent<HTMLElement>) => {
    if (!isIgnorableChildEvent(event)) {
      //initial call
      props.onClick?.(event);
    }
  }

  return createElement(
    as,
    {
      ...props,
      onClick,
      onKeyDown,
      role: 'button',
      tabIndex: 0,
      className: `${className} ${styles.button}`,
    },
    children,
  );
}