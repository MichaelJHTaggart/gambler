import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const CountryList = (props) => {
 const [list, setList] = useState([])

 useEffect(() => {
  axios.get(`https://restcountries.eu/rest/v2/all`).then((res) => {
   setList(res.data)
  })
 }, [])

 return (<div>
  {list.map((country) => {
   return (
    <Link key={country.name} to={`/${country.name}`}>
     <h2>{country.name}</h2>
    </Link>
   )
  })}
 </div>
 )
}

export default CountryList