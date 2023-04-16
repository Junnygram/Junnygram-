import React from 'react';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="flex font-press-start justify-center items-center ">
      <p>Copyright © {year} Olaleye</p>
    </footer>
  );
}

export default Footer;
