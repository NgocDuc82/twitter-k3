import React , {useState} from 'react'
import'./Search.scss'
import SearchIcon from '@mui/icons-material/Search';


export default function Search() {
  const [dataSearch, setDataSearch] = useState(" ")
  let searchDes = document.getElementById('search-description')
  let input = document.getElementById('searchInput')
  const handleChangeSearch = (e) =>{
    searchDes.style.backgroundColor='#000';
    input.style.backgroundColor='#000';
    let value = e.target.value;
    setDataSearch(value)
  }
  return (
     <div className="search">
      <div className="search-wrap">
        <div className="search-description" id="search-description">  
          <div className="search-button">
            <SearchIcon id="search-btn" />
          </div>
          <div className="search-input">
            <input 
                type="text" 
                className="search"
                placeholder='Search Twitter' 
                id="searchInput"
                // value ={dataSearch}
                onChange={e => handleChangeSearch(e)}
              />
          </div>
        </div>
      </div>
    </div>
  )
}
