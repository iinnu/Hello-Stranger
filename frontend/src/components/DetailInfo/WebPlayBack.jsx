import SpotifyPlayer from 'react-spotify-web-playback';

function WebPlayback(props) {
    const accessToken = process.env.REACT_APP_SPOTIFY_ACCESS_TOKEN_TWO
    console.log('WebPlayback', accessToken)
    return (
    <>
    <SpotifyPlayer
    token={accessToken}
    uris={props.playlist}
    />;
    </>
    )
}

export default WebPlayback