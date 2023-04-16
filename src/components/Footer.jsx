import React from 'react';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="flexnjustify-center items-center ">
      <p>Copyright © {year} Olaleye</p>
    </footer>
  );
}

export default Footer;
