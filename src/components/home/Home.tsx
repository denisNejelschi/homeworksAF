import React, { useContext } from 'react'
import { userContext } from '../userContext/UserContext'
import style from './home.module.css'


export default function Home() {
  const {user}=useContext(userContext)
  return (
    <div>Home
         {
          user.firstName && (
            <div className={style.credentials}>
        <p>{user.firstName}</p>
        <p>{user.lastName}</p>
        </div>
          )
        }
    </div>
  )
}
