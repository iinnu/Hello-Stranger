import Button from '@mui/material/Button';
import mascot from '../../assets/images/WalkingGirl.gif'

const EnterInfoGuideForth = () => {
    function handleClick(e) {
        window.location.href ="/info"
    }
    return (
        <div>
            <div className='Guide__Forth__Title'>
                <h2>회원님의 취향을 고려해서</h2>
                <h2>새로운 일상을</h2>
                <h2>제공해드릴게요!</h2>
            </div>
            <div className="Guide__Forth__Item">
                <img className="Guide__Forth__Item__Mascot" src={mascot} alt="Mascot" />
                <Button variant="contained" onClick={handleClick}>취향 조사 ㄱㄱ</Button>
            </div>
        </div>
    );
    
};

export default EnterInfoGuideForth;