import { createElement, HTMLAttributes, JSX, UIEvent, KeyboardEvent, MouseEvent } from 'react';
import styles from './CustomButton.module.css';

interface CustomButtonProps extends HTMLAttributes<HTMLElement> {
  as?: keyof JSX.IntrinsicElements,
}

function isIgnorableChildEvent(event: UIEvent): boolean {
  let node = event.target as HTMLElement;

  while (node && node != event.currentTarget) {
    if (node instanceof HTMLAnchorElement
      || node instanceof HTMLButtonElement
      || node.role === 'button'
      || node.onclick
    ) {
      return true;
    }
    node = node.parentElement!;
  }
  return false;
}

// A valid HTML "button" that supports other buttons within
export default function CustomButton({ as = 'div', children, className = '', ...props }: CustomButtonProps) {
  const onClick = (event: MouseEvent<HTMLElement>) => {
    if (!isIgnorableChildEvent(event)) {
      //initial call
      props.onClick?.(event);
    }
  }

  const onKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (!isIgnorableChildEvent(event) && event.key === 'Enter') {
      props.onKeyDown?.(event);
      if (event.defaultPrevented) return;

      event.currentTarget.click();
      event.preventDefault();
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