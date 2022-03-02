import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiXCircle } from 'react-icons/fi';
import cn from 'classnames';
import logo from '../../Assets/Logo.svg';

import './styles.scss';
import Button from '../Button';

function Navbar() {
  const [active, setActive] = useState<boolean>(false);

  function handleSetActive() {
    setActive(!active);
  }

  return (
    <header className="navbar">
      <Link to="/" className={cn('logo', { logoFixed: active })}>
        <img src={logo} alt="Unifeed" />
      </Link>
      <div
        className={cn('menu-mobile', { iconFixed: active })}
        onClick={handleSetActive}
      >
        {active ? <FiXCircle /> : <FiMenu />}
      </div>
      <nav className={cn('nav-links', { activeMenu: active })}>
        <Link to="/" className="link">
          Home
        </Link>
        <Link to="/features" className="link">
          Features
        </Link>
        <Link to="/pricing" className="link">
          Pricing
        </Link>
        <Link to="/subscribe" className="link-button">
          <Button text="Subscribe" />
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;
