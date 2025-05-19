import { useInView } from 'react-intersection-observer';
import { useOverlayStore } from '../../store/OverlayState.tsx';
import Intro from './section/Intro.tsx';
import Projects from './section/Projects.tsx';
import Contact from './section/Contact.tsx';

const SCROLL_THRESHOLD = 0.75;

export default function Home() {
  const overlayStore = useOverlayStore();
  const { ref, inView } = useInView({
    threshold: SCROLL_THRESHOLD,
    onChange: (inView => overlayStore.setMinimized(!inView)),
  });

  return (
    <>
      <div ref={ref}>
        <Intro showSub={!inView} />
      </div>
      <main>
        <Projects/>
        <Contact/>
      </main>
    </>
  );
}

