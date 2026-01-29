import React, { useState } from "react";
export default function useState3() {
  const [arr1, setArr1] = useState([10, 20, 30, 40, 50]);
  const [val1, setVal1] = useState(0);
  const [val2, setValt2] = useState(0);
  const addElement = (v1) => {
    setArr1([...arr1, v1]);
  };
  const removeElement = (v1) => {
    setArr1(arr1.filter((x) => x !== v1));
  };
  const updateElement = (v1, v2) => {
    const newArr = arr1.map((x, idx) => (idx === v2 ? v1 : x));
    setArr1(newArr);
  };
  return (
    <>
      <h1>Array element are: {arr1}</h1>
      <br />
      <input
        type="number"
        onChange={(e) => setVal1(parseInt(e.target.value))}
        placeholder="Enter value to add"
      />
      <br />
      <br />
      <input
        type="number"
        onChange={(e) => setValt2(parseInt(e.target.value))}
        placeholder="Enter index to remove"
      />
      <br />
      <br />
      <input
        type="number"
        onChange={(e) => setValt2(parseInt(e.target.value))}
        placeholder="Enter index to update"
      />
      
       
      <br />
      <br />
      <button onClick={() => addElement(val1)}>Add Element</button>
      <br />
      <br />
      <button onClick={() => removeElement(val2)}>Remove Element</button>
      <br />
      <br />
      <button onClick={() => updateElement(val1, val2)}>update Elment</button>
    </>
  );
}
