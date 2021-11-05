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
    let dataToSubmit = {
      userId: LoginId,
      password: LoginPwd
    };
    dispatch(loginUser(dataToSubmit))
      .then(response => {
        if (response.payload.loginSuccess) {
          props.history.push('/');
        } else {
          alert(`${response.payload.message}`);
        }
      })
      .catch(err => {
        alert('로그인 과정에서 오류가 발생하였습니다.');
      })
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
        <a href="/findUserInfo/findId">아이디 찾기</a>
        <a href="/findUserInfo/findPwd">비밀번호 찾기</a>
        <a href="/register">회원가입</a>
      </div>
    </div>
  );
};

export default withRouter(LoginPage);


