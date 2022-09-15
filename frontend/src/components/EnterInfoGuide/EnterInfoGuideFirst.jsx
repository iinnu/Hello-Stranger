import mascot from '../../assets/images/WalkingGirl.gif'

const EnterInfoGuideFirst = () => {
    return (
        <div>
            <div>
                <div>
                    <h1>시작하기전에,</h1>
                    <h1>회원님에 대해</h1>
                    <h1>조금더 알고 싶어요!</h1>
                </div>
                <img className="Guide__Mascot" src={mascot} alt="Mascot" />
            </div>
        </div>
    );
};

export default EnterInfoGuideFirst;