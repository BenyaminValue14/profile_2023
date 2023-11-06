import React, {useState} from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [active, setActive] = useState(false);
  const handleToggle = () => {
    setActive(!active);
  }
  return (
    <>
    <header id="main-header" className={`main-header flex relative ${active ? 'is-active' : ''}`}>
      <nav className="nav container">
        <a href="#description" className="title text-white">Benyaroot</a>
        <div className="right flex place-items-center">
          <ul id="main-menu" className="main-menu">
            <li className="item">
              <Link to="/" className="link-nav text-xs">Blog</Link>
            </li>
            <li className="item">
              <Link to="/" className="link-nav text-xs">Quien soy?</Link>
            </li>
          </ul>
          <button id="menu-button" className="menu-button" onClick={handleToggle}></button>
          <a href="#" className="button-tiny">Idioma</a>
        </div>
      </nav>
    </header>
    <div className="main-overlay"></div>
    </>
  );
};

export default Header;
