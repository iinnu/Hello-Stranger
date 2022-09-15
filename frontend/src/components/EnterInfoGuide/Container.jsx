import "styles/EnterInfoGuidePage/Container.scss";

function Container(props) {
  return (
    <div id="container">
      <div className="inner">{props.children}</div>
    </div>
  );
}

export default Container;
