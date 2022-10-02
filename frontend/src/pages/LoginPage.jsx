import logo from '../assets/images/Logo.png';
import mascot from '../assets/images/WalkingGirl.gif';
import Container from 'components/common/Container';
import 'styles/LoginPage/LoginPage.scss';
import axios from 'axios';
import SpotifyLogin from 'react-spotify-login';
import spotify_logo from 'assets/images/spotify_logo.png';

const generateRandomString = (length) => {
  let text = '';
  const possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

const LoginPage = ({ onSocial }) => {
  const CLIENT_ID = '6d92d2e223a8402db931ef210c6c4556';
  // const REDIRECT_URI = "http://localhost:3000/guide/first"
  const REDIRECT_URI = 'http://localhost:3000';

  const onSuccess = (response) => {
    console.log(response);
    axios({
      url: 'http://localhost:8081/api/user',
      method: 'post',
      data: {
        idToken: response.access_token,
      },
    })
      .then((res) => {
        console.log(res);
        // window.location.href ="/main"
        window.location.href = '/guide/first';
      })
      .catch((err) => {
        console.log(err);
        window.location.href = '/guide/first';
      });
  };

  const onFailure = (response) => {
    console.log(response);
  };

  const handleLogin = () => {
    const client_id = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
    const redirect_uri = process.env.REACT_APP_SPOTIFY_REDIRECT_URI;
    const scope =
      'playlist-modify-public playlist-modify-private streaming user-read-email user-read-private user-library-read user-library-modify user-read-playback-state user-modify-playback-state user-read-currently-playing';
    const state = generateRandomString(16);
    const url = `https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=code&scope=${scope}&redirect_uri=${redirect_uri}&state=${state}`;
    window.location.href = url;
  };

  return (
    <div>
      <Container>
        <div className="Login">
          <img className="Login__Logo" src={logo} alt="Logo" />
          <img className="Login__Mascot" src={mascot} alt="Mascot" />
          {/* <SpotifyLogin
            clientId={CLIENT_ID}
            redirectUri={REDIRECT_URI}
            onSuccess={onSuccess}
            onFailure={onFailure}
          /> */}
          <button className="Login__button" onClick={handleLogin}>
            <img src={spotify_logo} alt="spotify logo" />
            <div>Login with Spotify</div>
          </button>
        </div>
      </Container>
    </div>
  );
};

export default LoginPage;
