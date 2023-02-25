import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SignInput from './SignInput';
import styled from "styled-components";
import useLoginMutation from './../hooks/useLoginMutation';
import { emailValidation, passwordValidation } from './../utils/validation';
import SignButton from './commons/SignButton';
export default function LoginForm() {
  const[loginValue, setLoginValue] = useState({
    email: "",
    password: "",
  });
  const [isValid, setIsValid] = useState(false);
  const [inputValid, setInputValid] = useState(false);
  const navigate = useNavigate();
  const loginAction = useLoginMutation(loginValue);

  useEffect(() => {
    if(loginAction.isSuccess) {
      navigate("/hello");
    }
  }, [loginAction.isSuccess]);
  useEffect(() => {
    let emailValid = loginValue.email;
    let passwordValid = loginValue.password;
    setIsValid(emailValid&&passwordValid&&inputValid);
  }, [loginValue, inputValid]);

  const inputChangeHandler = (e) => {
    setLoginValue({ ...loginValue, [e.target.name]: e.target.value });
  };

  const loginActionHandler = (e) => {
    e.preventDefault();
    loginAction.mutate();
  };

  return (
    <Container>
      <SignInput
        name={"email"}
        label={"Email"}
        text={"이메일을 입력하세요"}
        type={"email"}
        changeHandler={inputChangeHandler}
        onBlur={emailValidation}
        value={loginValue.email}
        errorMessage={"이메일 형식을 지켜주세여"}
        setValid={setInputValid}
      />
      <SignInput
        name={"password"}
        label={"Password"}
        text={"Input your Password"}
        type={"password"}
        changeHandler={inputChangeHandler}
        onBlur={passwordValidation}
        value={loginValue.password}
        errorMassage={"비밀번호는 6자리 이상을 입력해주세요."}
        setValid={setInputValid}
      />
      <MiddleWrapper>
        <SignButton
          mode={"login"}
          onClickHandler={loginActionHandler}
          disabled={isValid}
        >
          로그인
        </SignButton>
      </MiddleWrapper>
    </Container>
  )
}


const Container = styled.form`
  width: 100%;
  max-width: 620px;
  padding: 64px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const MiddleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

