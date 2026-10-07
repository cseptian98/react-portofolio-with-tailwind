import '../styles/globals.css'
import { useState, useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const isDark = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDark);
  }, []);

  const toggleDarkMode = (value) => {
    setDarkMode(value);
    localStorage.setItem('darkMode', value);
  };

  if (!mounted) {
    return <div className="invisible"><Component {...pageProps} /></div>;
  }

  return (
    <div className={darkMode ? "dark" : ""}>
      <Component {...pageProps} darkMode={darkMode} setDarkMode={toggleDarkMode} />
    </div>
  )
}

export default MyApp
