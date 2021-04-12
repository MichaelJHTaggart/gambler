import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import { loginUser, logout } from '../redux/reducer'

/* Header needs the following:
-full_name of person on the account
-Amount of coins in the persons account


Needs to show the information from the store & 
*/

const Header = props => {

  function logoutUser() {
    axios.delete('/auth/logout')
      .then((res) => {
        props.logout()
      })
      .catch(err => console.log(err))
  }

  return (
    <div>

      <Link to='/countryList'> See all countries</Link>

      <div>
        <Link to='/slotmachine'>
          <h3>Coins: {props.coins}</h3>
        </Link>
      </div>

      {
        props.id === ''
          ?
          (
            <ol>
              <li><Link to='/login'>Login</Link></li>
              <li><Link to='/register' >Register</Link></li>
            </ol>
          )
          :
          (
            <ol>
              <li>{`Hello ${props.full_name}`}</li>
              <button
                to='/'
                onClick={logoutUser}
              >
                Logout
          </button>
            </ol>
          )
      }
    </div >
  )
}

function mapStateToProps(state) {
  return state
}

export default withRouter((connect(mapStateToProps, { loginUser, logout })(Header)))