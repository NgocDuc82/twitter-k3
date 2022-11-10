import React from 'react';
import './content.scss'
const Content = ({data}) => {
    return (
        <div>
            <div className="content-text" >
                <p>{data.content}</p>
            </div>
            <div className="img">
                <img  src={data.photo} alt="" />
            </div>
        </div>
    );
}

export default Content;
