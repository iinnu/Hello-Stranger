import { gapi } from "gapi-script";
import getRecommendation from "api/music_api";
import createPlaylist from "api/playlist";
import React, { useState, useEffect } from "react";

function HistoryTitle() {
  const oauth2Service =
    "835634401246-ddaeprck32cbkjmajefeffl5vh7f5kd6.apps.googleusercontent.com";
  const accessToken = localStorage.getItem("accessToken");
  const [playlist, setPlaylist] = useState({});
  async function recommend() {
    const data = await getRecommendation();
    console.log('오나?',data)
    setPlaylist(data);
    const trackIdLIst = []
    data.tracks.forEach((d)=>trackIdLIst.push(`spotify:track:${d.id}`))
    console.log('trackIdLIst', trackIdLIst)
    createPlaylist(trackIdLIst)
  }
  function insertPlaylist() {
    return gapi.client.youtube.playlists
      .insert({
        part: ["snippet"],
        resource: {
          snippet: {
            title: "plz",
          },
        },
      })
      .then(
        function (response) {
          // Handle the results here (response.result has the parsed body).
          console.log("Response", response);
        },
        function (err) {
          console.error("Execute error", err);
        }
      );
  }
  gapi.load("client:auth2", function () {
    gapi.auth2.init({ client_id: oauth2Service });
  });
  return (
    <div className="history__title" onClick={recommend}>
      내 일정 다시보기
    </div>
  );
}

export default HistoryTitle;
