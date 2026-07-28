import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { IconMenu } from '@tabler/icons-react';
import { useOverlayStore } from '../store/OverlayState.tsx';
import { NAME } from '../const/values.ts';
import { useScramble } from '../hook/scramble.ts';
import NavigationMenu from './navigation/NavigationMenu.tsx';
import styles from './Overlay.module.scss'

export default function Overlay() {
  const overlayStore = useOverlayStore();
  const [ showNav, setShowNav ] = useState<boolean>(false);
  const { text, doScramble } = useScramble(NAME);

  useEffect(() => doScramble(), [ doScramble, overlayStore.minimized ]);

  return (
    <div className={styles.overlay}>
      <span className={`${styles.name} ${overlayStore.minimized ? styles.minimized : ''}`}
            onMouseOver={doScramble}
            onClick={doScramble}
            aria-label={NAME}>
          {text}
      </span>
      <nav className={showNav ? styles.show_nav : ''}
           onMouseOver={() => setShowNav(true)}
           onMouseLeave={() => setShowNav(false)}
           onFocus={() => setShowNav(true)}
           onBlur={() => setShowNav(false)}>
        <div className={styles.top_bar}>
          <button className={styles.nav_button} tabIndex={-1}>
            { overlayStore.minimized ? <IconMenu/> : <img src='/icon.png' alt='The initials D.S.' /> }
          </button>
          <Link to='#home'
                onMouseOver={doScramble}
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