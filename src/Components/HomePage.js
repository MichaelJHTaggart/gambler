import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const HomePage = props => {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState([])

  const successToast = () => {
    toast("Register to get coins! Then click on your coins to go to the Slot Machine!", {
      className: "custom-toast",
      draggable: true,
      position: toast.POSITION.TOP_CENTER
    })
  }

  function countryNames() {
    axios.get(`https://restcountries.eu/rest/v2/name/${input}`).then((res) => {
      const newOutput = res.data.map(function (element) {
        return element.name
      });
      setOutput(newOutput);
      successToast();
    })
  }

  return (
    <div id="search-function">
      <>
        <ToastContainer />
      </>

      <form className="form__group field">
        <input
          type="input" className="form__field" id='name'
          placeholder="Search for a country"
          value={input}
          onChange={e => {
            setInput(e.target.value)
          }}
          onKeyUp={e => {
            e.preventDefault();
            setInput(e.target.value);
            if (e.code === "Enter") {
              countryNames();
              successToast();
            }
          }}
        />
        <label htmlFor="name" className="form__label">Type in the name of a country...</label>
      </form>



      <button id="rainbow-1"
        onClick={countryNames}
      >
        Click here to search!
      </button>

      <div id="search-function">
        {output.map((country) => {
          return (
            <Link key={country} to={`/${country}`}>
              <h2 className="search-results">{country}</h2>
            </Link>
          )
        })}
      </div>
    </div >
  )
}
export default HomePage