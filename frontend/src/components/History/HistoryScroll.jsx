import React, { useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';

import {getUserHistory} from 'api/history'
import HistoryCard from "./HistoryCard";
import InfiniteScroll from 'react-infinite-scroller';

export default function HistoryScroll(){
    const [cardList, setCardList] = useState([]);
    const [loadedNum, setLoadedNum] = useState(0)
    const [hasMore, setHasMore] = useState(true);

    const fetchItems = async () => {
        if(hasMore === false){
            return
        } 
        else {
            const data = await getUserHistory()
            setCardList([...cardList, ...data])
            setLoadedNum(loadedNum + data.length)
            setHasMore(!!data)           
        }
    }

    return(
    <div className="history__list">
        <InfiniteScroll
        className="history__list--scroll"
        pageStart={0}
        loadMore={fetchItems}
        hasMore={hasMore}
        loader={<CircularProgress className='history__list--loading'/>}
        useWindow={false}
        >
        <ul>
            {cardList !== [] && cardList?.map((e) => (
                <HistoryCard
                key={e.reviewId}
                data={e}
                />
            ))}
        </ul>
        </InfiniteScroll>
    </div>
    )
}