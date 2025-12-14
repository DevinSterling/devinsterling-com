import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router';
import { IconMenu } from '@tabler/icons-react';
import { useOverlayStore } from '../store/OverlayState.tsx';
import { NAME } from '../const/values.ts';
import NavigationMenu from './navigation/NavigationMenu.tsx';
import scramble from '../util/scramble.ts';
import styles from './Overlay.module.scss'

export default function Overlay() {
  const overlayStore = useOverlayStore();
  const nameRef = useRef<HTMLAnchorElement>(null);
  const [ showNav, setShowNav ] = useState<boolean>(false);

  const scrambleRef = () => {
    if (nameRef.current) scramble(nameRef.current);
  }

  useEffect(() => {
    scramble(nameRef.current!);
  }, []);

  return (
    <div className={styles.overlay}>
      <span
        ref={nameRef} className={`${styles.name} ${overlayStore.minimized ? styles.minimized : ''}`}
        onMouseOver={scrambleRef}
        onClick={scrambleRef}>
          {NAME}
      </span>
      <nav className={showNav ? styles.show_nav : ''}
           onMouseOver={() => setShowNav(true)}
           onMouseLeave={() => setShowNav(false)}
           onFocus={() => setShowNav(true)}
           onBlur={() => setShowNav(false)}>
        <div className={styles.top_bar}>
          <button className={styles.nav_button} tabIndex={-1}>
            <IconMenu/>
          </button>
          <Link to='#home'
                onMouseOver={scrambleRef}
                className={styles.nav_name}
                reloadDocument>
            {NAME}
          </Link>
        </div>
        <NavigationMenu className={styles.nav_menu} setShowNav={setShowNav}/>
      </nav>
    </div>
  );
}