import React from 'react'

function ScrollToTop({ children, location }) {
  React.useEffect(() => window.scrollTo(0, 0), [location.pathname])
  return children
};

export default ScrollToTop;


