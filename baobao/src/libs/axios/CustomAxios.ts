import axios, { AxiosRequestConfig } from "axios";
import CONFIG from "src/config/config.json";
import {
    ACCESS_TOKEN_KEY,
    REQUEST_TOKEN_KEY,
} from "src/constants/tokens/token.constants";
import token from "src/libs/token/token";
import requestHandler from "src/libs/axios/requestHandler";
import errorResponseHandler from "src/libs/axios/errorResponseHandler";
const createAxiosInstance = (config: AxiosRequestConfig) => {
    const ACCESS_TOKEN = token.getToken(ACCESS_TOKEN_KEY);
    const baseConfig: AxiosRequestConfig = {
        headers: {
            Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
    };
    return axios.create({
        ...baseConfig,
        ...config
    });
}

export const baobaoAxios = createAxiosInstance({
    baseURL: CONFIG.serverUrl,
    headers: {
        [REQUEST_TOKEN_KEY]: `Bearer ${token.getToken(ACCESS_TOKEN_KEY)}`
    },
});

export const baobaoAxiosSetAccessToken = (newToken: string) => {
    baobaoAxios.defaults.headers.common[REQUEST_TOKEN_KEY] = `Bearer ${newToken}`;
};

baobaoAxios.interceptors.request.use(
    requestHandler as any,
    (response) => response
);

baobaoAxios.interceptors.response.use(
    (response) => response,
    errorResponseHandler
);