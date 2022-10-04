import { useEffect, useState } from "react"
export default function DetailPlaylistItems({data, currentMusic}){
    const songName = data?.name
    const artistsName = data?.artists.map((e)=>{
        return e.name
    }).join(',')
    const shortVersion = function(text){
        if(text.length < 30){
            return text
        } else {
            return text.slice(0, 30) + '...'
        }
    }
    const [isPlaying, setIsPlaying] = useState(false)
    useEffect(()=>{
        if(currentMusic === songName){
            setIsPlaying(true)
        } else {
            setIsPlaying(false)
        }
    }
    ,[currentMusic])
    return (
        <div className="list-items" style={isPlaying ? {backgroundColor: 'rgba(255, 255, 255, 0.4)'} : {} }>
        <p>{shortVersion(songName)}</p>
        <p>{shortVersion(artistsName)}</p>
        </div>
    )
}