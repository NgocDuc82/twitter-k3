import React from "react"
import { useEffect, useState, useRef } from "react"
import "./Suggest.scss"
import { getDataSuggest } from "../../../../service/serviceSug"
import Modal from "@mui/material/Modal"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "none",
  borderRadius: "10px",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3
}
const ButtonStyleUnfollow = {
  marginLeft: "auto",
  marginRight: "auto",
  backgroundColor: "#000",
  color: "#fff",
  width: "230px",
  border: "1px solid #000",
  height: "40px",
  borderRadius: "25px",
  marginBottom: "10px",
  fontWeight: "600",
  textTransform: "capitalize",
  "&:hover": {
    backgroundColor: "rgb(61, 59, 59)",
    color: "#fff"
  }
}

const btnStyleCancel = {
  marginLeft: "auto",
  marginRight: "auto",
  fontWeight: "600",
  textTransform: "capitalize",
  color: "#000",
  width: "230px",
  height: "40px",
  borderRadius: "25px",
  marginBottom: "10px",
  border: "1px solid #ccc",
  "&:hover": {
    backgroundColor: "#ccc",
    color: "#000",
    fontWeight: "bold"
  }
}

export default function Suggest() {
  const [sugData, setSugData] = useState([])

  const [show, setShow] = useState(false)
  const [data, setData] = useState({})

  useEffect(() => {
    const getData = async () => {
      const data = await getDataSuggest()
      setSugData(data)
    }
    getData()
  }, [])

  const handleButtonFollow = index => {
    sugData[index].sugBoolean = !sugData[index].sugBoolean
    setSugData([...sugData])
  }
  const handleButtonFollowing = (index, sug) => {
    setData(sug)
    setShow(true)
  }
  const handleButtonUnfollow = (tagName, index) => {
    sugData.forEach(item => {
      if (item.sugTagName === tagName) {
        item.sugBoolean = false
        setSugData([...sugData])
      }
    })
    setShow(false)
  }
  const handleMouseIn = (tagName, e) => {
    sugData.forEach(item => {
      if (item.sugTagName === tagName) {
        item.checkHover = true
        setSugData([...sugData])
      }
    })
  }

  const handleMouseOut = (tagName, e) => {
    sugData.forEach(item => {
      if (item.sugTagName === tagName) {
        // e.target.style.background = '#000';
        item.checkHover = false
        setSugData([...sugData])
      }
    })
  }

  return (
    <div className="Suggest">
      <div className="Suggest-wrapper">
        <div className="Suggest-form">
          <h1 className="Suggest-header">Who to follow</h1>
          {sugData.map((sug, index) => {
            return (
              <div className="Suggest-content" key={sug.id}>
                <div className="Suggest">
                  <div className="Suggest-img">
                    <img src={sug.sugImg} alt="Suggest-img" className="img-1" />
                  </div>
                  <div className="Suggest-text">
                    <div className="Suggest-des">
                      <p className="Suggest-name">{sug.sugName}</p>
                      <div className="Suggest-img">
                        <img src={sug.sugIcon} className="img-check" />
                      </div>
                    </div>
                    <p className="Suggest-tagname">{sug.sugTagName}</p>
                  </div>
                  {sug.sugBoolean === false ? (
                    <div className={sug.checkHover ? "follow" : "follow1"}>
                      <Button size="medium" className="btn-follow" onClick={e => handleButtonFollow(index, sug)}>
                        follow
                      </Button>
                    </div>
                  ) : (
                    <div
                      className={sug.checkHover ? "follow-hover" : "follow "}
                      onMouseOver={e => handleMouseIn(sug.sugTagName)}
                      onMouseOut={e => handleMouseOut(sug.sugTagName)}
                    >
                      <Button size="medium" className="btn-following" onClick={e => handleButtonFollowing(index, sug)}>
                        {sug.checkHover ? "Unfollow" : "Following"}
                      </Button>
                    </div>
                  )}
                  {
                    <Modal open={show}>
                      <Box sx={{ ...style, width: 320, height: 300 }}>
                        <h1
                          className="unfollow-title"
                          style={{ fontWeight: "600", fontSize: "25px", marginBottom: "10px", marginTop: "20px" }}
                        >
                          Unfollow {data.sugTagName}
                        </h1>

                        <p style={{ marginBottom: "40px" }} className="unfollow-text">
                          Their Tweets will no longer show up in your home timeline. You can still view their profile,
                          unless their Tweets are protected.{" "}
                        </p>
                        <div style={{ display: "flex", flexDirection: "column" }} className="btn-modal">
                          <Button
                            sx={ButtonStyleUnfollow}
                            className="btn-unfnollow"
                            onClick={e => handleButtonUnfollow(data.sugTagName, index)}
                          >
                            Unfollow
                          </Button>
                          <Button sx={btnStyleCancel} className="btn-cancel " onClick={() => setShow(false)}>
                            Cancel
                          </Button>
                        </div>
                      </Box>
                    </Modal>
                  }
                </div>
              </div>

              // </Modal>
              //       }
              //     </div>
              //   </div>
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
