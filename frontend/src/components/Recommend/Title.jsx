function Title({ title }) {
  return (
    <div className="recommend-title">
      <>
        {title[0]}
        <br />
        {title[1]}
      </>
    </div>
  );
}

export default Title;
