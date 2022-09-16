import EnterInfoActivityCard from './EnterInfoActivityCard.jsx'
import mascot from '../../assets/images/WalkingGirl.gif'

const EnterInfo = () => {
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
        </div>
    );
};

export default EnterInfo;