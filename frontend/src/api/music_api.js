import axios from "axios";

const genreList = [
  "acoustic",
  "afrobeat",
  "alt-rock",
  "alternative",
  "ambient",
  "anime",
  "black-metal",
  "bluegrass",
  "blues",
  "bossanova",
  "brazil",
  "breakbeat",
  "british",
  "cantopop",
  "chicago-house",
  "children",
  "chill",
  "classical",
  "club",
  "comedy",
  "country",
  "dance",
  "dancehall",
  "death-metal",
  "deep-house",
  "detroit-techno",
  "disco",
  "disney",
  "drum-and-bass",
  "dub",
  "dubstep",
  "edm",
  "electro",
  "electronic",
  "emo",
  "folk",
  "forro",
  "french",
  "funk",
  "garage",
  "german",
  "gospel",
  "goth",
  "grindcore",
  "groove",
  "grunge",
  "guitar",
  "happy",
  "hard-rock",
  "hardcore",
  "hardstyle",
  "heavy-metal",
  "hip-hop",
  "holidays",
  "honky-tonk",
  "house",
  "idm",
  "indian",
  "indie",
  "indie-pop",
  "industrial",
  "iranian",
  "j-dance",
  "j-idol",
  "j-pop",
  "j-rock",
  "jazz",
  "k-pop",
  "kids",
  "latin",
  "latino",
  "malay",
  "mandopop",
  "metal",
  "metal-misc",
  "metalcore",
  "minimal-techno",
  "movies",
  "mpb",
  "new-age",
  "new-release",
  "opera",
  "pagode",
  "party",
  "philippines-opm",
  "piano",
  "pop",
  "pop-film",
  "post-dubstep",
  "power-pop",
  "progressive-house",
  "psych-rock",
  "punk",
  "punk-rock",
  "r-n-b",
  "rainy-day",
  "reggae",
  "reggaeton",
  "road-trip",
  "rock",
  "rock-n-roll",
  "rockabilly",
  "romance",
  "sad",
  "salsa",
  "samba",
  "sertanejo",
  "show-tunes",
  "singer-songwriter",
  "ska",
  "sleep",
  "songwriter",
  "soul",
  "soundtracks",
  "spanish",
  "study",
  "summer",
  "swedish",
  "synth-pop",
  "tango",
  "techno",
  "trance",
  "trip-hop",
  "turkish",
  "work-out",
  "world-music",
];

export default async function getRecommendation() {
  const accessToken =
    "BQAxGcwDOx-25eOv-pc6OXfuz4r1n1EKiBLDW4X-ESml2CmI8uI3oWASuTjh7b5lL2ZuhG--tt6brmrO0sH7Msef2uZlkGwRC5yLiV2t7-P3jLsFyZZucbUaiGJBjHqQ3Ufvvg0B1jRi8XB6omJQ-MJV9qFtes7F-XPSReDXp1wEwoKyFQ_Zw5p4vFVb9TSU6g8";

  // search를 통해 유저가 선택한 곡 제목을 인풋으로 넣고의 trackId, artistId를 받는 요청
  function searchAxios() {
    return axios
      .get("https://api.spotify.com/v1/search", {
        params: {
          q: "macklemore can't hold us",
          type: "track",
          limit: "1",
        },
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((res) => {
        console.log("inside searchAxios", res.data);
        const trackId = res.data.tracks.items[0].id;
        const artistId = res.data.tracks.items[0].artists[0].id;
        return { trackId, artistId };
      })
      .catch((err) => console.log(err));
  }

  // spotify에서 추천받기 위해서는 genre도 필요함
  // 임의의 장르를 추가할 수는 없기 때문에 artist의 genre를 가져오기로 함
  // getArtist를 통해 artistId를 인풋으로 넣고 genre를 가져옴
  async function getArtistAxios() {
    return axios
      .get(`https://api.spotify.com/v1/artists/${artistId}`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((res) => {
        const genres = res.data.genres
          .filter((e1) => {
            return genreList.includes(e1);
          })
          .join();
        console.log("getArtistAxios", genres);
        return genres;
      })
      .catch((err) => console.log(err));
  }

  // 이 장르를 또 추천받기 위한 인풋으로 바로 넣을 수는 없음
  // spotify가 인풋으로 받는 장르와 artist에 달린 genre가 일치하지 않음...
  // 그래서 spotify가 인풋으로 받는 장르에 있는 것만 받아와서 추천 받음
  // getRecommendation에 trackId, artistId, genres를 인풋으로 넣고 추천곡들을 가져옴
  async function recommendAxios() {
    return axios
      .get("https://api.spotify.com/v1/recommendations", {
        params: {
          limit: 10,
          market: "KR",
          seed_artists: artistId,
          seed_genres: genres,
          seed_tracks: trackId,
        },
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((res) => res.data)
      .catch((err) => console.log(err));
  }

  const { trackId, artistId } = await searchAxios();
  const genres = await getArtistAxios();
  const data = await recommendAxios();
  console.log(data)
  return data;
}
