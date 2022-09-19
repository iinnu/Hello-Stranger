import { useSetCurrentMusic } from "./MusicContext";

function MusicItem({ active, item }) {
  let className = active[0] + " " + active[1];
  const setCurrent = useSetCurrentMusic();

  const handleClick = () => {
    setCurrent(item);
  }

  return (
    <div className={className} onClick={handleClick}>
      <span className="item__title">{item.musicName}</span>
      <span className="item__artist">{item.musicArtist}</span>
    </div>
  );
}

export default MusicItem;
