import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { rateRecommendation } from "api/history";

export default function FeedbackModal({open, onClose, submitFunction, modalData}){
  const [like, setLike] = useState(1)
  function submitFunction(){
    const data = {
      ...modalData,
      activityLike: like, 
      foodLike: like, 
      musicLike: like
    }
    console.log('submitFunction?', data)
    rateRecommendation(data)
  }
  function goodFunc(){
    setLike(1)
    console.log('제발',like)
    submitFunction()
    setTimeout(()=>{
      console.log('how')
      onClose()
    }, 500)
  }
  function badFunc(){
    setLike(-1)
    console.log('제발',like)
    submitFunction()
    setTimeout(()=>{
      console.log('how')
      onClose()
    }, 500)
  }

 const style = {
   position: "absolute",
   top: "50%",
   left: "50%",
   transform: "translate(-50%, -50%)",
   width: 200,
   bgcolor: "background.paper",
   border: "none",
   borderRadius: "15px",
   boxShadow: 24,
   p: 4,
 };
 return(
  <Modal
  open={open}
  onClose={onClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
    <Typography id="modal-modal-title" variant="h6" component="h2">
      일정에 대한 피드백을 남겨주세요
    </Typography>
    <Button onClick={goodFunc}>좋았어요</Button>
    <Button onClick={badFunc}>별로였어요</Button>
  </Box>
</Modal>
 )
}