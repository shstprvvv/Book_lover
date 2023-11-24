import React from 'react';
import Navigbar from './Navbar';

function Header({ user }) {
  return (

    <header role="banner" className="mar-t-5 pad-t-2 pad-b-4 pad-s-1 wrap-float bg-white">

      <div className="max-w-700 center wrap-float">
        <Navigbar user={user} />

      </div>
    </header>
  );
}

export default Header;
