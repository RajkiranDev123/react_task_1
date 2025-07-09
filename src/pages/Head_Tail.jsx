import React, { useState, useEffect } from 'react'

const Head_Tail = () => {


  const [choose,setChoose]=useState("")
  const [cols,setCols]=useState([])


  const submit=()=>{

  }

  return (
    <div>


      <div>
        <button onClick={()=>submit()}>Submit</button>
      </div>
    </div>
  )
}

export default Head_Tail