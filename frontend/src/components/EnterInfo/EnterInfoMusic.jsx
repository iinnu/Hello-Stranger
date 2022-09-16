import EnterInfoMusicCard from './EnterInfoMusicCard.jsx'
import mascot from '../../assets/images/WalkingGirl.gif'

const EnterInfo = () => {
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
        </div>
    );
};

export default EnterInfo;