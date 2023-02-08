import React, { useState, useEffect } from 'react';

const Router = ({ routes }) => {
  const [currentRoute, setCurrentRoute] = useState(typeof window !== 'undefined' ? window.location.pathname : '/');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentRoute(window.location.pathname);
      window.addEventListener('popstate', () => {
        setCurrentRoute(window.location.pathname);
      });
    }
  }, []);

  return (
    <>
      {routes.map(({ path, component }, index) => {
        if (currentRoute === path) {
          return component;
        }
        return null;
      })}
    </>
  );
};

export default Router