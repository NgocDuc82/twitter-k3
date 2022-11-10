import React, { useState } from "react";
import "./Search.scss";
import { SearchOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { todoRemaningSelector } from "../../../../redux/selector/selector";

export default function Search() {
  const [dataSearch, setdataSearch] = useState();
  const data = useSelector(todoRemaningSelector);

  console.log();
  const handleChangeSearch = (e) => {
    setdataSearch(e.target.value);
  };
  console.log(dataSearch);
  return (
    <div className="search-wrapper">
      <div className="search">
        <div className="search-input">
          <input
            type="text"
            className="inputSearch"
            placeholder="Search Twitter"
            value={dataSearch}
            onChange={handleChangeSearch}
          />
          <div className="search-button">
            <SearchOutlined id="search-btn" />
          </div>
          <div className="search-filter">
            {dataSearch ? (
              data
                .filter((item) => item.authorName?.includes(dataSearch))
                .map((data, index) => {
                  return (
                    <ul className="list-search-filter">
                      <li className="item-search-filter">
                        <div className="avatar-search-filter">
                          <img src={data.authorAvatar} alt="" />
                        </div>
                        <div className="info">
                          <strong className="authorName">
                            {data.authorName}
                          </strong>
                          <p className="authorID">{data.authorId}</p>
                          {/* <p className="authorDecription"></p> */}
                        </div>
                      </li>
                    </ul>
                  );
                })
            ) : (
              <> </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
