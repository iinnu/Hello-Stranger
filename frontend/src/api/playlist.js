import axios from "axios";

export default function createPlaylist() {
 const accessToken =
 "BQAXipLiXOnTJcveaSJ_WgkeknypM9QAU1t2oRPwqmjMOlmhuE6zUZas507SBWkYdER2RPPnQzu5Q0pXanw48Sg5-DJ0ZwHnLtvtFm0_N0TEJSneVTe-c4k0yBhW7gJ3dzTV-hjE_R-OxvH2WWJ6YdMjK-2niYRrsX0ma5nhlQx6N06AX-YM9RYpMOOktHD3CFYMCLCkNfynLQM8L6h7vUBhogeo3VpJSQb9wDAeAZOTgBqoMOMYWVqxEGT2aEs2B_Z_Zj2Oh1rezvJ4Lp-b8LqiTfwE2kG5-y0-Y7YThpb6NOfGAnyfw5ituLZoAXj_qK5bEnhlJ5GNBM_uhV2UVMyLqvwQ-ezujR38oNuUMZyG5XFkbcUK2_AsROUy1LsMEgo_laCfQ";

 // 플레이리스트 만들기 위해 userId를 get user profile 통해 가져옴
  axios.get('https://api.spotify.com/v1/me', {
   headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json',
       'Authorization': 
         `Bearer ${accessToken}`
      }
  }

 // 이제 createPlaylist를 통해 플레이리스트를 새롭게 만듦
 const today = new Date()
 axios.post(
  'https://api.spotify.com/v1/users/1/playlists',
  {
      'name': `Hello Stragner ${today}`,
      'description': 'Hello Stranger에서 제공한 플레이리스트',
      'public': false
  },
  {
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 
            `Bearer ${accessToken}`
      }
  }
)
}