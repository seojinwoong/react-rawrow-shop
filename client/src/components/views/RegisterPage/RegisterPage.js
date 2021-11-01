import React, { useState } from "react";
import './Sections/RegisterPage.css';

// fontawesome Icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStarOfLife } from "@fortawesome/free-solid-svg-icons";

function RegisterPage(props) {

  const [Phone1, setPhone1] = useState('');
  const [Phone2, setPhone2] = useState('');

  const phoneInputHandler = (e) => {
    let phoneInput = e.target.attributes.getNamedItem('data-phone').value;
    let maxLength = e.target.attributes.getNamedItem('data-maxlength').value;
    if (e.target.value.length > maxLength) e.target.value = e.target.value.slice(0, maxLength);

    if (phoneInput == 2) { setPhone1(e.target.value); } else if (phoneInput == 3) { setPhone2(e.target.value); }
  }
  return (
    <div className="container">
      <h2 className="page-title">회원가입</h2>

      <form className="signup-form">
        <p className="row">
          <label htmlFor="memberId">아이디 <FontAwesomeIcon icon={faStarOfLife} className="require"/></label>
          <input type="text" id="memberId" className="common-input" placeholder='아이디를 입력해주세요.' required/>
        </p>
        <p className="row">
          <label htmlFor="memberPwd">비밀번호 <FontAwesomeIcon icon={faStarOfLife} className="require"/></label>
          <input type="password" id="memberPwd" className="common-input" placeholder="비밀번호를 입력해주세요." required/>
        </p>
        <p className="row">
          <label htmlFor="memberPwd2">비밀번호 확인<FontAwesomeIcon icon={faStarOfLife} className="require"/></label>
          <input type="password" id="memberPwd2" className="common-input" placeholder="비밀번호를 입력해주세요." required/>
        </p>
        <p className="row">
          <label htmlFor="memberName">이름<FontAwesomeIcon icon={faStarOfLife} className="require"/></label>
          <input type="text" id="memberName" className="common-input" required/>
        </p>
        <p className="row">
          <label htmlFor="memberAddress">주소<FontAwesomeIcon icon={faStarOfLife} className="require"/></label>
          <input type="text" id="memberAddress" className="common-input" required/>
        </p>
        <p className="row">
          <label>휴대전화<FontAwesomeIcon icon={faStarOfLife} className="require"/></label>
          <select className="common-input phone phone-1" required>
            <option value="010">010</option>
            <option value="011">011</option>
            <option value="016">016</option>
            <option value="017">017</option>
            <option value="018">018</option>
            <option value="019">019</option>
          </select>
          <span className='dash'>-</span>
          <input type="number" className="common-input phone phone-2" onChange={phoneInputHandler} data-maxlength="4" data-phone="2" value={Phone1} required/>
          <span className='dash'>-</span>
          <input type="number" className="common-input phone phone-3" onChange={phoneInputHandler} data-maxlength="4" data-phone="3" value={Phone2} required/>
        </p>
        <p className="row">
          <label htmlFor="memberEmail">이메일<FontAwesomeIcon icon={faStarOfLife} className="require"/></label>
          <input type="email" id="memberEmail" className="common-input" required/>
        </p>
        <p className="row">
          <label>성별</label>
          <span className="radio-row common-input">
            <input type="radio" name="gender" value="0" id="0" className="mr5"/>
            <label htmlFor="0" className="gender-txt mr10">남자</label>
            <input type="radio" name="gender" value="1" id="1" className="mr5"/>
            <label htmlFor="1" className="gender-txt">여자</label>
          </span>
        </p>

        <button className="submit-btn">회원가입</button>
      </form>
    </div>
  );
};


export default RegisterPage
