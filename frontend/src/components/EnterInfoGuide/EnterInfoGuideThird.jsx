import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import EnterInfoBasicCard from './EnterInfoBasicCard.jsx'

const EnterInfoGuideThird = () => {
    return (
        <div>
            <div>
                <h1>좋아하는 것은 위로,</h1>
                <h1>싫어하는 것은 아래로</h1>
                <h1>스와이프 해주세요.</h1>
            </div>
            <div>
                <p>좋아하면 위로!!</p>
                <ArrowUpwardIcon/>
                <div>
                    <EnterInfoBasicCard/>
                </div>
                <ArrowDownwardIcon/>
                <p>싫어하면 밑으로!!</p>
            </div>
        </div>
    );
};

export default EnterInfoGuideThird;