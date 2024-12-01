import React from 'react';
import { useEffect } from 'react';
import AppRouter from './Router/AppRouter';
import './App.css'
import { ButtonFixed } from './components/ButtonFixed/ButtonFixex'
function App() {
  useEffect(() => {
    const originalTitle = document.title;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        document.title = '¡Vuelve, Tú Gran Idea está Aquí!'; 
      } else {
        document.title = originalTitle; 
      }
    };

    
    const handleBeforeUnload = (event) => {
      document.title = '¡No te vayas!';
    };

    
    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('beforeunload', handleBeforeUnload);

    
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);
  return (
    <>  
      <AppRouter/>
      <ButtonFixed/>
    </>
  )
}
export default App;