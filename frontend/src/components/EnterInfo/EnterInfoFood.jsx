import EnterInfoFoodCard from './EnterInfoFoodCard.jsx'
import mascot from '../../assets/images/WalkingGirl.gif'

const EnterInfo = () => {
    return (
        <div>
            <div className='UserInput__Food__Title'>
                <h2>어떤 음식을</h2>
                <h2>자주 드시나요?</h2>
            </div>
            <div>
                <div className='UserInput__Food__Item'>
                    {/* <EnterInfoFoodCard/> */}
                    <img className="UserInput__Food__Item__Mascot" src={mascot} alt="Mascot" />
                </div>
            </div>
        </div>
    );
};

export default EnterInfo;