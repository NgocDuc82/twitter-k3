import React from 'react'
import { useEffect, useState} from 'react';
import './Suggest.scss'
import {getDataSuggest} from '../../../../service/serviceSug'
import sl1 from '../../../../assets/image/sl-1.png'
import Check from '../../../../assets/image/check.jpg'

import {CheckOutlined } from '@ant-design/icons'



export default function Suggest() {
   const [sugData, setSugData] = useState([]);
        useEffect(() => {
            const getData = async () => {
            const data = await getDataSuggest();
            setSugData(data);
            };

            getData();
        }, []);
        
  return (
     <div className="Suggest">
       <div className="Suggest-wrapper">
            <div className="Suggest-form">
                <h1 className="Suggest-header">
                        Who to follow
                </h1>
                {sugData.map((sug,key) => {
                    return (
                         <div className="Suggest-content" key={key} >
                            <div className="Suggest">
                                    <div className="Suggest-img">
                                        <img src={sug.sugImg} alt="Suggest-img" className="img-1" />
                                    </div>
                                    <div className="Suggest-text">
                                        <div className="Suggest-des">
                                            <p className="Suggest-name">{sug.sugName}</p>
                                            <div className="Suggest-img">
                                                <img src={sug.sugIcon} className = "img-check" />
                                            </div>
                                        </div>
                                        <p className="Suggest-tagname">{sug.sugTagName}</p>
                                    </div>
                                    <div className="follow">

                                        <btn className="btn-follow">Follow</btn>
                                    </div>
                                    
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
