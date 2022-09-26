import React, { useEffect, useState } from "react";
import GoogleLogin from 'react-google-login';
import { gapi } from 'gapi-script';
import logo from '../assets/images/Logo.png'
import mascot from '../assets/images/WalkingGirl.gif'
import Container from 'components/common/Container';
import 'styles/LoginPage/LoginPage.scss';
import axios from "axios";
import { useDispatch } from 'react-redux'

const LoginPage = ({ onSocial }) => {
    //youtube 권한 얻기 위해 scope 추가 - 0921 병헌
    // const [user_choice, set_user_choice] = useState()
    // useEffect(() => {
    //     function start() {
    //         gapi.client.init({
    //             clientId,
    //             scope: 'email https://www.googleapis.com/auth/youtube https://www.googleapis.com/auth/youtube.force-ssl https://www.googleapis.com/auth/youtubepartner',
    //         });
    //     }
    //     gapi.load('client:auth2', start);
    // }, []);

    // const onSuccess = (response) => {
    //     console.log(response);

    //     //accessToken localStorage에 임시로 저장 - 0921 병헌
    //     localStorage.setItem('access_token', response.accessToken)
    //     gapi.client.setToken(response.accessToken)

    //     console.log(response.tokenId)
    //     axios({
    //         url: 'http://localhost:8081/api/user',
    //         method: 'post',
    //         data:{
    //             "idToken" : response.tokenId
    //         }
    //     })
    //     .then(res => {
    //         console.log(res)
    //         window.location.href ="/main"
    //     })
    //     .catch(err=>{
    //         console.log(err)
    //         axios({
    //             url: 'http://localhost:8081/api/user/choice',
    //             method:'get',
    //         })
    //         .then(res=>{
    //             set_user_choice(res)
    //             window.location.href ="/main"
    //         })
    //         .catch(err=>{
    //             console.log(err)
    //             window.location.href ="/guide/first"
    //         })
    //     })
    // };

    // const onFailure = (response) => {
    //     console.log(response);
    // };

    const CLIENT_ID = "6d92d2e223a8402db931ef210c6c4556"
    const REDIRECT_URI = "http://localhost:3000/guide/first"
    // const REDIRECT_URI = "http://localhost:3000"
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
    const RESPONSE_TYPE = "token"
  
    const [token, setToken] = useState("")
  
    useEffect(() => {
        const hash = window.location.hash
        let token = window.localStorage.getItem("token")
  
        if (!token && hash) {
            token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]
  
            window.location.hash = ""
            window.localStorage.setItem("token", token)
        }
  
        setToken(token)
    }, [])
  
    const logout = () => {
        setToken("")
        window.localStorage.removeItem("token")
    }
    return (
        <div>
            <Container>
                <div className="Login">
                    <img className="Login__Logo" src={logo} alt="Logo" />
                    <img className="Login__Mascot" src={mascot} alt="Mascot" />
                    {!token ?
                  <a href={`https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=${RESPONSE_TYPE}&scope=streaming%20user-read-email%20user-read-private&redirect_uri=${REDIRECT_URI}`}>Login
                      to Spotify</a>
                  : <button onClick={logout}>Logout</button>}
                </div>
            </Container>
        </div>
    );
};




export default LoginPage;

// const clientId = '835634401246-ddaeprck32cbkjmajefeffl5vh7f5kd6.apps.googleusercontent.com'

// const LoginPage = ({ onSocial }) => {

//     useEffect(() => {
//         function start() {
//             gapi.client.init({
//                 clientId,
//                 scope: 'email',
//             });
//         }
//         gapi.load('client:auth2', start);
//     }, []);

//     const dispatch = useDispatch()
//     const onSuccess = (response) => {
//         console.log(response);
//         console.log(response.tokenId)
//         axios({
//             url: 'http://localhost:8081/api/user',
//             method: 'post',
//             data:{
//                 "idToken" : response.tokenId
//             }
//         })
//         .then(res => {
//             console.log(res)
//             window.location.href ="/main"
//         })
//         .catch(err=>{
//             console.log(err)
//             dispatch({type:'getUserChoice'})
//         })
//     };

//     const onFailure = (response) => {
//         console.log(response);
//     };
//     return (
//         <div>
//             <Container>
//                 <div className="Login">
//                     <img className="Login__Logo" src={logo} alt="Logo" />
//                     <img className="Login__Mascot" src={mascot} alt="Mascot" />
//                     <GoogleLogin
//                         className="Login__GoogleLogin"
//                         clientId={clientId}
//                         buttonText="로그인하기"
//                         onSuccess={onSuccess}
//                         onFailure={onFailure}
//                     />
//                 </div>
//             </Container>
//         </div>
//     );
// };




// export default LoginPage;