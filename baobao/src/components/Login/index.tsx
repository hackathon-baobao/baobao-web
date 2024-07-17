import React from "react";
import * as S from "src/components/Login/style";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        window.location.href = "https://kauth.kakao.com/oauth/authorize?client_id=f1a7fecc6abc2f764593468b8ff349fc&redirect_uri=http://localhost:3000/callback&response_type=code&scope=account_email,friends,profile_nickname";
    };

    return (
        <S.LoginButton onClick={handleLogin}>카카오 로그인</S.LoginButton>
    );
};

export default Login;
