import { GITHUB_LINK } from '../../const/values.ts';
import NavigationLink from './NavigationLink.tsx';
import styles from './NavigationMenu.module.css'

interface NavigationMenuProps {
  setShowNav: (show: boolean) => void,
  className: string,
}

export default function NavigationMenu({ setShowNav, className }: NavigationMenuProps) {
  return (
    <menu className={`${className} ${styles.menu}`}>
      <NavigationLink to='/#projects' onClick={() => setShowNav(false)} reloadDocument>
        Projects
      </NavigationLink>
      <NavigationLink to='/#contact' onClick={() => setShowNav(false)} reloadDocument>
        Contact
      </NavigationLink>
      <NavigationLink to={GITHUB_LINK} target='_blank'>
        GitHub
      </NavigationLink>
    </menu>
  );
}