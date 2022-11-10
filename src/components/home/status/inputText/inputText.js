// import React from 'react'
import "./inputText.scss"
import React from "react"

export default function InputText(props) {
  const { handleClinkInput, changeInputStatus, infoStatus } = props
  return (
    <div className="inputText" onClick={handleClinkInput}>
      <input type="text" value={infoStatus.content} onChange={changeInputStatus} placeholder="What's happening?" />
    </div>
  )
}
