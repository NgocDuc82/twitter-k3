import Avatar from '../../../common/avatar/avatar'
import React from 'react'
import './account.scss'

export default function account() {
  return (
    <div className='w'>
        <div className="tk">
            <div className="fl1">
                <div className='avatar'>
                    <Avatar/>
                </div>
                <div>
                    <p>Phúc Lã Văn</p>
                    <p>@Laphuc1402</p>
                </div>
            </div>
            <div className='menu'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
            </div>
        </div>
    </div>
  )
}
