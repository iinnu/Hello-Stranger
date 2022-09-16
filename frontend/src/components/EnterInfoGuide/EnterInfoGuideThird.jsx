import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import EnterInfoBasicCard from './EnterInfoBasicCard.jsx'
import mascot from '../../assets/images/WalkingGirl.gif'
const EnterInfoGuideThird = () => {
    return (
        <div>
            <div className='Guide__Third__Title'>
                <h2>좋아하는 것은 위로,</h2>
                <h2>싫어하는 것은 아래로</h2>
                <h2>스와이프 해주세요.</h2>
            </div>
            <div className='Guide__Third__Item'>
                <p>좋아하면 위로!!</p>
                <ArrowUpwardIcon/>
                <img className="Guide__Third__Item__Mascot" src={mascot} alt="Mascot" />
                <ArrowDownwardIcon/>
                <p>싫어하면 밑으로!!</p>
            </div>
        </div>
    );
};

export default EnterInfoGuideThird;