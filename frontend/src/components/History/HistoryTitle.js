import { gapi } from 'gapi-script';

function HistoryTitle() {
  const oauth2Service ='835634401246-ddaeprck32cbkjmajefeffl5vh7f5kd6.apps.googleusercontent.com'
  const accessToken = localStorage.getItem('accessToken')
  function insertPlaylist() {
    return gapi.client.youtube.playlists.insert({
      "part": [
        "snippet"
      ],
      "resource": {
        "snippet": {
          "title": "plz"
        }
      }
    })
    .then(function(response) {
      // Handle the results here (response.result has the parsed body).
      console.log("Response", response);
    },
    function(err) { console.error("Execute error", err); });
  }
  gapi.load("client:auth2", function() {
    gapi.auth2.init({client_id: oauth2Service});
  });
  return (
    <div className="history__title" onClick={insertPlaylist}>내 일정 다시보기</div>
  );
}

export default HistoryTitle;
