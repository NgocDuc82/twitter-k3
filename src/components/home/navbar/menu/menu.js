import React from 'react'
import './menu.scss'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Link } from "react-router-dom";

export default function menu() {
    const navLinkStyle = {color: 'black'}
  return (
    <div>
        <ul className='cham'>
            <li className="hv">
                <a className='home'>
                    <div className="div_icon">
                        <svg viewBox="0 0 24 24" aria-hidden="true" class="icon r-18jsvk2 r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-cnnz9e"><g><path d="M12 9c-2.209 0-4 1.791-4 4s1.791 4 4 4 4-1.791 4-4-1.791-4-4-4zm0 6c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2zm0-13.304L.622 8.807l1.06 1.696L3 9.679V19.5C3 20.881 4.119 22 5.5 22h13c1.381 0 2.5-1.119 2.5-2.5V9.679l1.318.824 1.06-1.696L12 1.696zM19 19.5c0 .276-.224.5-.5.5h-13c-.276 0-.5-.224-.5-.5V8.429l7-4.375 7 4.375V19.5z"></path></g></svg>
                        <Link to='/' style={navLinkStyle} className="text1">Home</Link>
                    </div>
                </a>
            </li>
            <li className="hv">
                <a className='explore'>
                    <div className="div_icon">
                        <svg viewBox="0 0 24 24" aria-hidden="true" class="icon"><g><path d="M10.09 3.098L9.72 7h5.99l.39-4.089 1.99.187L17.72 7h3.78v2h-3.97l-.56 6h3.53v2h-3.72l-.38 4.089-1.99-.187.36-3.902H8.78l-.38 4.089-1.99-.187L6.77 17H2.5v-2h4.46l.56-6H3.5V7h4.21l.39-4.089 1.99.187zM14.96 15l.56-6H9.53l-.56 6h5.99z"></path></g></svg>
                        <Link to='/explore' style={navLinkStyle} className="text1">Explore</Link>
                    </div>
                </a>
            </li>
            <li className="hv">
                <a className='notifications'>
                    <div className="div_icon">
                        <NotificationsNoneIcon/>
                        <p className="text1">Notifications</p>
                    </div>
                </a>
            </li>
            <li className="hv">
                <a className='messages'>
                    <div className="div_icon">
                        <MailOutlineIcon/>
                        <p className="text1">Messages</p>
                    </div>
                </a>
            </li>
            <li className="hv">
                <a className='bookmarks'>
                    <div className="div_icon">
                        <BookmarkBorderIcon/>
                        <p className="text1">Bookmarks</p>
                    </div>
                </a>
            </li>
            <li className="hv">
                <a className='lists'>
                    <div className="div_icon">
                        <ListAltIcon/>
                        <p className="text1">Lists</p>
                    </div>
                </a>
            </li>
            <li className="hv">
                <a className='profile'>
                    <div className="div_icon">
                        <PermIdentityIcon/>
                        <p className="text1">Profile</p>
                    </div>
                </a>
            </li>
            <li className="hv">
                <a className='more'>
                    <div className="div_icon">
                        <MoreHorizIcon/>
                        <p className="text1">More</p>
                    </div>
                </a>
            </li>
        </ul>
    </div>
  )
}
