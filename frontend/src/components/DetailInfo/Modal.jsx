import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

export default function FeedbackModal({open, onClose}){
 const style = {
   position: "absolute",
   top: "50%",
   left: "50%",
   transform: "translate(-50%, -50%)",
   width: 200,
   bgcolor: "background.paper",
   border: "2px solid #000",
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
    <Button>좋았어요</Button>
    <Button>별로였어요</Button>
  </Box>
</Modal>
 )
}