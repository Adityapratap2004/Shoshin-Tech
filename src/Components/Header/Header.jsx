import React from 'react'
import './header.css'

const Header = () => {
  return (
    <div className='header'>
      <div className='header-search'>
        <input placeholder='Seacrh' />
        <img src="/images/search.svg" alt="notification" />
      </div>
      <div className='quick-access'>
        <img src="/images/ic_round-notifications.svg" alt="notification" />
        <img src="/images/bi_chat-left-dots-fill.svg" alt="chat" />
        <div className='user'>
          <div>
            <img src="/images/user.jpeg" width={50}/>
          </div>
          <p className='hidden_small'>Admirra John</p>
          <img src="/images/downwardarrow.svg"/>
        </div>
      </div>
    </div>
  )
}

export default Header
