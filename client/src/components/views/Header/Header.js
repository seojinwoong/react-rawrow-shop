import React, { useState, useEffect } from "react";
import "./Sections/Header.css";
import EventTopRolling from "./Sections/EventTopRolling";
import { useLocation } from "react-router-dom";
import LogoImg from '../../../img/logo.png';

// fontawesome Icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUser, faShoppingCart, faBars, faTimes, faUserPlus } from "@fortawesome/free-solid-svg-icons";

function Header(props) {
  const [MenuActive, setMenuActive] = useState(false);
  const [SearchBarActive, setSearchBarActive] = useState(false);
  const [SearchValue, setSearchValue] = useState('');

  const menuHandler = () => {setMenuActive(!MenuActive);}
  const searchTextHandler = (e) => {setSearchValue(e.target.value)}
  const searchBarHandler = (value) => {
    setSearchBarActive(value);
    if (!value) setSearchValue('');
  }

  const location = useLocation();
  useEffect(() => {
    if(location.pathname == "/") {
      document.querySelector('.logo').classList.add('mainpage');
    }
    document.querySelector('.all-page').classList.add('active');
  }, [])

  return (
    <div className="header-wrapper">

      {/* EventTopRolling */}
      <EventTopRolling />
      {/* // EventTopRolling */}

      {/* nav-bar */}
      <div className="nav-bar clearfix">
        <h1 className="logo"><a href="/"><img src={LogoImg} alt="RAWROW 로고"/></a></h1>
        
        <nav className={ MenuActive ? 'nav-menu active' : 'nav-menu' } >
          <a href="#">BAG</a>
          <a href="#">EYE</a>
          <a href="#">WEAR</a>
        </nav>

        <section className="right-menu">
          <span className='menu-list' onClick={()=>{searchBarHandler(!SearchBarActive)}}>
            <i>SEARCH</i>
            <FontAwesomeIcon icon={faSearch} className="mo-ico"/>
          </span>
          <a className='menu-list' href="#">
            <i>LOGIN</i>
            <FontAwesomeIcon icon={faUser} className="mo-ico"/>
          </a>
          <a className='menu-list' href="/register">
            <i>SIGNUP</i>
            <FontAwesomeIcon icon={faUserPlus} className="mo-ico"/>
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

      {/* search-bar-wrap */}
        <section className={SearchBarActive ? 'search-bar-wrap active' : 'search-bar-wrap'}>
          <div className="search-form">
            <input type="text" placeholder="검색어를 입력하세요" onChange={searchTextHandler} value={SearchValue}/>
            <FontAwesomeIcon icon={faSearch} className="search-submit"/>
            <FontAwesomeIcon icon={faTimes} className="search-close" onClick={()=>{searchBarHandler(false)}}/>
          </div>
        </section>
      {/* // search-bar-wrap */}

      <div className={ MenuActive ? 'white-shadow active' : 'white-shadow' }></div>
    </div>
  );
}

export default Header;
