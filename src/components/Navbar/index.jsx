import React from 'react';
import { ReactComponent as MessageIcon } from '../../assets/envelope-open-regular.svg';
import { ReactComponent as CaretDownIcon } from '../../assets/caret-down-solid.svg';
import { ReactComponent as HamburgerIcon } from '../../assets/bars-solid.svg';
import './Navbar.scss';

function Navbar({ toggleSideBar }) {

  const showSideBar = () => {
    toggleSideBar(true)
  }

  return (
    <div className="navbar">
      <div className="navbar-content">
        <div className="right-item">
          <MessageIcon className="message-icon" />
          <img src="https://res.cloudinary.com/dx0nauane/image/upload/v1576065923/avatar.jpg" alt="avatar"/>
          <p>Victor Shiwani</p>
          <CaretDownIcon className="icon" />
        </div>
        <HamburgerIcon className="bell-icon" onClick={showSideBar} />
      </div>
    </div>
  );
}

export default Navbar;