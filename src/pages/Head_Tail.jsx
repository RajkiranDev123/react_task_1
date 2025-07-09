import React, { useState, useEffect } from 'react'
import { Toaster } from 'react-hot-toast'
import { toast } from "react-hot-toast"
const Head_Tail = () => {


  const [choose, setChoose] = useState("")
  const [cols, setCols] = useState([])


  const submit = () => {
    if (!choose) {
      toast.error("select something!")
      return
    }
    console.log("choosed ==>", choose)

    let clonedArray = [...cols];
    console.log("cols array==>", cols)
    console.log("cloned array ==>", clonedArray)



    let index = clonedArray.findIndex((el) => el.type === choose);
    console.log("index ==>", index)

    if (index === -1) {
      //{ [type:"H",values:["H"]] } : 
      clonedArray.push({ type: choose, values: [choose] });
    } else {
      clonedArray[index].values.push(choose);
    }

    setCols(clonedArray);
  

  }

  return (
    <div>
      <Toaster position='top-center' reverseOrder={false} />


      <div>
        <p>Select value :</p>
        {choose && <p>Your Selected value is : {choose}</p>}

        <select style={{ cursor: "pointer", padding: 3 }} onChange={(e) => setChoose(e.target.value)}>
          <option value={""}>select T or H</option>
          <option value={"H"}> H</option>
          <option value={"T"}> T</option>



        </select>

      </div>


      <div style={{ marginTop: 5 }}>
        <button onClick={() => submit()}>Submit</button>
      </div>
      {/* display */}

      <div>
        <p>Display :</p>

        <div style={{ background: "grey" }}>
          <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
            {cols.map((col, index) => (
              <div key={index}>
                {col.values.map((val, i) => (
                  <div key={i}>{val}</div>
                ))}
              </div>
            ))}
          </div>
        </div>


      </div>



















    </div>
  )
}

export default Head_Tail