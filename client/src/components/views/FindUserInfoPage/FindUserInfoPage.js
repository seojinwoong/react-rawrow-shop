import React, { useState, useEffect } from "react";
import './Sections/FindUserInfoPage.css';

function FindUserInfoPage(props) {
  
  const [FindWhat, setFindWhat] = useState(props.match.params.findWhat);

  const [FindMethod, setFindMethod] = useState('by_email')
  const [InputId, setInputId] = useState('');
  const [InputName, setInputName] = useState('');
  const [InputEmail, setInputEmail] = useState('');
  const [Phone1, setPhone1] = useState('010');
  const [Phone2, setPhone2] = useState('');
  const [Phone3, setPhone3] = useState('');

  const dataInputHandler = (e) => {
    let inputElement = e.target.attributes.getNamedItem('data-element').value;

    switch (inputElement) {
        case "userId" : 
            setInputId(e.target.value);
            break;
        case "userName" : 
            setInputName(e.target.value);
            break;
        case "userEmail" : 
            setInputEmail(e.target.value);
            break;
        case "userPhone1" : 
            setPhone1(e.target.value);
            break;
        case "userPhone2" : 
            setPhone2(e.target.value);
            break;
        case "userPhone3" : 
            setPhone3(e.target.value);
            break;
    }
  };
  const tabClickHandler = (clicked) => {

  };

  return (
    <div className="container findUserInfoPage">
      <h2 className="page-title">
        {FindWhat == "findId" ? "아이디 찾기" : "비밀번호 찾기"}
      </h2>

      <p className="tab-menu">
        <span className={FindWhat == "findId" ? "tab active" : "tab"} onClick={()=>{tabClickHandler('id')}}>
          아이디 찾기
        </span>
        <span className={FindWhat == "findPwd" ? "tab active" : "tab"} onClick={()=>{tabClickHandler('pwd')}}>
          비밀번호 찾기
        </span>
      </p>

      <form className="find-form">
          <div className="find-way-option">
              <input type="radio" name="way" value="by_email" id="by_email" />
              <label htmlFor="by_email" className="mr20">이메일</label>
              <input type="radio" name="way" value="by_phone" id="by_phone"/>
              <label htmlFor="by_phone">휴대전화</label>
          </div>
        
          <div className="info-input-wrapper">
              <p>아이디</p>
              <input type="text" value={InputId} data-element="userId" onChange={dataInputHandler}/>

              <p>이름</p>
              <input type="text" value={InputName} data-element="userName" onChange={dataInputHandler}/>

              <p>이메일로 찾기</p>
              <input type="email" value={InputEmail} data-element="userEmail" onChange={dataInputHandler}/>
              
              <p>휴대전화로 찾기</p>
              <select className="phone" value={Phone1} data-element="userPhone1" onChange={dataInputHandler}>
                <option value="010">010</option>
                <option value="011">011</option>
                <option value="016">016</option>
                <option value="017">017</option>
                <option value="018">018</option>
                <option value="019">019</option>
              </select>

              <span className='dash'>-</span>
              <input type="number" className="phone" data-maxlength="4" data-element="userPhone2" value={Phone2} onChange={dataInputHandler}/>

              <span className='dash'>-</span>
              <input type="number" className="phone" data-maxlength="4" data-element="userPhone3" value={Phone3} onChange={dataInputHandler}/>
          </div>
      </form>
    </div>
  );
}

export default FindUserInfoPage;
