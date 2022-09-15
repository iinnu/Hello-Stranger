import React, {useState} from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const History = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    return (
        <>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
            일정에 대한 피드백을 남겨주세요
            </Typography>
            <Button>좋았어요</Button>
            <Button>별로였어요</Button>
        </Box>
        </Modal>

        <h1>나의 일정</h1>
        <h1>2022.09.14</h1>
        <Button onClick={handleOpen}>일정 평가</Button>
        <div className="historyMap">지도</div>
        <div className="historyPlaylist">플레이리스트</div>
        <div className="historyFood">음식점</div>
        <div className="historyExperience">활동</div>
        
        </>
    );
};

export default History;