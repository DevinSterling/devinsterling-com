import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router';
import Home from './pages/home/Home.tsx';
import Overlay from './ui/Overlay.tsx';

export default function App() {
  // Chrome may not scroll to the element with the
  // hash, so enforce scrolling to the element
  useEffect(()=> {
    const hash = window.location.hash;

    if(hash) {
      setTimeout(()=> {
        document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' })
      }, 300)
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
