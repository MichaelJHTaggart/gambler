import React, {useState} from 'react'
import {useDispatch} from 'react-redux';
import axios from 'axios'
import { Link } from 'react-router-dom'


const Header = props => {
 const dispatch = useDispatch()

 function logoutUser() {
  axios.delete('/auth/logout')
    .then((res) => {
      props.logout()
    })
    .catch(err => console.log(err))
}


 return (<div>

  <button>See all countries</button>

{}
  ?
 (
  <ol>
   <li>Login</li>
   <li>Register</li>
  </ol>
 )
  :
 (
  <ol>
   <li>{`Hello`}</li>
   <li>Logout</li>
  </ol>
 )
 </div>
 )
}
export default Header