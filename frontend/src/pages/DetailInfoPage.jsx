import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Container from "components/common/Container";
import Grid from "@mui/material/Grid";
import BottomNav from "components/common/BottomNav";
import DetailInfoTitle from "components/DetailInfo/DetailInfoTitle";
import Map from 'components/DetailInfo/Map';

import "styles/DetailInfoPage/DetailInfoPage.scss";

function DetailInfoPage() {
  let { id } = useParams();
  const navigate = useNavigate();
  let isHistory = true
  // 지금은 랜덤으로 받지만, 여기에 axios 요청이 들어갈 것
  if(id === undefined){
    isHistory = false
    id = Math.floor(( Math.random() * ( 5 - 1 )  ) + 1)
    console.log(id)
  }
  useEffect(
    function test(){
      console.log('isHistory',isHistory)
    },[]
  )
  // useEffect(
  //   //axios 함수 통해서 historyId에 해당하는 유저의 일정 뽑아오기가 진행되어야 함
  //   console.log(`useparams id ${id}, ${typeof(id)}`),
  //   []
  // );

  // modal 관련 부분
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const cardList = {
    1: {
      title: "일정 제목1",
      foodTitle: "음식점1",
      activityTitle: "활동1",
      date: "2022.09.14",
    },
    2: {
      title: "일정 제목2",
      foodTitle: "음식점2",
      activityTitle: "활동2",
      date: "2022.09.14",
    },
    3: {
      title: "일정 제목3",
      foodTitle: "음식점3",
      activityTitle: "활동3",
      date: "2022.09.14",
    },
    4: {
      title: "일정 제목4",
      foodTitle: "음식점4",
      activityTitle: "활동4",
      date: "2022.09.14",
    },
  };
  const historyInfo = cardList[id];
  console.log(`historyInfo ${historyInfo}`);
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

      <Container>
        <Map/>
        <div className="detail-info">
          <Grid
            container
            className="detail-info-inner"
            direction="column"
            justifyContent="center"
          >
            <div>{isHistory}</div>
            {isHistory && <DetailInfoTitle historyInfo={historyInfo} handleOpen={handleOpen}/>}
            <div className="detail-info__music">플레이리스트</div>
            <div className="detail-info__food">{historyInfo.foodTitle}</div>
            <div className="detail-info__activity">{historyInfo.activityTitle}</div>
          </Grid>
        </div>
        <BottomNav />
      </Container>
    </>
  );
}

export default DetailInfoPage;
