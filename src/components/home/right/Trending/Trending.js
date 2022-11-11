import "./Trending.scss"
import React from "react"
import { useEffect, useState } from "react"
import { getDataTrending } from "../../../../service/serviceTrend"
import { FrownOutlined } from "@ant-design/icons"
import MoreHorizIcon from "@mui/icons-material/MoreHoriz"

export default function Trending() {
  const [trendData, setTrendData] = useState([])

  useEffect(() => {
    const getData = async () => {
      const data = await getDataTrending()
      setTrendData(data)
    }

    getData()
  }, [])

  const handleSeeMore = key => {
    trendData[key].Toggle = !trendData[key].Toggle
    setTrendData([...trendData])
  }

  return (
    <div className="Trending">
      <div className="Trending-wrapper">
        <div className="Trending-form">
          <h1 className="Trending-header">Trends for you</h1>

          {trendData.map((trend, key) => {
            return (
              <div className="Trending-content" key={key}>
                <div className="Trend">
                  <p className="Trending-address">{trend.trendAdress}</p>
                  <p className="Trending-title">{trend.trendTitle}</p>
                  <p className="Trending-view">{trend.trendView}</p>
                </div>
                <div className="seeMore">
                  <MoreHorizIcon onClick={e => handleSeeMore(key)} className="btn-seemore" />
                </div>
                <div id="myModal" className={trend.Toggle ? "modal-seemore-open" : "modal-seemore-close"}>
                  <div className="modal-no">
                    <FrownOutlined className="modal-icon" />
                    <p>Not interested in this</p>
                  </div>
                  <div className="modal-yes">
                    <FrownOutlined className="modal-icon" />
                    <p>This trend is harmful or spammy</p>
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
