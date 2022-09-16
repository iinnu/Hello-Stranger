import mascot from '../../assets/images/WalkingGirl.gif'

const EnterInfoGuideFirst = () => {
    return (
        <div>
            <div className='Guide__Title'>
                <h2>시작하기전에,</h2>
                <h2>회원님에 대해</h2>
                <h2>조금더 알고 싶어요!</h2>
            </div>
            <div className='Guide__First__Item'>
                <img className="Guide__First__Item__Mascot" src={mascot} alt="Mascot" />
            </div>
        </div>
    );
};

export default EnterInfoGuideFirst;