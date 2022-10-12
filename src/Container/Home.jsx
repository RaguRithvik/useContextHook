import React from 'react'
import { PassUsersConetxt } from '../Context/UserContext'
export const Home = () => {
  const { user } = PassUsersConetxt()
  console.log(user.name)
  
  return (
    <div>
        <h1>Hi {user.name} Logged in</h1>
    </div>
  )
}
