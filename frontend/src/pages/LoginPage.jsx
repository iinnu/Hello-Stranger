import logo from '../assets/images/Logo.png';
import mascot from '../assets/images/WalkingGirl.gif';
import Container from 'components/common/Container';
import 'styles/LoginPage/LoginPage.scss';
import spotify_logo from 'assets/images/spotify_logo.png';

const generateRandomString = (length) => {
  let text = '';
  const possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}

const LoginPage = ({ onSocial }) => {

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