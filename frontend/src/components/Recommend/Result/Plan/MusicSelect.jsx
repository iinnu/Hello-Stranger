export default function MusicSelect({ list, current, setCurrent }) {
  return (
    <div className="plan-music__inner">
      <div className="plan-music__selected">
        {current && (
          <div className="plan-music__selected__inner">
            <img src={current.musicImgUrl} alt="music covoer" />
            <div
              style={{
                fontWeight: '600',
                marginTop: '10px',
                fontSize: '0.8em',
              }}
            >
              {current.musicName}
            </div>
            <div style={{ color: 'gray', fontSize: '0.7em' }}>
              {current.musicArtist}
            </div>
          </div>
        )}
        {!current && (
          <div
            style={{
              textAlign: 'center',
              fontSize: '0.8em',
              color: 'gray',
              marginTop: '30px',
            }}
          >
            선택된 음악이 없습니다
          </div>
        )}
      </div>
      <div className="plan-music__list">
        {list.map((item) => (
          <div
            key={item.musicID}
            className={
              current?.musicID === item.musicID
                ? 'plan-music__list__item plan-music__list__item--active'
                : 'plan-music__list__item'
            }
            onClick={() => setCurrent(item)}
          >
            <div>{item.musicName}</div>
            <div>{item.musicArtist}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
