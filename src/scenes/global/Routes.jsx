import { Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useTheme } from '@mui/material';
import Home from '@/scenes/home';
import Contact from '@/scenes/contact';
import NoPage from '@/scenes/nopage';

function MyRoutes() {
  const location = useLocation();
  const { constants } = useTheme();

  useEffect(() => {
    const { hash } = location;
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        const yOffset = -constants.appBarHeight;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="contact" element={<Contact />} />

      <Route path="*" element={<NoPage />} />
    </Routes>
  );
}

export default MyRoutes;
