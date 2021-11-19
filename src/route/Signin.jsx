import { Link, useHistory } from "react-router-dom";
import "./Signin.scss";
import { useContext } from "react";
import KakaoLogin from "react-kakao-login";
import { ProfileContext } from "../context/context";

const SignIn = () => {
  const { id, setId } = useContext(ProfileContext);
  const history = useHistory();

  const responseKaKao = (res) => {
    setId(res.profile.properties.nickname);
    window.localStorage.setItem("nickname", res.profile.properties.nickname);
    history.push("/");
  };
  const responseFail = (err) => {
    alert(err);
  };
  return (
    <section className="signin">
      <h1>로그인</h1>
      <div className="signin__card">
        <h2>
          <strong>Welcome! </strong>스타벅스에 오신 것을 환영합니다.
        </h2>
        <form>
          <input type="text" placeholder="아이디를 입력하세요." disabled />
          <input
            type="password"
            placeholder="비밀번호를 입력하세요."
            disabled
          />
          {/* <input type="submit" value="로그인" /> */}
          <KakaoLogin
            token={process.env.REACT_APP_JSKEY}
            buttonText="KaKao"
            onSuccess={responseKaKao}
            onFailure={responseFail}
            getProfile={true}
            className="kakao"
          >
            카카오로 로그인 하기
          </KakaoLogin>
          <p>
            * 비밀번호를 타 사이트와 같이 사용할 경우 도용 위험이 있으니,
            <br />
            정기적으로 비밀번호를 변경하세요!
          </p>
        </form>
        <div className="actions">
          <Link to="/signin">회원가입</Link>
          <Link to="/signin">아이디 찾기</Link>
          <Link to="/signin">비밀번호 찾기</Link>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
