import React, { useState } from 'react'
import axios from 'axios'
import Apple from '../assets/apple.png'
import Banana from '../assets/banana.png'
import Lemon from '../assets/lemon.png'
import Cherry from '../assets/cherry.png'
import Slot from '../assets/slot.png'

const SlotMachine = props => {

  const [response, setResponse] = useState('')


  function spin() {
    axios.put('/user/spin').then((res) => {
      setResponse(res.data)
      console.log(res)
    })
      .catch(err => console.log(err))
  }

  return (<div>

    <div id="slot-wrapper">
      {response}
    </div>

    <div>
      <img class="slot-machine" alt="slot machine" src={Slot} />
      <img class="slot" alt="apple" src={Apple} />
      <img class="slot" alt="lemon" src={Lemon} />
      <img class="slot" alt="cherry" src={Cherry} />
      <img class="slot" alt="banana" src={Banana} />
    </div>



    <button className="spin-button"
      onClick={spin}
    >
      Spin
    </button>
  </div>

  )
}
export default SlotMachine