import React, { useEffect } from 'react'
import axios from 'axios'
import routes from './Routes'
import Header from './Components/Header'

import { connect } from 'react-redux';
import { loginUser } from './redux/reducer'

const App = props => {

  useEffect((props) => {
    axios.get(`/auth/user`).then((res) => {
      props.loginUser(res.data.user_id, res.data.name);
    }).catch(err => console.log(err))
  }, [])

  return (
    <div className="App">
      <Header />
      {routes}
    </div>
  );
}
function mapStateToProps(reduxState) {
  return reduxState
}
export default connect(mapStateToProps, { loginUser })(App)