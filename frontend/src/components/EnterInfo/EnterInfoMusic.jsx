import EnterInfoMusicCard from './EnterInfoMusicCard.jsx'
import mascot from '../../assets/images/WalkingGirl.gif'
import { Button } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import styled from '@emotion/styled';
import Container from 'components/common/Container';

const PlainButton = styled(Button)`
  &.MuiButton-root {
    color: black;
    &:hover {
      background-color: white;
    }
  }
`;
const EnterInfo = () => {  
    const playlist = [
        {
          musicID: 1,
          musicName: '가장 보통의 존재',
          musicArtist: '언니네 이발관',
          musicCategory: '',
          musicImgUrl:
            'https://image.genie.co.kr/Y/IMAGE/IMG_ALBUM/066/039/122/66039122_1395715494760_1_600x600.JPG/dims/resize/Q_80,0',
        },
        {
          musicID: 2,
          musicName: '정말 사랑했을까',
          musicArtist: '브라운아이드소울',
          musicCategory: '',
          musicImgUrl:
            'https://image.genie.co.kr/Y/IMAGE/IMG_ALBUM/015/027/251/15027251_1388739020483_1_600x600.JPG/dims/resize/Q_80,0',
        },
        {
          musicID: 3,
          musicName: 'starlight',
          musicArtist: 'Muse',
          musicCategory: '',
          musicImgUrl:
            'https://image.genie.co.kr/Y/IMAGE/IMG_ALBUM/040/585/421/40585421_1393312393347_1_600x600.JPG/dims/resize/Q_80,0',
        },
        {
          musicID: 4,
          musicName: '신경쓰여',
          musicArtist: '비비',
          musicCategory: '',
          musicImgUrl: 'https://image.genie.co.kr/Y/IMAGE/IMG_ALBUM/081/352/887/81352887_1580457272856_1_600x600.JPG/dims/resize/Q_80,0',
        },
        {
          musicID: 5,
          musicName: '좋은 밤 좋은 꿈',
          musicArtist: '너드커넥션',
          musicCategory: '',
          musicImgUrl: 'https://image.genie.co.kr/Y/IMAGE/IMG_ALBUM/081/392/508/81392508_1584692219778_1_600x600.JPG/dims/resize/Q_80,0',
        },
        {
          musicID: 6,
          musicName: 'Think About`chu',
          musicArtist: '아소토유니온',
          musicCategory: '',
          musicImgUrl: 'https://image.genie.co.kr/Y/IMAGE/IMG_ALBUM/015/027/829/15027829_1310533115577_1_600x600.JPG/dims/resize/Q_80,0',
        },
        {
          musicID: 7,
          musicName: '오랜만에',
          musicArtist: '김현철',
          musicCategory: '',
          musicImgUrl: 'https://image.genie.co.kr/Y/IMAGE/IMG_ALBUM/015/032/851/15032851_1310028555858_1_600x600.JPG/dims/resize/Q_80,0',
        },
        {
          musicID: 8,
          musicName: 'Afraid',
          musicArtist: 'DAY6',
          musicCategory: '',
          musicImgUrl: 'https://image.genie.co.kr/Y/IMAGE/IMG_ALBUM/081/438/259/81438259_1589175437111_1_600x600.JPG/dims/resize/Q_80,0',
        },
      ];
      const handleNext = () => {
        console.log('다음');
        window.location.href ="/info/food"
      };
    return (
      <div>
      <Container>
        <div className="UserInput">
            <div className='UserInput__Music__Title'>
                <h2>어떤 음악을</h2>
                <h2>자주 들으시나요?</h2>
            </div>
                <div className='UserInput__Music__Item'>
                    {/* <EnterInfoMusicCard/> */}
                    <img className="UserInput__Music__Item__Mascot" src={mascot} alt="Mascot" />
                </div>
                <div className="recommend-bottom">
                <PlainButton/>
                <PlainButton endIcon={<ArrowForwardIosIcon />} onClick={handleNext}>
                    다음
                </PlainButton>
            </div>
            </div>
          </Container>
        </div>
    );
};

export default EnterInfo;