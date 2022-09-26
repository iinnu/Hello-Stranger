import logo from '../assets/images/Logo.png'
import mascot from '../assets/images/WalkingGirl.gif'
import Container from 'components/common/Container';
import 'styles/LoginPage/LoginPage.scss';
import axios from "axios";
import SpotifyLogin from 'react-spotify-login';

const LoginPage = ({ onSocial }) => {

    const CLIENT_ID = "6d92d2e223a8402db931ef210c6c4556"
    // const REDIRECT_URI = "http://localhost:3000/guide/first"
    const REDIRECT_URI = "http://localhost:3000"

    const onSuccess = (response) => {
        console.log(response);
        axios({
            url: 'http://localhost:8081/api/user',
            method: 'post',
            data:{
                "idToken" : response.access_token
            }
        })
        .then(res => {
            console.log(res)
            // window.location.href ="/main"
            window.location.href ="/guide/first"
        })
        .catch(err=>{
            console.log(err)
            window.location.href ="/guide/first"
        })
    };

    const onFailure = (response) => {
        console.log(response);
    };
    return (
        <div>
            <Container>
                <div className="Login">
                    <img className="Login__Logo" src={logo} alt="Logo" />
                    <img className="Login__Mascot" src={mascot} alt="Mascot" />
                    <SpotifyLogin 
                        clientId={CLIENT_ID}
                        redirectUri={REDIRECT_URI}
                        onSuccess={onSuccess}
                        onFailure={onFailure}/>,
                </div>
            </Container>
        </div>
    );
};




export default LoginPage;