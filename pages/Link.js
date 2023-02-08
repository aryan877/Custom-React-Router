import React from 'react';

const Link = ({ to, children }) => {
  return (
    <a href={to} onClick={(e) => {
      e.preventDefault();
      window.history.pushState({}, '', to);
      window.dispatchEvent(new PopStateEvent('popstate'));
    }}>
      {children}
    </a>
  );
};

export default Link;
