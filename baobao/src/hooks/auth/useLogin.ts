import React, {useState, useEffect} from "react";
import {showToast} from "src/libs/toast/Swal";
import {useNavigate, useSearchParams} from "react-router-dom";
import axios, {AxiosError} from "axios";
import CONFIG from "src/config/config.json";

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
                    const {accessToken} = response.data;
                    localStorage.setItem("accessToken", accessToken);

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

    // const getCode = async (code: string) => {
    //     setLoading(true);
    //     try {
    //         const response = await axios.get(`${CONFIG.kakao}`);
    //         console.log(searchParams.get(response.data.url));
    //     } catch (error) {
    //         setLoading(false);
    //         if (axios.isAxiosError(error)) {
    //             showToast("error", "통신 오류가 발생했습니다.");
    //         }
    //     }
    // }


    return {
        loading,
    };
};

export default UseLogin2;
