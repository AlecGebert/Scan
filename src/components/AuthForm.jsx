import React, { useEffect } from "react";
import googleLogo from "../assets/google.svg";
import facebookLogo from "../assets/facebook.svg";
import yandexLogo from "../assets/yandex.svg";
import lock from "../assets/lock.svg";
import styled from "styled-components";
import { useState } from "react";
import PropTypes from "prop-types";

const LogInForm = styled.form`
  max-width: 42.9rem;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  box-shadow: 0rem 0rem 2rem rgba(0, 0, 0, 0.15);
  border-radius: 1rem;
  padding: 2.5rem 2.5rem 4rem 2.5rem;
  position: relative;

  @media (max-width: 768px) {
    margin: 0 auto;
    margin-top: 12.6rem;
  }

  @media (max-width: 425px) {
    max-width: 39rem;
  }

  @media (max-width: 375px) {
    max-width: 34.2rem;
  }

  @media (max-width: 320px) {
    max-width: 29rem;
  }
`;

const LockImageContainer = styled.div`
  position: absolute;
  width: 7.5rem;
  height: 9.2rem;
  top: -5rem;
  left: -5rem;

  @media (max-width: 425px) {
    top: -7.5rem;
    left: 10rem;
  }

  @media (max-width: 375px) {
    top: -7.5rem;
    left: 8rem;
  }

  @media (max-width: 320px) {
    top: -7.5rem;
    left: 4rem;
  }
`;
const Toggles = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SignInToggle = styled.button`
  width: 15.1rem;
  border: none;
  border-bottom: 0.2rem solid #029491;
  background: none;

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.9rem;
  letter-spacing: 0.02em;
  color: #029491;
  padding: 0.8rem 0;
`;

const LogInToggle = styled.button`
  width: 21.3rem;
  border: none;
  border-bottom: 0.2rem solid #c7c7c7;
  background: none;

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.9rem;
  letter-spacing: 0.02em;
  color: #c7c7c7;
  padding: 0.8rem 0;
  margin-left: 1.5rem;
`;

const Inputs = styled.div`
  margin-top: 4rem;
`;

const forImage = {
  width: "100%",
  height: "100%",
};

const LogInFormLabel = styled.label`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.9rem;
  letter-spacing: 0.02em;
  color: #949494;
`;

const LogInFormInput = styled.input`
  width: 100%;
  height: 4.3rem;
  background: #ffffff;
  border: 0.1rem solid #c7c7c7;
  box-shadow: 0rem 0rem 2rem rgba(0, 0, 0, 0.05);
  border-radius: 0.5rem;
  margin: 2rem 0;
`;

const LogInFormButtons = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
`;

const LogInFormBtn = styled.button`
  width: 100%;
  background: #5970ff;
  border-radius: 0.5rem;
  border: none;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 2.2rem;
  line-height: 2.7rem;
  /* identical to box height */
  letter-spacing: 0.02em;
  color: #ffffff;
  padding: 1.6rem 0;
  opacity: 0.6;
  cursor: pointer;
`;

const LogInFormBtnHelp = styled.button`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 1.7rem;
  /* identical to box height */
  letter-spacing: 0.02em;
  text-decoration-line: underline;
  color: #5970ff;
  border: none;
  background: none;
  margin-top: 1.5rem;
`;
const LogInThrogh = styled.div`
  margin-top: 3rem;
`;

const LogInThroghButtons = styled.div`
  margin-top: 1.5rem;
  display: flex;
  justify-content: space-between;
  width: 85%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const SocialBtn = styled.button`
  width: 9.6rem;
  background: #ffffff;
  border: 0.1rem solid rgba(89, 112, 255, 0.51);
  border-radius: 0.3rem;
  padding: 0.7rem 0 0.3rem 0;
  @media (max-width: 375px) {
    width: 31%;
  }
`;
const ErrorText = styled.p`
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.5rem;
  letter-spacing: 0.01em;
  color: #ff5959;
  text-align: center;
`;
async function loginUser(credentials) {
  return fetch("https://gateway.scan-interfax.ru/api/v1/account/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

// async function requestUserInfo(token) {
//   const response = await fetch( "https://gateway.scan-interfax.ru//api/v1/account/info"	, {
//     method: "GET",
//     headers: new Headers({
//       Authorization: `Bearer ${token}`,
//     }),
//   });
//   return await response.json();
// }

function AuthForm({ setToken }) {
  const [login, setlogin] = useState("");
  const [password, setPassword] = useState("");
  const [loginDirty, setloginDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [loginError, setloginError] = useState("Введите корректные данные");
  const [passwordError, setPasswordError] = useState("Неправильный пароль");
  const [formValid, setFormValid] = useState(false);

  // Validation

  useEffect(() => {
    if (loginError || passwordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [loginError, passwordError]);

  const loginHandler = (e) => {
    setlogin(e.target.value);
    if (e.target.value < 4 || e.target.value > 16) {
      setloginError("Введите корректные данные");
      if (!e.target.value) {
        setloginError("Введите корректные данные");
      }
    } else {
      setloginError("");
    }
  };

  const passHandler = (e) => {
    setPassword(e.target.value);
    if (e.target.value < 4 || e.target.value > 16) {
      setPasswordError("Неправильный пароль");
      if (!e.target.value) {
        setPasswordError("Неправильный пароль");
      }
    } else {
      setPasswordError("");
    }
  };

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "login":
        setloginDirty(true);
        break;
      case "password":
        setPasswordDirty(true);
        break;
      // no default
    }
  };

  // End of Validation

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      login,
      password,
    });
    setToken(token);
  };

  return (
    <LogInForm onSubmit={handleSubmit}>
      <LockImageContainer>
        <img src={lock} style={forImage} alt="" />
      </LockImageContainer>
      <Toggles>
        <SignInToggle>Войти</SignInToggle>
        <LogInToggle>Зарегистрироваться</LogInToggle>
      </Toggles>
      <Inputs>
        <LogInFormLabel htmlFor="login">
          Логин или номер телефона:
        </LogInFormLabel>
        <LogInFormInput
          name="login"
          type="login"
          value={login}
          onChange={(e) => loginHandler(e)}
          onBlur={(e) => blurHandler(e)}
        />
        {loginDirty && loginError && <ErrorText>{loginError}</ErrorText>}
        <LogInFormLabel htmlFor="password">Пароль:</LogInFormLabel>
        <LogInFormInput
          name="password"
          type="password"
          value={password}
          onChange={(e) => passHandler(e)}
          onBlur={(e) => blurHandler(e)}
        />
        {passwordDirty && passwordError && (
          <ErrorText>{passwordError}</ErrorText>
        )}
      </Inputs>
      <LogInFormButtons>
        <LogInFormBtn disabled={!formValid} type="submit">
          Войти
        </LogInFormBtn>

        <LogInFormBtnHelp>Восстановить пароль</LogInFormBtnHelp>
      </LogInFormButtons>
      <LogInThrogh>
        <LogInFormLabel htmlFor="">Войти через:</LogInFormLabel>
        <LogInThroghButtons>
          <SocialBtn>
            <img src={facebookLogo} alt="" />
          </SocialBtn>
          <SocialBtn>
            <img src={googleLogo} alt="" />
          </SocialBtn>
          <SocialBtn>
            <img src={yandexLogo} alt="" />
          </SocialBtn>
        </LogInThroghButtons>
      </LogInThrogh>
    </LogInForm>
  );
}
AuthForm.propTypes = {
  setToken: PropTypes.func.isRequired,
};

export default AuthForm;
