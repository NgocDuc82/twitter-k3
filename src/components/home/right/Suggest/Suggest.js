import React from 'react'
import { useEffect, useState} from 'react';
import './Suggest.scss'
import {getDataSuggest} from '../../../../service/serviceSug'
import Modal from '@mui/material/Modal';

import {CheckOutlined } from '@ant-design/icons'
import Button from '@mui/material/Button';


export default function Suggest() {
   const [sugData, setSugData] = useState([]);
   const [checkButton,setCheckButton] = useState(true);
        useEffect(() => {
            const getData = async () => {
            const data = await getDataSuggest();
            setSugData(data);
            };

            getData();
        }, []);
    
        const  handleButtonFollow = () => {
            setCheckButton(false);
        }
        const handleButtonFollowing = () => {

        }


    
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
                                    {checkButton?
                                        (
                                            <div className="follow">
                                                <Button size="medium" className="btn-follow" onClick = {e=>handleButtonFollow(key)}>follow</Button>
                                               
                                            </div>
                                        )
                                        :(
                                            <div className="follow ">
                                                <Button size="medium" className="btn-following" onClick = {e=>handleButtonFollowing(key)}>following</Button>
                                                
                                            </div>
                                        )
                                    }
                                    
                                    
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
