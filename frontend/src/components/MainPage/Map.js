import React, { useEffect } from "react";

const { kakao } = window;

const Map = () => {
  useEffect(() => {
    let container = document.getElementById("map");
    let options = {
      center: new window.kakao.maps.LatLng(37.365264512305174, 127.10676860117488),
      level: 3,
    };

    let map = new window.kakao.maps.Map(container, options);

    console.log("loading kakaomap");
  }, []);

  return (
    <div>
      <div id="map" style={{ width: "500px", height: "400px" }}></div>
    </div>
  );
};

export default Map;
