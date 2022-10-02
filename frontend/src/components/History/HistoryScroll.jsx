import React, { useState, useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import HistoryCard from "./HistoryCard";
import InfiniteScroll from 'react-infinite-scroller';

export default function HistoryScroll({total}){
    const [cardList, setCardList] = useState([]);
    const [loadedNum, setLoadedNum] = useState(0)
    const [hasMore, setHasMore] = useState(true);

    useEffect(()=>{
        async function getTotal(){
            console.log('total은 또 왜', total)
            setCardList([...cardList, ...total.slice(0, loadedNum+5)])
            setLoadedNum(loadedNum+5)
            console.log('아마 여기', total.length, cardList)
            if(total.length - cardList.length <= 0){
                setHasMore(false)
            } else {
                setHasMore(true)
            }
        }
        getTotal()
    },[])

    const fetchItems = () => {
        if(hasMore === false){
            return
        } 
        else {
            setCardList([...cardList, ...total.slice(loadedNum, loadedNum+5)])
            setLoadedNum(loadedNum+5)
            if(total.length - cardList.length <= 0){
                setHasMore(false)
            } else {
                setHasMore(true)
            }
        }
    }

    return(
    <div className="history__list">
        <InfiniteScroll
        className="history__list--scroll"
        loadMore={fetchItems}
        hasMore={hasMore}
        initialLoad={false}
        loader={<CircularProgress className='history__list--loading'/>}
        useWindow={false}
        >
        <ul className="history__list--scroll">
            {cardList?.map((e) => (
                <HistoryCard
                key={e.regDate}
                data={e}
                />
            ))}
        </ul>
        </InfiniteScroll>
    </div>
    )
}