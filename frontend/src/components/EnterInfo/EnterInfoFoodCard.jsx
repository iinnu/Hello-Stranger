import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import React, { useState } from 'react';

export default function RecipeReviewCard({ id, title, image, Disable, Count }) {
  const [isDisable1, setDisable1] = useState(false);
  const [isDisable2, setDisable2] = useState(false);
  function foodDataInputGood() {
    if (!localStorage.foodDataInput) {
      const foodDataInput = [
        {
          category: title,
          likeYN: 1,
        },
      ];
      localStorage.setItem('foodDataInput', JSON.stringify(foodDataInput));
    } else if (localStorage.foodDataInput) {
      const localFoodData = JSON.parse(localStorage.getItem('foodDataInput'));
      for (var i = 0; i < localFoodData.length; i++) {
        if (localFoodData[i].category === title) {
          localFoodData.splice(i, 1);
          i--;
        }
      }
      localStorage.setItem('foodDataInput', JSON.stringify(localFoodData));
      const existData = JSON.parse(localStorage.getItem('foodDataInput'));
      const foodDataInput = {
        category: title,
        likeYN: 1,
      };
      existData.push(foodDataInput);
      localStorage.setItem('foodDataInput', JSON.stringify(existData));
    }
    Disable(false);
    setDisable1(true);
    setDisable2(false);
  }

  function foodDataInputBad() {
    if (!localStorage.foodDataInput) {
      const foodDataInput = [
        {
          category: title,
          likeYN: -1,
        },
      ];
      localStorage.setItem('foodDataInput', JSON.stringify(foodDataInput));
    } else if (localStorage.foodDataInput) {
      const localFoodData = JSON.parse(localStorage.getItem('foodDataInput'));
      for (var i = 0; i < localFoodData.length; i++) {
        if (localFoodData[i].category === title) {
          localFoodData.splice(i, 1);
          i--;
        }
      }
      localStorage.setItem('foodDataInput', JSON.stringify(localFoodData));
      const existData = JSON.parse(localStorage.getItem('foodDataInput'));
      const foodDataInput = {
        category: title,
        likeYN: -1,
      };
      existData.push(foodDataInput);
      localStorage.setItem('foodDataInput', JSON.stringify(existData));
    }
    //  localStorage.setItem("foodDataInput", [])
    Disable(false);
    setDisable1(false);
    setDisable2(true);
  }

  return (
    <Card className="UserInput__Food__Item__Area__Card">
      <CardHeader title={title} />
      <CardMedia component="img" height="194" image={image} alt="Paella dish" />
      <div
        className="Guide__Third__Item__Card__Bottom"
        style={{ margin: '10px 0' }}
      >
        <div>
          {isDisable1 ? (
            <Button
              onClick={foodDataInputGood}
              color="primary"
              variant="contained"
            >
              <ThumbUpOffAltIcon />
            </Button>
          ) : (
            <Button onClick={foodDataInputGood} color="primary">
              <ThumbUpOffAltIcon />
            </Button>
          )}
          {isDisable2 ? (
            <Button
              onClick={foodDataInputBad}
              color="primary"
              variant="contained"
            >
              <ThumbDownOffAltIcon />
            </Button>
          ) : (
            <Button onClick={foodDataInputBad} color="primary">
              <ThumbDownOffAltIcon />
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
}
