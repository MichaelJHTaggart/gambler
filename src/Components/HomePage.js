import React, { useState } from 'react';


const HomePage = props => {
 const [input, setInput] = useState('')

 return (<div>

  <form>
   <input
    placeholder="Search for a country"
    type="text"
    value={input}
    onChange={e => setInput(e.target.value)}
   ></input>

  </form>

  <button>Search</button>

 </div>
 )
}
export default HomePage