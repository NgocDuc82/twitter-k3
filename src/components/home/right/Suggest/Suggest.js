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
   const [open,setOpen] = useState(false);
//    const [follow,setFollow] = useState('follow')

        useEffect(() => {
            const getData = async () => {
            const data = await getDataSuggest();
            setSugData(data);
            };

            getData();
        }, []);
    
        const  handleButtonFollow = (key) => {
            
            sugData[key].sugBoolean = true
           
            setSugData([...sugData]);
        }
        const handleButtonFollowing = (key) => {
            console.log(sugData[key]);
            // if(sugData[key].sugBoolean==true){
            //     setOpen(true);
            // }
            
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
                                    {sug.sugBoolean ===false ?
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
                                    <div className={open?"modal-unfollow":"modal-unfollow-close"}>
                                        
                                        
                                        
                                            <p className= "unfollow-title">Unfollow </p>
                                            <p className= "unfollow-tagName">{sug.sugTagName} </p>
                                            <p className= "unfollow-text">Their Tweets will no longer show up in your home timeline. You can still view their profile, unless their Tweets are protected.  </p>
                                            <Button className= "btn-Ùnollow ">Unfollow</Button>
                                            <Button className= "btn-cancel ">Cancel</Button>


                                       
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
