import React from 'react';
import './Sections/RegisterSuccess.css';
import { Link } from 'react-router-dom';

function RegisterSuccess() {
    return (
        <div className="register-success container">
            <h2 className="page-title">회원가입완료</h2>

            <p className="welcome">
                RAWROW의 회원이 되신 것을 환영합니다.<br/>
                회원이 되시면 <span>더 많고 다양한 혜택</span>을 얻으실 수 있습니다.
            </p>

            <p className='btn-wrapper'>
                <Link to="/" className='go-main'>메인으로</Link>
                <Link to="/login" className='go-login'>로그인하기</Link>
            </p>
            
        </div>
    )
}

export default RegisterSuccess
