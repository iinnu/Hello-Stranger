import EnterInfoActivityCard from './EnterInfoActivityCard.jsx'
import mascot from '../../assets/images/WalkingGirl.gif'
import { Button } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
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
    const ActivityList = [
        {
          id: 1,
          activityTitle: "영화관",
          activityUrl: 'https://w.namu.la/s/1d79ccbedf6fd6f8ba4481857bf1c0011181f61b50caabc00fc577164f39f7fba6aa9c1d29c667ba5459a911fbbecb3da0d5ceb46ad33b21c0aaef8caef00c27acda780a9947d61fc3a9f419b560cdbfd493f402db4fb6b5567d93905b17a4f687512a12271d8a47a21499b72f41f396'
        },
        {
          id: 2,
          activityTitle: "서점/도서관",
          activityUrl: 'https://w.namu.la/s/95e81cdd0f82ddeb269ec92cc010b771b1a0e5827501e940e86ca0437c697db0adb01f95bd837821e1148739b13e536e88d9cf511f70ae9bb9c5717bd5e3ee4ee0cdde1fcf311e465de8d17eee776f4a69fadb34e66214307cf3a4e6c3b305abcac9bc54b7dde103d636e4fc5f3fe1dc'
        },
        {
          id: 3,
          activityTitle: "당구장",
          activityUrl: 'https://w.namu.la/s/0ab6c6adac6de82e3aa4e64bd139c3beef5e771ade60192bb36a2a79ad2a10ed1f884120542e42b1dbbbdb6a34a861c56210e60ed97728c792717acc049cf32d3ae1c287c9f07e8183bd30d4f15809f0953843e41d4840eb14bd4a557e42dc8af3f8f43e13acbea8dbb64f3b7716a5e9'
        },
        {
          id: 4,
          activityTitle: "전시회",
          activityUrl: 'https://w.namu.la/s/aee3011c270a268f4c125a6e3bd30547f2d53099eb700d3815db132b51c74476fc3010af7b5ef99867fd1908558ef6b054dc08529097e3373697f6c6251aeb9eddd40d246e044b3943e5a6859437e6272159ea1c1b30a6d61fbbb6297d877dd11017809da585eb3b5c4aafefd5a034de'
        },
      ];
    const handlePrev = () => {
        console.log('이전');
        window.location.href ="/info/food"
      };
    
      const handleNext = () => {
        console.log('다음');
        window.location.href ="/info/start"
      };
    return (
        <div>
            <div className='UserInput__Activity__Title'>
                <h2>어던 활동을</h2>
                <h2>자주 하시나요?</h2>
            </div>
            <div className='UserInput__Activity__Item'>
                {/* <EnterInfoActivityCard/> */}
                <img className="UserInput__Activity__Item__Mascot" src={mascot} alt="Mascot" />
            </div>
            <div className="recommend-bottom">
                <PlainButton startIcon={<ArrowBackIosNewIcon />} onClick={handlePrev}>
                    이전
                </PlainButton>
                <PlainButton endIcon={<ArrowForwardIosIcon />} onClick={handleNext}>
                    다음
                </PlainButton>
            </div>
        </div>
    );
};

export default EnterInfo;