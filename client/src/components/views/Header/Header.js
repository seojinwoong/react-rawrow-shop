import React, { useState, useEffect } from "react";
import "./Sections/Header.css";
import { withRouter } from "react-router-dom";
import EventTopRolling from "./Sections/EventTopRolling";
import { useLocation } from "react-router-dom";
import LogoImg from '../../../img/logo.png';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../../../_actions/user_actions';
import { Link } from "react-router-dom";

// fontawesome Icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag, faSearch, faUser, faShoppingCart, faBars, faTimes, faUserPlus, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

function Header(props) {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  const [MenuActive, setMenuActive] = useState(false);
  const [SearchBarActive, setSearchBarActive] = useState(false);
  const [SearchValue, setSearchValue] = useState('');
  const [WaitAndShow, setWaitAndShow] = useState(false);

  const menuHandler = () => {setMenuActive(!MenuActive);}
  const searchTextHandler = (e) => {
    setSearchValue(e.target.value);
  }
  const searchBarHandler = (value) => {
    setSearchBarActive(value);
    if (!value) setSearchValue('');
  }
  const logoutHandler = () => {
    dispatch(logoutUser()).then(response => {
      if (response.payload.success) {
        window.location.replace("/");
      } else {
        alert('로그아웃이 실패하였습니다.');
      }
    })
  };

  const checkSearchValue = () => {
    if (SearchValue.trim() !== "") {
      props.history.push(`/searchResult/${SearchValue}`);
      searchBarHandler(false);
    }
  };

  const keyPressFn = (e) => { if (e.key === 'Enter') checkSearchValue(); } // Enter key 눌렀을때 submit 이벤트

  const location = useLocation();

  useEffect(() => {
    if(location.pathname == "/") {
      document.querySelector('.logo').classList.add('mainpage');
    }
    document.querySelector('.all-page').classList.add('active');
  }, [])

  useEffect(() => {
    let timer = setTimeout(()=>{
      setWaitAndShow(true);
    },100)
    return () => clearTimeout(timer);
  }, [])
  return (
    <div className="header-wrapper">

      {/* EventTopRolling */}
      <EventTopRolling />
      {/* // EventTopRolling */}

      {/* nav-bar */}
      <div className="nav-bar clearfix">
        <h1 className="logo"><Link to="/"><img src={LogoImg} alt="RAWROW 로고"/></Link></h1>
        
        <nav className={ MenuActive ? 'nav-menu active' : 'nav-menu' } >
          <Link to="/shop/1">BAG</Link>
          <Link to="/shop/2">EYE</Link>
          <Link to="/shop/3">WEAR</Link>
        </nav>

        {
          WaitAndShow &&
          <section className="right-menu">
            {
              user.userData && user.userData.isAdmin 
              && (
                  <Link className='menu-list' to="/product/upload">
                    <i>상품업로드</i>
                    <FontAwesomeIcon icon={faShoppingBag} className="mo-ico"/>
                  </Link>
              )
            }
            {
              user.userData && user.userData.isAuth
              ? ( 
                <>
                  <Link className='menu-list' to="/user/cart">
                    <i>CART</i>
                    <FontAwesomeIcon icon={faShoppingCart} className="mo-ico"/>
                  </Link>
                  <span className='menu-list' onClick={logoutHandler}>
                    <i>LOGOUT</i>
                    <FontAwesomeIcon icon={faSignOutAlt} className="mo-ico"/>
                  </span>
                </>
                )
              : (
                <>
                  <Link className='menu-list' to="/login">
                    <i>LOGIN</i>
                    <FontAwesomeIcon icon={faUser} className="mo-ico"/>
                  </Link>
                  <Link className='menu-list' to="/register">
                    <i>SIGNUP</i>
                    <FontAwesomeIcon icon={faUserPlus} className="mo-ico"/>
                  </Link>
                </>
                )
            }
            <span className='menu-list' onClick={()=>{searchBarHandler(!SearchBarActive)}}>
              <i>SEARCH</i>
              <FontAwesomeIcon icon={faSearch} className="mo-ico"/>
            </span>
            <span className='menu-list mo-hamburger'>
              {
                MenuActive == false
                ? <FontAwesomeIcon icon={faBars} className="mo-ico" onClick={menuHandler}/>
                : <FontAwesomeIcon icon={faTimes} className="mo-ico" onClick={menuHandler}/>
              }
            </span>
          </section>
        }
      </div>
      {/* // nav-bar */}

      {/* search-bar-wrap */}
        <section className={SearchBarActive ? 'search-bar-wrap active' : 'search-bar-wrap'}>
          <div className="search-form">
            <input type="text" 
            placeholder="검색어를 입력하세요" 
            onChange={searchTextHandler} 
            onKeyPress={keyPressFn} 
            value={SearchValue}/>
            <FontAwesomeIcon icon={faSearch} className="search-submit" onClick={checkSearchValue}/>
            <FontAwesomeIcon icon={faTimes} className="search-close" onClick={()=>{searchBarHandler(false)}}/>
          </div>
        </section>
      {/* // search-bar-wrap */}

      <div className={ MenuActive ? 'white-shadow active' : 'white-shadow' }></div>
    </div>
  );
}

export default withRouter(Header);
