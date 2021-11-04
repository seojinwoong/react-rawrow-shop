import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { loginUser } from "../../../_actions/user_actions";
import { useDispatch } from "react-redux";
import './Sections/LoginPage.css';

function LoginPage(props) {
  const dispatch = useDispatch();

  const [LoginId, setLoginId] = useState('');
  const [LoginPwd, setLoginPwd] = useState('');

  const idHandler = (e) => { setLoginId(e.target.value) }
  const pwdHandler = (e) => { setLoginPwd(e.target.value) }
  const loginSubmitHandler = (e) => {
    e.preventDefault();
    
  }

  return (
    <div className="container login">
      <h2 className="page-title">로그인</h2>

      <form className="login-form" onSubmit={loginSubmitHandler}>
        <p className="row">
          <label htmlFor="userId">아이디</label>
          <input type="text" id="userId" placeholder="아이디를 입력해주세요." required onChange={idHandler} value={LoginId}/>
        </p>
        <p className="row">
          <label htmlFor="userPwd">비밀번호</label>
          <input type="password" id="userPwd" placeholder="비밀번호를 입력해주세요." required onChange={pwdHandler} value={LoginPwd}/>
        </p>
        
        <button>로그인</button>
      </form>

      <div className="link-wrapper">
        <a href="">아이디 찾기</a>
        <a href="">비밀번호 찾기</a>
        <a href="/register">회원가입</a>
      </div>
    </div>
  );
};

export default withRouter(LoginPage);


