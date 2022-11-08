import React from 'react'
import { useEffect, useState,useRef} from 'react';
import './Suggest.scss'
import {getDataSuggest} from '../../../../service/serviceSug'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import {CheckOutlined } from '@ant-design/icons'
import Button from '@mui/material/Button';

const style = {

  position: 'absolute' ,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: 'none',
  borderRadius: '10px',
  boxShadow: 24,
//   pt: 2,
  px: 4,
  pb: 3,

};
const ButtonStyleUnfollow = {
    backgroundColor:'#000',
    color: '#fff',
    "&:hover": {
        backgroundColor:'#ccc',
        color: '#000',
    }
};

const btnStyleCancel = {
    marginLeft: '10px',
    color: '#000',
    width: '100px',
    "&:hover": {
        backgroundColor:'#ccc',
        color: '#000',
        fontWeight: 'bold',
    }
}
    


export default function Suggest() {
   const [sugData, setSugData] = useState([]);
//    const [open,setOpen] = useState(false);
   const [show,setShow] = useState(false);
   const [data,setData] = useState({})



        useEffect(() => {
            const getData = async () => {
            const data = await getDataSuggest();
            setSugData(data);
            };
            getData();
        }, []);
    
        const  handleButtonFollow = (index) => {
            sugData[index].sugBoolean = !sugData[index].sugBoolean
            setSugData([...sugData]);
        }
        const handleButtonFollowing = (index,sug) => {
            setData(sug)
            setShow(true);  
        }
        const handleButtonUnfollow = (index) => {          
            sugData[index].sugBoolean=false;
            setSugData([...sugData]);
            setShow(false);
        }

    
    
  return (
     <div className="Suggest">
       <div className="Suggest-wrapper">
            <div className="Suggest-form">
                <h1 className="Suggest-header">
                        Who to follow
                </h1>
                {sugData.map((sug,index) => {
                    return (
                         <div className="Suggest-content" key={sug.id} >
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
                                                <Button size="medium" className="btn-follow" onClick = {e=>handleButtonFollow(index,sug)}>follow</Button>
                                               
                                            </div>
                                        )
                                        :(
                                            <div className="follow ">
                                                <Button size="medium" className="btn-following" onClick = {e=>handleButtonFollowing(index,sug)}>following</Button>
                                                
                                                 {               
                                                (
                                                    <Modal
                                                        open={show}
                                                    >
                                                                    <Box sx={{ ...style, width: 280 ,height:240,}}>
                                                                    
                                                                        <h1 className= "unfollow-title">Unfollow {data.sugTagName}</h1>
                                                                        <h2 className= "unfollow-tagName"> </h2>
                                                                        <p className= "unfollow-text">Their Tweets will no longer show up in your home timeline. You can still view their profile, unless their Tweets are protected.  </p>
                                                                        <div  className= "btn-modal">
                                                                            <Button sx = {ButtonStyleUnfollow} className= "btn-unfnollow" onClick={e => handleButtonUnfollow(index)}>Unfollow</Button>
                                                                            <Button sx ={btnStyleCancel} className= "btn-cancel " onClick={() =>setShow(false)}>Cancel</Button>
                                                                        </div>
                                                                        
                                                                    </Box>
                                                        </Modal>  
                                                )                   
                                                }
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
