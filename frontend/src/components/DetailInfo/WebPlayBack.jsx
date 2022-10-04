import {useMemo, useEffect, useState} from 'react'
import SpotifyPlayer from 'react-spotify-web-playback';
import DetailPlaylistItem from './DetailPlaylistItems';
function WebPlayback({trackIdList, playlist}) {
    const accessToken = process.env.REACT_APP_SPOTIFY_ACCESS_TOKEN_TWO
    const [currentMusic, setCurrentMusic] = useState(false)
    function handleCallback(){
        const currentMusicLink = document.querySelector('div.rswp__active > a > img')
        if(currentMusicLink){
            setCurrentMusic(currentMusicLink.getAttribute('alt'))
            console.log('alt',currentMusicLink.getAttribute('alt'))
        } else return;
    }
    return (
    <>
    <SpotifyPlayer
    token={accessToken}
    uris={trackIdList}
    callback={handleCallback}
    />
    <div className="detail-info__music--playlist">
    {playlist.map((e)=>{
        return <DetailPlaylistItem data={e} key={e.id} currentMusic={currentMusic}/>
    })}
    </div>
    </>
    )
}

export default WebPlayback