import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router';
import { scrollToById } from "./util/layout.ts";
import Home from './pages/home/Home.tsx';
import Overlay from './ui/Overlay.tsx';

export default function App() {
  // Chrome may not scroll to the element with the
  // hash, so enforce scrolling to the element
  useEffect(()=> {
    const hash = window.location.hash.replace('#', '');

    if(hash) {
      scrollToById(hash);
    }
  }, [])

  return (
    <>
      <Overlay />
      <Routes>
        <Route index element={<Home />} />
        {/* No other routes for now */}
        <Route path='*' element={<Navigate to='/' replace={true} />} />
      </Routes>
    </>
  );
}
