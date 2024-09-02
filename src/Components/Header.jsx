import React from 'react'
import logo from '../logo.png'
const Header = () => {
  return (
    <div className='header' >
      
      <h1 style={{color: 'white'}}
      >SAVE RENT CONTROLS</h1>


<a href="https://www.livingrent.org" target="_blank"
style={{textDecoration: 'none', color: 'white'}}
>
          <img src={logo} height='40px' />
        </a>
    </div>
  )
}

export default Header