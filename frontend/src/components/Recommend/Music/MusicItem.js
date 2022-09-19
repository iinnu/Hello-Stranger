function MusicItem({ title, artist }) {
  return (
    <div className="list__item">
      <span className="item__title">{title}</span>
      <span className="item__artist">{artist}</span>
    </div>
  );
}

export default MusicItem;
