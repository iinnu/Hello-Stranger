import mascot from '../../assets/images/WalkingGirl.gif'

const EnterInfoGuideSecond = () => {
    return (
        <div>
            <div className='Guide__Second__Title'>
                <h2>세가지 카테고리에 대한</h2>
                <h2>선택지를 드릴게요</h2>
            </div>
            <div className="Guide__Second__Item">
                <img className="Guide__Second__Item__Mascot" src={mascot} alt="Mascot" />
            </div>
        </div>
        
    );
};

export default EnterInfoGuideSecond;