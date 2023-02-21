/* eslint-disable jsx-a11y/anchor-is-valid */
import './LogIn.scss';
import Input from '../Input/Input';

function LogIn() {
  return (
    <div className="login_container">
      <div className="login_bg login_wrapper">
        <div className="form_wrapper">
          <form className="login_form">
            <h3>로그인</h3>
            <label htmlFor="email">이메일</label>
            <Input type="text" id="email" name="email" />
            <label htmlFor="password">비밀번호</label>
            <Input type="password" id="password" />
            <div className="btn-wrapper">
              <div className="signin-wrapper">
                <a href="#">비밀번호 재설정 하기</a>
                <a href="#">회원가입</a>
              </div>
              <button type="submit" className="login-btn">
                로그인
              </button>
            </div>
            <span className="hr-login">또는</span>
            <button
              type="button"
              className="kakao-login-btn"
              alt="카카오톡 로그인"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
