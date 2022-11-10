import Avatar from '../../../common/avatar/avatar'
import React from 'react'
import './account.scss'
import Menu from '../../../common/button/menu/menu';

export default function account() {
  return (
    <div className='w'>
        <div className="tk">
            <div className="fl1">
                <div className='avatar'>
                    <Avatar/>
                </div>
                <div className='name'>
                    <p className='name1'>Phúc Lã Văn</p>
                    <p className='name2'>@Laphuc1402</p>
                </div>
            </div>
            <div className='menu'>
              <Menu/>
            </div>
        </div>
    </div>
  )
}
