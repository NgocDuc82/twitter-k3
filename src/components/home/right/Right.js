import React from 'react'
import Search from './search/Search'
import Trending from './Trending/Trending'
import Suggest from './Suggest/Suggest'


export default function Right() {
  return (
    <div className="Right">
         
            <Search />
        
        
            <Trending/>
        
        
            <Suggest/>
        
      
    </div>
  )
}
