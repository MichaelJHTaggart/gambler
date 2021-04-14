import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

const HomePage = props => {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState([])

  function countryNames() {
    axios.get(`https://restcountries.eu/rest/v2/name/${input}`).then((res) => {
      console.log(res.data)
      const newOutput = res.data.map(function (element) {
        return element.name
      });
      setOutput(newOutput)

    })
  }

  return (
    <div>
      <form>
        <input
          placeholder="Search for a country"
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
        >
        </input>
      </form>

      <button
        onClick={countryNames}
      >
        Search
      </button>

      <div>
        {output.map((country) => {
          return (
            <Link key={country} to={`/${country}`}>
              <h2>{country}</h2>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
export default HomePage