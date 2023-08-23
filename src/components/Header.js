import React from 'react'
import { Link } from 'react-router-dom';
function Header() {
  return (
    <div className='header'>
      <Link className='header-link' to={`/`} >
        Champions
      </Link>
    </div>
  )
}

export default Header