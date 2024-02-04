import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Page from "../../components/Page";
import { useAuth } from "../../contexts/auth.context";

import styled from "styled-components";

function SingInPage() {
  const { signIn, isLoggedIn } = useAuth();
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const pathTogo = location.state?.from || "/";

  const handleClickSignIn = () => {
    if (!userId || !password) {
      alert("아이디와 비밀번호를 입력해주세요");
      return;
    }

    if (userId === "udemy" && password === "udemy") {
      signIn(userId);
      alert("로그인 성공");
      navigate(pathTogo);
    } else {
      alert("아이디나 비밀번호가 잘못되었습니다.");
      return;
    }
  };

  return isLoggedIn ? (
    <div>로그인성공</div>
  ) : (
    <Page>
      <Title>Login</Title>
      <SignInForm onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          placeholder="아이디를 입력해주세요"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="비밀번호를 입력해주세요"
        />
        <button onClick={handleClickSignIn}>로그인</button>
      </SignInForm>
    </Page>
  );
}

export default SingInPage;

const Title = styled.h2`
  text-align: center;
  padding: 3rem 0 1rem;
  font-size: 40px;
`;

const SignInForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 500px;
  margin: 0 auto;
  row-gap: 30px;

  input {
    height: 4rem;
    font-size: 20px;
    /* border: none;
    border-bottom: 1px solid black; */
    padding: 5px 10px;
    border-radius: 8px;
  }
  button {
    height: 4rem;
    border: none;
    background-color: black;
    color: white;
    font-size: 20px;
    font-weight: 600;
    border-radius: 8px;
  }

  button:hover {
    background-color: rgb(130, 130, 130);
    cursor: pointer;
  }
`;
