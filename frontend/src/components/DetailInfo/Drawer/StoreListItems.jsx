import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { getUserActivity, getUserFood } from "api/history";
import StoreContent from './StoreContent';

const ReviewBox = styled('div')`
  padding: 15px 25px;
  border-bottom: 1.5px solid #f6f6f6;
  font-size: 0.9em;
  &:last-child {
    border-bottom: none;
  }
`;

export default function StoreReview({content, type}) {
  const [show, setShow] = useState(false);
  const [detailData, setDetailData] = useState({})
  function showDetail(){
    setShow(!show)
    localStorage.setItem('currentStore', )
  }
  useEffect(()=>{
    async function getData(){
      if(type==='food'){
        console.log('이게 안된다고?', type)
        const data = await getUserFood(content.id)
        setDetailData(data)
      } else {
        console.log('이게 안된다고?', type)
        const data = await getUserActivity(content.id)
        setDetailData(data)
      }
    }
    getData()
  },[]) 
  return (<>
  <ReviewBox onClick={showDetail}>{content.name}</ReviewBox>
  {show && 
    <StoreContent detailData={detailData} type={type}/>
  }
  </>)
}
