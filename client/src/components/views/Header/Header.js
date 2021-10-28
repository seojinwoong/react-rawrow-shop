import React, { useEffect, useState } from "react";
import "./Sections/Header.css";
import EventTopRolling from "./Sections/EventTopRolling";
import LogoImg from '../../../img/logo.png';

// fontawesome Icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUser, faShoppingCart, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [MenuActive, setMenuActive] = useState(false);
  const menuHandler = () => {setMenuActive(!MenuActive);}
  return (
    <div className="header-wrapper">

      {/* EventTopRolling */}
      <EventTopRolling />
      {/* // EventTopRolling */}

      {/* nav-bar */}
      <div className="nav-bar clearfix">
        <h1 className="logo"><a href="#"><img src={LogoImg} alt="RAWROW 로고"/></a></h1>
        
        <nav className={ MenuActive ? 'nav-menu active' : 'nav-menu' } >
          <a href="#">BAG</a>
          <a href="#">EYE</a>
          <a href="#">WEAR</a>
        </nav>

        <section className="right-menu">
          <span className='menu-list'>
            <i>SEARCH</i>
            <FontAwesomeIcon icon={faSearch} className="mo-ico"/>
          </span>
          <a className='menu-list' href="#">
            <i>LOGIN</i>
            <FontAwesomeIcon icon={faUser} className="mo-ico"/>
          </a>
          <a className='menu-list' href="#">
            <i>CART</i>
            <FontAwesomeIcon icon={faShoppingCart} className="mo-ico"/>
          </a>
          <span className='menu-list mo-hamburger'>
            {
              MenuActive == false
              ? <FontAwesomeIcon icon={faBars} className="mo-ico" onClick={menuHandler}/>
              : <FontAwesomeIcon icon={faTimes} className="mo-ico" onClick={menuHandler}/>
            }
          </span>
        </section>
      </div>
      {/* // nav-bar */}

      <div className={ MenuActive ? 'white-shadow active' : 'white-shadow' }></div>
    </div>
  );
}

export default Header;
