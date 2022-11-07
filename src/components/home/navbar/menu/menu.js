import React from 'react'
import './menu.scss'

export default function menu() {
  return (
    <div>
        <ul className='cham'>
            <li className="hv">
                <a>
                    <div className="div_icon">
                        <svg viewBox="0 0 24 24" aria-hidden="true" class="icon"><g><path d="M12 1.696L.622 8.807l1.06 1.696L3 9.679V19.5C3 20.881 4.119 22 5.5 22h13c1.381 0 2.5-1.119 2.5-2.5V9.679l1.318.824 1.06-1.696L12 1.696zM12 16.5c-1.933 0-3.5-1.567-3.5-3.5s1.567-3.5 3.5-3.5 3.5 1.567 3.5 3.5-1.567 3.5-3.5 3.5z"></path></g></svg>
                        <p className="text">Home</p>
                    </div>
                </a>
            </li>
            <li className="hv">
                <a>
                    <div className="div_icon">
                        <svg viewBox="0 0 24 24" aria-hidden="true" class="icon"><g><path d="M10.09 3.098L9.72 7h5.99l.39-4.089 1.99.187L17.72 7h3.78v2h-3.97l-.56 6h3.53v2h-3.72l-.38 4.089-1.99-.187.36-3.902H8.78l-.38 4.089-1.99-.187L6.77 17H2.5v-2h4.46l.56-6H3.5V7h4.21l.39-4.089 1.99.187zM14.96 15l.56-6H9.53l-.56 6h5.99z"></path></g></svg>
                        <p className="text1">Explore</p>
                    </div>
                </a>
            </li>
            <li className="hv">
                <a>
                    <div className="div_icon">
                        <svg viewBox="0 0 24 24" aria-hidden="true" class="icon"><g><path d="M10.09 3.098L9.72 7h5.99l.39-4.089 1.99.187L17.72 7h3.78v2h-3.97l-.56 6h3.53v2h-3.72l-.38 4.089-1.99-.187.36-3.902H8.78l-.38 4.089-1.99-.187L6.77 17H2.5v-2h4.46l.56-6H3.5V7h4.21l.39-4.089 1.99.187zM14.96 15l.56-6H9.53l-.56 6h5.99z"></path></g></svg>
                        <p className="text1">Notifications</p>
                    </div>
                </a>
            </li>
            <li className="hv">
                <a>
                    <div className="div_icon">
                        <svg viewBox="0 0 24 24" aria-hidden="true" class="icon"><g><path d="M10.09 3.098L9.72 7h5.99l.39-4.089 1.99.187L17.72 7h3.78v2h-3.97l-.56 6h3.53v2h-3.72l-.38 4.089-1.99-.187.36-3.902H8.78l-.38 4.089-1.99-.187L6.77 17H2.5v-2h4.46l.56-6H3.5V7h4.21l.39-4.089 1.99.187zM14.96 15l.56-6H9.53l-.56 6h5.99z"></path></g></svg>
                        <p className="text1">Messages</p>
                    </div>
                </a>
            </li>
            <li className="hv">
                <a>
                    <div className="div_icon">
                        <svg viewBox="0 0 24 24" aria-hidden="true" class="icon"><g><path d="M10.09 3.098L9.72 7h5.99l.39-4.089 1.99.187L17.72 7h3.78v2h-3.97l-.56 6h3.53v2h-3.72l-.38 4.089-1.99-.187.36-3.902H8.78l-.38 4.089-1.99-.187L6.77 17H2.5v-2h4.46l.56-6H3.5V7h4.21l.39-4.089 1.99.187zM14.96 15l.56-6H9.53l-.56 6h5.99z"></path></g></svg>
                        <p className="text1">Bookmarks</p>
                    </div>
                </a>
            </li>
            <li className="hv">
                <a>
                    <div className="div_icon">
                        <svg viewBox="0 0 24 24" aria-hidden="true" class="icon"><g><path d="M10.09 3.098L9.72 7h5.99l.39-4.089 1.99.187L17.72 7h3.78v2h-3.97l-.56 6h3.53v2h-3.72l-.38 4.089-1.99-.187.36-3.902H8.78l-.38 4.089-1.99-.187L6.77 17H2.5v-2h4.46l.56-6H3.5V7h4.21l.39-4.089 1.99.187zM14.96 15l.56-6H9.53l-.56 6h5.99z"></path></g></svg>
                        <p className="text1">Lists</p>
                    </div>
                </a>
            </li>
            <li className="hv">
                <a>
                    <div className="div_icon">
                        <svg viewBox="0 0 24 24" aria-hidden="true" class="icon"><g><path d="M10.09 3.098L9.72 7h5.99l.39-4.089 1.99.187L17.72 7h3.78v2h-3.97l-.56 6h3.53v2h-3.72l-.38 4.089-1.99-.187.36-3.902H8.78l-.38 4.089-1.99-.187L6.77 17H2.5v-2h4.46l.56-6H3.5V7h4.21l.39-4.089 1.99.187zM14.96 15l.56-6H9.53l-.56 6h5.99z"></path></g></svg>
                        <p className="text1">Profile</p>
                    </div>
                </a>
            </li>
            <li className="hv">
                <a>
                    <div className="div_icon">
                        <svg viewBox="0 0 24 24" aria-hidden="true" class="icon"><g><path d="M10.09 3.098L9.72 7h5.99l.39-4.089 1.99.187L17.72 7h3.78v2h-3.97l-.56 6h3.53v2h-3.72l-.38 4.089-1.99-.187.36-3.902H8.78l-.38 4.089-1.99-.187L6.77 17H2.5v-2h4.46l.56-6H3.5V7h4.21l.39-4.089 1.99.187zM14.96 15l.56-6H9.53l-.56 6h5.99z"></path></g></svg>
                        <p className="text1">More</p>
                    </div>
                </a>
            </li>
        </ul>
    </div>
  )
}
