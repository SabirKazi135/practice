import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function Logger() {
  const location = useLocation();
  useEffect(() => {
    console.log('Navigated to:', location.pathname);
  }, [location.pathname]);

  return null;
}

export default Logger;
