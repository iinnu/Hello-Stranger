import {useMemo, useEffect, useState} from 'react'
import SpotifyPlayer from 'react-spotify-web-playback';
import DetailPlaylistItem from './DetailPlaylistItems';
function WebPlayback({trackIdList, playlist}) {
    console.log()
    const accessToken = localStorage.getItem('spotify')
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
        return <DetailPlaylistItem data={e} key={e.track.id} currentMusic={currentMusic}/>
    })}
    </div>
    </>
    )
}

export default WebPlayback