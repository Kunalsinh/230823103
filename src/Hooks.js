import React, { useRef, useEffect, useState } from "react";

function Hook() {
    const name = useRef(null);
    const [city,setCity] = useState("");

  function handleHook() {
    console.log(`${name.current.value}`);
  }

  useEffect(() =>{
    console.log("Called!")

  },[])

  return (
    <>
      <div>
        <h3>Form</h3>
        <form onSubmit={handleHook}>
          <label>Name</label>
          <input name="Name" type="text" ref={name} />

          <label>City</label>
          <input name="city" type="text" onChange={(e)=>{
            setCity(e.target.value); 
          }}/>
          
          <button type="submit">OK</button>
        </form>
      </div>
    </>
  );
}
export default Hook;
