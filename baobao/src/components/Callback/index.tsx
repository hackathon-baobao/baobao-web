import React from 'react';
import useLogin from "src/hooks/auth/useLogin";

const Callback = () => {

    useLogin()

    return (
        <div>
            로딩 중...
        </div>
    );
};

export default Callback;