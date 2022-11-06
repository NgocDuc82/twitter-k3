import React from 'react'
import'./Search.scss'
import {SearchOutlined } from '@ant-design/icons'

export default function Search() {
  return (
     <div className="search">
            <div className="search-wrap">
                  <div className="search-description">

                    <div className="search-button">
                        <SearchOutlined id="search-btn" />

                    </div>
                    
                    <div className="search-input">

                        <input 
                            type="text" 
                            className="search" 
                            placeholder='Search Twitter' 
                            id="searchInput"
                          />
                    </div>
                       
                  </div>
                    
                                
                   
            </div>
    </div>
  )
}
