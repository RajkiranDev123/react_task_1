import React, { useState, useEffect } from 'react'

const Head_Tail = () => {


  const [choose, setChoose] = useState("")
  const [cols, setCols] = useState([])


  const submit = () => {

  }

  return (
    <div>

      <div>
        <p>Select value :</p>
        {choose && <p>Selected value is : {choose}</p>}

        <select style={{cursor:"pointer",padding:3}} onChange={(e) => setChoose(e.target.value)}>
          <option>select T or H</option>
          <option value={"H"}> H</option>
          <option value={"T"}> T</option>



        </select>

      </div>


      <div style={{marginTop:5}}>
        <button onClick={() => submit()}>Submit</button>
      </div>
    </div>
  )
}

export default Head_Tail