import React, { useState, useEffect } from 'react'
import { Toaster } from 'react-hot-toast'
import { toast } from "react-hot-toast"
const Head_Tail = () => {


  const [choose, setChoose] = useState("")
  const [cols, setCols] = useState([])


  const submit = () => {
    if (!choose) {
      toast.error("select something from the dropdown!")
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

    } else if (cols[3]?.values?.includes(choose)) {
      console.log("check=======>")
      const updatedItems = [...cols];
      updatedItems[3] = {
        ...updatedItems[2],
        values: [...updatedItems[3].values, choose]
      };

      setCols(updatedItems);
      return



    }

    else if (!cols[cols.length - 1].values.includes(choose)) {
      console.log("called........................")
      clonedArray.push({ type: choose, values: [choose] });
    }
    else {
      //{ [type:"H",values:["H","H"]] } : update on the same index if  "H" was added before
      console.log(cols[cols.length - 1].values.includes(choose))
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
        {cols?.length > 0 && <div style={{ background: "black", padding: 4, borderRadius: 5 }}>

          <div style={{ display: "flex", gap: 3, background: "white", padding: 2 }}>

            {cols?.map((el, index) => (

              // this div(green) will go flex
              <div key={index} style={{ background: "green", padding: 3 }}>

                {el.values?.map((ele, index) => (
                  <div key={index} style={{ color: "white", background: "red", padding: 1, margin: 1, borderRadius: 3 }} >{ele}</div>
                  // H T
                  // H
                  // new el and again green div...
                ))
                }
              </div>

            ))
            }

          </div>


        </div>}
        {/* box */}


      </div>



















    </div>
  )
}

export default Head_Tail