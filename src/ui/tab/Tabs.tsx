import { useEffect, useRef, KeyboardEvent, JSX } from 'react';
import { Icon } from '@tabler/icons-react'
import { TabStyle } from './TabStyle.ts';
import { wrapIndex } from '../../util';
import PillButton from '../button/PillButton.tsx';
import styles from './Tabs.module.scss'

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
  const tabElementsRef = useRef<Map<Tab<T>, HTMLElement>>(new Map());

  useEffect(() => {
    const selectorStyle = selectorRef.current?.style;
    if (!selectorStyle || !selectedTab) return;
    selectorStyle.display = 'none';

    const tabElement = tabElementsRef.current.get(selectedTab);
    if (tabElement) {
      // Set focus to the new tab.
      // - Only request focus if the user is currently interacting within THIS tablist.
      const tabList = tabElement.parentElement;
      if (tabList === document.activeElement?.parentElement) {
        tabElement.focus();
      }

      // Update selector appearance
      selectorStyle.display = 'block';
      selectorStyle.left = `${tabElement.offsetLeft}px`;
      selectorStyle.top = `${tabElement.offsetTop}px`;
      selectorStyle.width = `${tabElement.offsetWidth}px`;
      selectorStyle.height = `${tabElement.offsetHeight}px`;
    }
  }, [selectedTab]);

  const onKeyPress = (event: KeyboardEvent) => {
    if (!selectedTab) return;
    const currentIndex = tabs.indexOf(selectedTab);

    switch (event.key) {
      case 'ArrowUp':
      case 'ArrowLeft':
        onTabChange(tabs[wrapIndex(currentIndex - 1, tabs.length)])
        break;
      case 'ArrowDown':
      case 'ArrowRight':
        onTabChange(tabs[wrapIndex(currentIndex + 1, tabs.length)])
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
                    ref={el => {
                      if (el) tabElementsRef.current.set(tab, el);
                      else    tabElementsRef.current.delete(tab);
                    }}
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