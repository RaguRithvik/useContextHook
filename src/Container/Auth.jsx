import React from 'react'
import { Form } from './Form'
import { Home } from './Home'
import { PassUsersConetxt } from '../Context/UserContext'

export const Auth = () => {
  const { user } = PassUsersConetxt();
  return (
    <div>{user.itGuestUser ? <Form /> : <Home />}</div>
  )
}
