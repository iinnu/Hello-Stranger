import axios from "axios";

export default async function createPlaylist(data) {
  const accessToken = process.env.REACT_APP_SPOTIFY_ACCESS_TOKEN_ONE
  console.log('createPlaylist', accessToken)

  const playlistIdList = await data.tracks.map((d)=>`spotify:track:${d.id}`)
  // 플레이리스트 만들기 위해 userId를 get user profile 통해 가져옴
  async function getCurrentUserProfileAxios() {
    const userId = await axios
      .get("https://api.spotify.com/v1/me", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((res) => {
        console.log('userId', res.data.id)
        return res.data.id
        })
      .catch((err) => console.error(err));
    return userId;
  }

  // 이제 createPlaylist를 통해 플레이리스트를 새롭게 만듦
  async function createPlaylistAxios() {
    const today = new Date();
    const playlistId = await axios
      .post(
        `https://api.spotify.com/v1/users/${userId}/playlists`,
        {
          name: `Hello Stranger ${today}`,
          description: "Hello Stranger에서 제공한 플레이리스트",
          public: false,
        },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )
      .then((res) => {
        console.log('playlistId', res.data.id)
        return res.data.id
        })      
    .catch((err) => console.error(err));
    return playlistId;
  }

  // 이제 Add Items to Playlist
  async function addItemsToPlaylistAxios() {
    axios
      .post(
        `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
        {
          uris: playlistIdList,
          position: 0,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )
      .then((res) => {
        console.log("와 만들어졌다!", res);
      });
  }

  const userId = await getCurrentUserProfileAxios();
  const playlistId = await createPlaylistAxios();
  await addItemsToPlaylistAxios();

  return playlistIdList
}
