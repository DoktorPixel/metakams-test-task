import React, { useState } from 'react';
import * as Collapsible from '@radix-ui/react-collapsible';
import './Header.css';
import Logo from '/images/logo-removebg.png';
import Burger from '/burger-menu.svg';
import Cross from '/cross.svg';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-content">
        <img src={Logo} alt="Logo" className="header-logo" />
        <nav className="nav-desktop">
          <a href="#home" className="menu-link">
            Home
          </a>
          <a href="#catalog" className="menu-link">
            Catalog
          </a>
          <a href="#about" className="menu-link">
            About
          </a>
          <a href="#services" className="menu-link">
            Services
          </a>
          <a href="#contact" className="menu-link">
            Contact
          </a>
        </nav>

        <Collapsible.Root open={isOpen} onOpenChange={setIsOpen}>
          <Collapsible.Trigger asChild>
            <button className="burger-btn" aria-label="Toggle menu">
              {isOpen ? (
                <img src={Cross} alt="Cross" />
              ) : (
                <img src={Burger} alt="Burger" />
              )}
            </button>
          </Collapsible.Trigger>

          <Collapsible.Content className="menu-items">
            <nav className="nav-mobile">
              <a href="#home" className="menu-link">
                Home
              </a>
              <a href="#catalog" className="menu-link">
                Catalog
              </a>
              <a href="#about" className="menu-link">
                About
              </a>
              <a href="#services" className="menu-link">
                Services
              </a>
              <a href="#contact" className="menu-link">
                Contact
              </a>
            </nav>
          </Collapsible.Content>
        </Collapsible.Root>
      </div>
    </header>
  );
};

export default Header;
