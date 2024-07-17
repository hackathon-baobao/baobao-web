import axios, { AxiosError } from "axios";
import CONFIG from "src/config/config.json";
import {
    ACCESS_TOKEN_KEY,
    REFRESH_TOKEN_KEY,
} from "src/constants/tokens/token.constants";
import token from "src/libs/token/token";
import { baobaoAxios } from "src/libs/axios/CustomAxios";

let isRefreshing = false;
let refreshSubscribers: ((accessToken: string) => void)[] = [];
const onTokenRefreshed = (accessToken: string) => {
    refreshSubscribers.map((callback) => callback(accessToken));
};

const addRefreshSubscriber = (callback: (accessToken: string) => void) => {
    refreshSubscribers.push(callback);
};

const errorResponseHandler = async (error: AxiosError) => {
    if (error.response) {
        const {
            config: originalRequest,
            response: { status }
        } = error;

        const usingAccessToken = token.getToken(ACCESS_TOKEN_KEY);
        const usingRefreshToken = token.getToken(REFRESH_TOKEN_KEY);

        if (
            usingAccessToken !== undefined &&
            usingRefreshToken !== undefined &&
            status == 401
        ) {
            if (!isRefreshing) {
                isRefreshing = true;

                try {
                    const data = await axios.post(`${CONFIG.serverUrl}/auth/reissue`, {
                        refreshToken: usingRefreshToken,
                    });

                    const newAccessToken = data.data.data.accessToken;
                    token.setToken(ACCESS_TOKEN_KEY, newAccessToken);
                    isRefreshing = false;
                    onTokenRefreshed(newAccessToken);
                } catch (error) {
                    token.clearToken();
                    window.location.href = '/';
                }
            }

            return new Promise((resolve, rejects) => {
                addRefreshSubscriber((accessToken: string) => {
                    if (originalRequest) {
                        originalRequest.headers![
                            REFRESH_TOKEN_KEY
                            ] = `Bearer ${accessToken}`;
                        resolve(baobaoAxios(originalRequest));
                    } else {
                        rejects("originalRequest is undefined");
                    }
                });
            });
        }
    }
    return Promise.reject(error);
};

export default errorResponseHandler;