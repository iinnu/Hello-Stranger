import mascot from '../../assets/images/WalkingGirl.gif'
import Button from '@mui/material/Button';

const StartApp = () => {
    function handleClick(e) {
        window.location.href ="/main"
    }
    return (
        <div>
            <div className='UserInput__Start__Title'>
                <h2>이제 새로운 하루를</h2>
                <h2>보내러 가볼까요?</h2>
            </div>
            <div className='UserInput__Start__Item'>
                <img className="UserInput__Start__Item__Mascot" src={mascot} alt="Mascot" />
                <Button variant="contained" onClick={handleClick}>메인페이지 ㄱㄱ</Button>
            </div>
        </div>
    );
};

export default StartApp;