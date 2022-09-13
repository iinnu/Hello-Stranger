import React, { useEffect } from "react";
import GoogleLogin from 'react-google-login';
import { gapi } from 'gapi-script';

const clientId = '835634401246-ddaeprck32cbkjmajefeffl5vh7f5kd6.apps.googleusercontent.com'

const LoginButton = ({ onSocial }) => {
    useEffect(() => {
        function start() {
            gapi.client.init({
                clientId,
                scope: 'email',
            });
        }
        gapi.load('client:auth2', start);
    }, []);

    const onSuccess = (response) => {
        console.log(response);
    };

    const onFailure = (response) => {
        console.log(response);
    };
    return (
        <div>
            <GoogleLogin
                clientId={clientId}
                buttonText="로그인하기"
                onSuccess={onSuccess}
                onFailure={onFailure}
            />
        </div>
    );
};




export default LoginButton;