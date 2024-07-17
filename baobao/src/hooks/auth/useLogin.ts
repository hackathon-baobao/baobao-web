import React, {useState, useEffect} from "react";
import {showToast} from "src/libs/toast/Swal";
import {useNavigate, useSearchParams} from "react-router-dom";
import axios, {AxiosError} from "axios";
import CONFIG from "src/config/config.json";
import Token from "src/libs/token/token";
import {ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY} from "src/constants/tokens/token.constants";

const UseLogin2 = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const code = searchParams.get("code");

        console.log(code);

        if (code) {
            const handleLogin = async (code: string) => {
                setLoading(true);
                try {
                    const response = await axios.post(`${CONFIG.serverUrl}/login?code=${code}`);

                    console.log(response.data.data);

                    const {accessToken, refreshToken} = response.data.data;

                    Token.setToken(ACCESS_TOKEN_KEY, accessToken);
                    Token.setToken(REFRESH_TOKEN_KEY, refreshToken)

                    showToast("success", "로그인 성공");
                    navigate("/campaign");
                } catch (error) {
                    setLoading(false);
                    if (axios.isAxiosError(error)) {
                        if (error.response?.status === 401) {
                            showToast("error", "알맞지 않은 이메일 혹은 비밀번호 입니다");
                        } else {
                            showToast("error", "통신 오류가 발생했습니다.");
                        }
                    }
                }
            };

            handleLogin(code);
        }
    }, []);
    return {
        loading,
    };
};

export default UseLogin2;
