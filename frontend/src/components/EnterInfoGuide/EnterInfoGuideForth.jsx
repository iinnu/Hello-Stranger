import Button from '@mui/material/Button';


const EnterInfoGuideForth = () => {
    function handleClick(e) {
        window.location.href ="/info"
    }
    return (
        <div>
            <div>
                <h1>회원님의 취향을 고려해서</h1>
                <h1>새로운 일상을</h1>
                <h1>제공해드릴게요!</h1>
            </div>
            <Button variant="contained" onClick={handleClick}>취향 조사 ㄱㄱ</Button>

        </div>
    );
    
};

export default EnterInfoGuideForth;