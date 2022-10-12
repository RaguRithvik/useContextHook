import React from 'react'
import { PassUsersConetxt } from '../Context/UserContext'

export const Header = () => {
    const { logout, user } = PassUsersConetxt()
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container-fluid">
            <div className="collapse navbar-collapse" id="mynavbar">
                <ul className="navbar-nav me-auto">
                  <li className="nav-item text-white">ContextHook API</li>
                </ul>
                <div className="d-flex">
                   { !user.itGuestUser ? <button className="btn btn-primary" type="button" onClick={logout}>Logout</button> : ""} 
                </div>
            </div>
        </div>
    </nav>
  )
}
