import React from 'react'
import axios from 'axios'
import { connect, useSelector } from 'react-redux';
import { loginUser } from '../redux/reducer'


import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Apple from '../assets/apple.png'
import Banana from '../assets/banana.png'
import Lemon from '../assets/lemon.png'
import Cherry from '../assets/cherry.png'
import Slot from '../assets/slot.png'

const SlotMachine = props => {
  const warningToast = () => {
    toast("Make sure you are signed in before using the Slot Machine!", {
      className: "custom-toast",
      draggable: true,
      position: toast.POSITION.TOP_CENTER
    })
  }

  const winningToast = () => {
    toast("Check out your coin count to see if you have won!", {
      className: "custom-toast",
      draggable: true,
      position: toast.POSITION.TOP_LEFT
    })
  }

  const id = useSelector(state => state.id)
  const name = useSelector(state => state.full_name)

  function spin() {
    axios.put('/user/spin').then((res) => {
      winningToast();
      props.loginUser(id, name, res.data);
    })
      .catch(err => {
        if (err) {
          toast("Not signed in", {
            className: "error-toast",
            draggable: true,
            position: toast.POSITION.TOP_CENTER
          })
        }
      })
  }

  return (<div id="slot-wrapper">

    <>
      <ToastContainer />
    </>

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
export default connect(null, { loginUser })(SlotMachine)