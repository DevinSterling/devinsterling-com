import { useEffect, useRef, KeyboardEvent, JSX } from 'react';
import { Icon } from '@tabler/icons-react'
import { TabStyle } from './TabStyle.ts';
import { wrapIndex } from '../../util';
import PillButton from '../button/PillButton.tsx';
import styles from './Tabs.module.css'

export interface Tab<T> {
  text: string,
  hideText?: boolean,
  icon?: Icon,
  data?: T,
  graphic?: JSX.Element
}

interface TabsProps<T> {
  tabsStyle?: TabStyle,
  onTabChange: (tab: Tab<T>) => void,
  tabs: Tab<T>[],
  selectedTab?: Tab<T>,
  className?: string,
  tabClassName?: string,
  selectorClassName?: string,
}

export default function Tabs<T>({
  tabsStyle = TabStyle.PILL,
  className = '',
  tabClassName = '',
  selectorClassName = '',
  onTabChange,
  tabs,
  selectedTab
}: TabsProps<T>) {
  const selectorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!selectorRef.current) return;

    const parent = selectorRef.current.parentElement!;
    const tabs = parent.children;
    const selectorStyle = selectorRef.current.style;
    const text = selectedTab?.text;

    for (let i = 0; i < tabs.length; i++) {
      const el = tabs[i] as HTMLElement;

      // Use `title` if there is no text node)
      if (el.title === text || el.textContent === text) {
        // Set focus to the new tab
        if (document.activeElement?.parentElement === parent) el.focus();

        // Update selector appearance
        selectorStyle.display = 'block';
        selectorStyle.left = `${el.offsetLeft}px`;
        selectorStyle.top = `${el.offsetTop}px`;
        selectorStyle.width = `${el.offsetWidth}px`;
        selectorStyle.height = `${el.offsetHeight}px`;
        return;
      }
    }
    selectorStyle.display = 'none';
  }, [selectedTab, selectorRef]);

  const onKeyPress = (event: KeyboardEvent) => {
    if (!selectedTab) return;
    switch (event.code) {
      case 'ArrowUp':
      case 'ArrowLeft':
        onTabChange(tabs[wrapIndex(tabs.indexOf(selectedTab) - 1, tabs.length)])
        break;
      case 'ArrowDown':
      case 'ArrowRight':
        onTabChange(tabs[wrapIndex(tabs.indexOf(selectedTab) + 1, tabs.length)])
        break;
      default:
        return;
    }
    event.preventDefault();
  };

  return (
    <div className={`${styles.tabs} ${styles[tabsStyle]} ${className}`} role='tablist' onKeyDown={onKeyPress}>
      <div ref={selectorRef} className={`${styles.selector} ${selectorClassName}`} />
      {tabs.map((tab, i) => (
        <PillButton key={`${i}#${tab.text}`}
                    className={tabClassName}
                    title={tab.hideText ? tab.text : undefined}
                    role='tab'
                    aria-selected={tab === selectedTab}
                    tabIndex={tab === selectedTab ? 0 : -1}
                    onClick={event => {
                      onTabChange(tab);
                      event.currentTarget.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
                    }}>
          {tab.icon && <tab.icon />}
          {!tab.hideText && <span>{tab.text}</span>}
          {tab.graphic && tab.graphic}
        </PillButton>
      ))}
    </div>
  );
}