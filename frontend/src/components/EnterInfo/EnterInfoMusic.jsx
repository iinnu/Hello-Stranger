import EnterInfoMusicCard from './EnterInfoMusicCard.jsx'
import mascot from '../../assets/images/WalkingGirl.gif'
import { Button } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import styled from '@emotion/styled';

const PlainButton = styled(Button)`
  &.MuiButton-root {
    color: black;
    &:hover {
      background-color: white;
    }
  }
`;
const EnterInfo = () => {  
      const handleNext = () => {
        console.log('다음');
        window.location.href ="/info/food"
      };
    return (
        <div>
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
    );
};

export default EnterInfo;