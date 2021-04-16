import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Country = (props) => {
 const { name } = props.match.params
 const [country, setCountry] = useState([])

 useEffect(() => {
  axios.get(`https://restcountries.eu/rest/v2/name/${name}`).then((res) => {
   setCountry(res.data[0])
  })
 }, [name])

 return (
  <div>
   <h1>{country.name}</h1>
   <img className="country-flag" alt={country.name} src={country.flag} />

   {/* Add these questions next. Figure out how to map over the multiple objects.
   
   <section>
    <h2>
     What languages do we speak?
    </h2>
    <h2>
     {languages}
    </h2>
   </section> */}
   {/* 
   <section>
    <h2>
     What is the name of our money?
    </h2>
    <h2>
     {country.currencies.name[0]}
    </h2>
   </section> */}

   <section>
    <h2>
     What is the name of our capital?
    </h2>
    <h2>
     {country.capital}
    </h2>
   </section>

   <section>
    <h2>
     How many people live here?
    </h2>
    <h2>
     {country.population}
    </h2>
   </section>

   <Link className="link-text" to='/countryList'>Back to List of Countries</Link>
  </div>
 )
}
export default Country