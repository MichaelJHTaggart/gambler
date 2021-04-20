import React, { useState } from 'react'
import axios from 'axios'
import { connect } from 'react-redux';
import { coinUpdate } from '../redux/reducer'
import Apple from '../assets/apple.png'
import Banana from '../assets/banana.png'
import Lemon from '../assets/lemon.png'
import Cherry from '../assets/cherry.png'
import Slot from '../assets/slot.png'

const SlotMachine = props => {

  const [response, setResponse] = useState('')


  function spin() {
    axios.put('/user/spin').then((res) => {
      props.coinUpdate(res.data)
      setResponse(res.data)
    })
      .catch(err => console.log(err))
  }

  return (<div>

    <div id="slot-wrapper">

    </div>

    <div>
      <img className="slot-machine" alt="slot machine" src={Slot} />
      <img className="slot" alt="apple" src={Apple} />
      <img className="slot" alt="lemon" src={Lemon} />
      <img className="slot" alt="cherry" src={Cherry} />
      <img className="slot" alt="banana" src={Banana} />
    </div>



    <button className="spin-button"
      onClick={spin}
    >
      Spin
    </button>
  </div>

  )
}
export default connect(null, { coinUpdate })(SlotMachine)