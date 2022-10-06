import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { Button } from '@mui/material';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import React, { useState } from 'react';

export default function RecipeReviewCard({ id, title, image, Disable }) {
  const [isDisable1, setDisable1] = useState(false);
  const [isDisable2, setDisable2] = useState(false);
  function activityDataInputGood() {
    if (!localStorage.activityDataInput) {
      const activityDataInput = [
        {
          category: title,
          likeYN: 1,
        },
      ];
      localStorage.setItem(
        'activityDataInput',
        JSON.stringify(activityDataInput)
      );
    } else if (localStorage.activityDataInput) {
      const localActivityData = JSON.parse(
        localStorage.getItem('activityDataInput')
      );
      for (var i = 0; i < localActivityData.length; i++) {
        if (localActivityData[i].category === title) {
          localActivityData.splice(i, 1);
          i--;
        }
      }
      localStorage.setItem(
        'activityDataInput',
        JSON.stringify(localActivityData)
      );
      const existData = JSON.parse(localStorage.getItem('activityDataInput'));
      const activityDataInput = {
        category: title,
        likeYN: 1,
      };
      existData.push(activityDataInput);
      localStorage.setItem('activityDataInput', JSON.stringify(existData));
    }

    Disable(false);
    setDisable1(true);
    setDisable2(false);
  }

  function activityDataInputBad() {
    if (!localStorage.activityDataInput) {
      const activityDataInput = [
        {
          category: title,
          likeYN: -1,
        },
      ];
      localStorage.setItem(
        'activityDataInput',
        JSON.stringify(activityDataInput)
      );
    } else if (localStorage.activityDataInput) {
      const localActivityData = JSON.parse(
        localStorage.getItem('activityDataInput')
      );
      for (var i = 0; i < localActivityData.length; i++) {
        if (localActivityData[i].category === title) {
          localActivityData.splice(i, 1);
          i--;
        }
      }
      localStorage.setItem(
        'activityDataInput',
        JSON.stringify(localActivityData)
      );
      const existData = JSON.parse(localStorage.getItem('activityDataInput'));
      const activityDataInput = {
        category: title,
        likeYN: -1,
      };
      existData.push(activityDataInput);
      localStorage.setItem('activityDataInput', JSON.stringify(existData));
    }

    Disable(false);
    setDisable1(false);
    setDisable2(true);
  }

  return (
    <Card className="UserInput__Activity__Item__Area__Card">
      <CardHeader title={title} />
      <CardMedia component="img" height="194" image={image} />
      <div
        className="Guide__Third__Item__Card__Bottom"
        style={{ margin: '10px 0' }}
      >
        <div>
          {isDisable1 ? (
            <Button
              onClick={activityDataInputGood}
              color="primary"
              variant="contained"
            >
              <ThumbUpOffAltIcon />
            </Button>
          ) : (
            <Button onClick={activityDataInputGood} color="primary">
              <ThumbUpOffAltIcon />
            </Button>
          )}
          {isDisable2 ? (
            <Button
              onClick={activityDataInputBad}
              color="primary"
              variant="contained"
            >
              <ThumbDownOffAltIcon />
            </Button>
          ) : (
            <Button onClick={activityDataInputBad} color="primary">
              <ThumbDownOffAltIcon />
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
}
