import React, { useState, useEffect } from "react"
// import {useState} from 'react';
import Avatar from "../../common/avatar/avatar"
import InputText from "./inputText/inputText"
import SelectOption from "./selectOption/selectOption"
import BtnTweet from "../../common/button/tweet/btnTweet"
import SelectViewMode from "./viewMode/selectViewMode/selectViewMode"
import DisplayViewMode from "./viewMode/displayViewMode/displayViewMode"

import { useDispatch } from "react-redux"
import moment from "moment"

import { addNewStatus } from "../tweets/tweetsSlice"
import "./status.scss"

import Grid from "@mui/material/Grid"

export default function Status() {
  const dispatch = useDispatch()
  const createAt = moment().toDate()
  const [isMode, setIsMode] = useState(false)
  const [infoStatus, setinfoStatus] = useState({
    authorAvatar:
      "https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-1/290871619_3366032726974521_1476253907354503719_n.jpg?stp=dst-jpg_p320x320&_nc_cat=107&ccb=1-7&_nc_sid=7206a8&_nc_ohc=os2PEUKt7_EAX--gmp6&_nc_ht=scontent.fhan2-5.fna&oh=00_AfCSWoaQ2fbqch3AHFSe2nY-jVaDAVro5E20Z1FKcUbI4Q&oe=636A4312",
    authorId: "@ngocduc82",
    authorName: "Nguyen Ngoc Duc",
    content: "",
    crateAt: createAt,
    photo:
      "https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-1/290871619_3366032726974521_1476253907354503719_n.jpg?stp=dst-jpg_p320x320&_nc_cat=107&ccb=1-7&_nc_sid=7206a8&_nc_ohc=os2PEUKt7_EAX--gmp6&_nc_ht=scontent.fhan2-5.fna&oh=00_AfCSWoaQ2fbqch3AHFSe2nY-jVaDAVro5E20Z1FKcUbI4Q&oe=636A4312"
  })
  const changeInputStatus = e => {
    const { content, ...press } = infoStatus
    setinfoStatus({ content: e.target.value, ...press })
  }

  const handleClinkInput = () => {
    setIsMode(true)
  }
  const handleBtnTweet = () => {
    // dispatch 1 thuk-action
    dispatch(addNewStatus(infoStatus))
    setIsMode(false)
    setinfoStatus({ content: "" })
  }
  return (
    <div className="status">
      <Grid container spacing={2} className="status-wrap">
        <Grid item xs={2} className="status-left">
          <Avatar />
        </Grid>
        <Grid item xs={10} className="status-right">
          {isMode ? <SelectViewMode /> : <> </>}
          <InputText
            infoStatus={infoStatus}
            changeInputStatus={changeInputStatus}
            handleClinkInput={handleClinkInput}
          />
          {isMode ? <DisplayViewMode /> : <> </>}

          <div className="bottom">
            <SelectOption />
            <BtnTweet handleBtnTweet={handleBtnTweet} />
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

// export default status ;

// import React, { useState } from "react"

// import Avatar from "../../common/avatar/avatar"
// import InputText from "./inputText/inputText"
// import BtnTweet from "../../common/button/tweet/btnTweet"
// import SelectViewMode from "./viewMode/selectViewMode/selectViewMode"
// import DisplayViewMode from "./viewMode/displayViewMode/displayViewMode"

// import { useDispatch } from "react-redux"
// import moment from "moment"

// import { addNewStatus } from "../tweets/tweetsSlice"
// import "./status.scss"

// import Grid from "@mui/material/Grid"

// /*import selectoption */
// import Camera from "../../common/icon/camera/camera"
// import DateTime from "../../common/icon/dateTime/dateTime"
// import Emoji from "../../common/icon/emoji/emoji"
// import Locate from "../../common/icon/locate/locate"
// import Gif from "../../common/icon/gif/gif"
// import Poll from "../../common/icon/poll/poll"

// export default function Status() {
//   const dispatch = useDispatch()
//   const createAt = moment().toDate()
//   const [isMode, setIsMode] = useState(false)
//   const [infoStatus, setinfoStatus] = useState({
//     authorAvatar:
//       "https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-1/290871619_3366032726974521_1476253907354503719_n.jpg?stp=dst-jpg_p320x320&_nc_cat=107&ccb=1-7&_nc_sid=7206a8&_nc_ohc=os2PEUKt7_EAX--gmp6&_nc_ht=scontent.fhan2-5.fna&oh=00_AfCSWoaQ2fbqch3AHFSe2nY-jVaDAVro5E20Z1FKcUbI4Q&oe=636A4312",
//     authorId: "@ngocduc82",
//     authorName: "Nguyen Ngoc Duc",
//     content: "",
//     crateAt: createAt,
//     photoUrls: []
//   })
//   const [dataUploadImg, setDataUploadImg] = useState([])
//   const [url, setUrl] = useState([])
//   const changeInputStatus = e => {
//     const { content, ...press } = infoStatus
//     setinfoStatus({ content: e.target.value, ...press })
//   }

//   const handleClinkInput = () => {
//     setIsMode(true)
//   }
//   const handleBtnTweet = async () => {
//     dispatch(addNewStatus(infoStatus))
//   }
//   const handleImageChange = e => {
//     if (e.target.files[0]) {
//       setDataUploadImg([e.target.files[0], ...dataUploadImg])
//     }
//     const fileReader = new FileReader()
//     fileReader.onload = loaderEvent => {
//       const listUrl = [...url]
//       const srcData = loaderEvent.target.result
//       listUrl.push(srcData)
//       setUrl(listUrl)
//     }
//     fileReader.readAsDataURL(e.target.files[0])
//   }

//   return (
//     <div className="status">
//       <Grid container spacing={2} className="status-wrap">
//         <Grid item xs={2} className="status-left">
//           <Avatar />
//         </Grid>
//         <Grid item xs={10} className="status-right">
//           {isMode ? <SelectViewMode /> : <> </>}
//           <InputText
//             //  onChange={handleFocusInput}
//             infoStatus={infoStatus}
//             changeInputStatus={changeInputStatus}
//             handleClinkInput={handleClinkInput}
//           />
//           <div className="list-url">
//             {url.map((img, i) => {
//               return (
//                 <div className="status-img">
//                   <img src={img} className="img-a" alt="" key={i}></img>
//                 </div>
//               )
//             })}
//           </div>

//           <input type="file" onChange={handleImageChange} id="img" style={{ display: "none" }} />

//           {isMode ? <DisplayViewMode /> : <> </>}

//           <div className="bottom">
//             {/* <SelectOption /> */}
//             <div className="selectOption">
//               <div className="left">
//                 <ul className="">
//                   <li className="">
//                     <label htmlFor="img">
//                       <Camera />
//                     </label>
//                   </li>
//                   <li className="">
//                     <Gif />
//                   </li>
//                   <li className="">
//                     <Poll />
//                   </li>
//                   <li className="">
//                     <Emoji />
//                   </li>
//                   <li className="">
//                     <DateTime />
//                   </li>
//                   <li className="">
//                     <Locate />
//                   </li>
//                 </ul>
//               </div>
//               <div className="right"></div>
//             </div>
//             <BtnTweet handleBtnTweet={handleBtnTweet} />
//           </div>
//         </Grid>
//       </Grid>
//     </div>
//   )
// }
