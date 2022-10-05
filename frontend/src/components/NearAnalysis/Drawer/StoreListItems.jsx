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

export default function StoreListItems({content, type, getCurrentStore}) {
  const [show, setShow] = useState(false);
  const [detailData, setDetailData] = useState({})
  console.log('StoreListItems, getCurrentStore',getCurrentStore)
  function showDetail(){
    setShow(!show)
    console.log('showDetail', content)
    getCurrentStore({lat:content.latitude,lng:content.longitude})
  }
  useEffect(()=>{
    console.log('이게 안넘어오는듯', content)
    async function getData(){
      if(type==='food'){
        const data = await getUserFood(content.id)
        setDetailData(data)
      } else {
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
