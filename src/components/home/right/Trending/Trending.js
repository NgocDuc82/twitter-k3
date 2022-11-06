import './Trending.scss'
import React from 'react'
import { useEffect, useState} from 'react';
import { getDataTrending } from '../../../../service/serviceTrend';

export default function Trending() {
    const [trendData, setTrendData] = useState([]);
        useEffect(() => {
            const getData = async () => {
            const data = await getDataTrending();
            setTrendData(data);
            };

            getData();
        }, []);
        // console.log(trendData);
  return (
    <div className="Trending">
       <div className="Trending-wrapper">
            <div className="Trending-form">
                <h1 className="Trending-header">
                        Trends for you
                </h1>
                
                
                {trendData.map((trend,key) => {
                    return (
                        <div className="Trending-content" key={key}>
                            <div className="Trend">

                                <p className="Trending-address">{trend.trendAdress}</p>
                                <p className="Trending-title">{trend.trendTitle}</p>
                                <p className="Trending-view">{trend.trendView}</p>
                            </div>
                            <div className="seeMore">

                                <p className="btn-seemore">...</p>
                            </div>
                        </div>
                    )
                })}
                <div className="pages">
                    <p>Show More</p>
                </div>
            </div>
       </div>
    </div>
  )
}
