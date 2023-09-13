import React, { useState } from 'react'

function GifSearch({ handleSubmit }) {

    const [input, setInput] = useState("");

    function handleChange(event) {
        setInput(event.target.value)
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label style={{marginLeft:15}}>Enter a Search Term: </label><br></br>
            <input style={{marginLeft:15, height:45,
             width: 250, marginRight: 10, marginBottom: 2}} type='text'
              name='search-name' onChange={handleChange} value={input}/><br></br>
            <button type='submit' style={{height:40, width: 100, marginLeft:15}}>Find GIFs</button>
        </form>
    </div>
  )
}

export default GifSearch