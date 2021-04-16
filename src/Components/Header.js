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
    <header id="content">
      <div className="nav">
        <Link to='/countryList'> See all countries</Link>
      </div>

      <div className="nav">
        <Link to='/slotmachine'>
          <h3 className="nav">Coins: {props.coins}</h3>
        </Link>
      </div>



      {
        props.id === ''
          ?
          (
            <div className="nav">
              <Link to='/login'>Login</Link>
              <Link className="add-margin" to='/register' >Register</Link>
            </div>
          )
          :
          (
            <div className="nav">
              <Link to='/'>{`Hello ${props.full_name}`}
              </Link>
              <button
                to='/'
                onClick={logoutUser}
              >
                Logout
                </button>
            </div>
          )
      }
    </header >
  )
}

function mapStateToProps(state) {
  return state
}

export default withRouter((connect(mapStateToProps, { loginUser, logout })(Header)))