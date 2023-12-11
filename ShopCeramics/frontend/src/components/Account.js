import React from 'react'
import {Link} from 'react-router-dom';

export default function Account() {
  return (
    <header>
     <div className="container">
        <nav>
            <div><Link to="/login">Login</Link></div>
            <div><Link to="/signup">Signup</Link></div>
        </nav>
        </div>
    </header>
  )
}
