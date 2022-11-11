import React from "react"
import TwitterIcon from "@mui/icons-material/Twitter"
import { Link } from "react-router-dom"
import "./logoHome.scss"
const logoHome = () => {
  return (
    <div className="logo">
      <div className="Reply">
        <Link to="/">
          <div className="icon">
            <TwitterIcon />
          </div>
        </Link>
      </div>
    </div>
  )
}

export default logoHome
