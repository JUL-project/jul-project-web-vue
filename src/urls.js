
export const BASE_URL = "http://127.0.0.1:8080/api";
export const LOGIN_URL = `${BASE_URL}/login`;

export const SOCIAL_LOGIN_URL = 
    platform => `${BASE_URL}/social/${platform}`;

export const SOCIAL_LOGIN_CALLBACK_URL = 
    platform => `${BASE_URL}/social/${platform}/callback`;