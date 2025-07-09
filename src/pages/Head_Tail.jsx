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


    ////////////////////////////////////////// el.type === "H"
    let index = clonedArray.findIndex((el) => el.type === choose);
    console.log("index ==>", index) // will get 0 if i add "H" again

    if (index === -1) {
      clonedArray.push({ type: choose, values: [choose] });
      //clonedArray=[   {  [type:"H",values:["H"]] }   ]: pushing object : index 0 now!

    } else {
      //{ [type:"H",values:["H","H"]] } : update on the same index if  "H" was added before
      clonedArray[index].values.push(choose);
    }

    setCols(clonedArray);//updating the final array to reflect in ui
  

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

        {/* box  */}
        <div style={{ background: "grey", padding: 4, borderRadius: 5 }}>

          <div style={{ display: "flex", gap: 3, background: "" }}>

            {cols?.map(el => (

              <div>
                {el.values?.map(ele => (
                  <div style={{ color: "white" }} >{ele}</div>
                ))}
              </div>

            ))
            }

          </div>


        </div>


      </div>



















    </div>
  )
}

export default Head_Tail