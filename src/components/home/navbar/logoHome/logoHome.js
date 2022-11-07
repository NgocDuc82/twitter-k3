import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import './logoHome.scss'
const logoHome = () => {
    return (
        <div className="logo">
            <div className="Reply">
                <div className="icon">
                    <TwitterIcon/>
                </div>
            </div>
        </div>
    );
}

export default logoHome;
