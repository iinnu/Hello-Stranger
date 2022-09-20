import React, { useEffect } from "react";
import GoogleLogin from 'react-google-login';
import { gapi } from 'gapi-script';
import logo from '../assets/images/Logo.png'
import mascot from '../assets/images/WalkingGirl.gif'

const clientId = '835634401246-ddaeprck32cbkjmajefeffl5vh7f5kd6.apps.googleusercontent.com'

const LoginPage = ({ onSocial }) => {
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
            <img src={logo} alt="Logo" />
            <img src={mascot} alt="Mascot" />
            <GoogleLogin
                clientId={clientId}
                buttonText="로그인하기"
                onSuccess={onSuccess}
                onFailure={onFailure}
            />
        </div>
    );
};




export default LoginPage;