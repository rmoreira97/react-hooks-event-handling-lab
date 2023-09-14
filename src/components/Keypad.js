// Code Keypad Component Here
import React from "react";

function Keypad() {
  const HandleInputPassword = (event) => {
    console.log("Entering password...", event.target.value);
  };

  return (
    <div>
      <input type="password" onChange={HandleInputPassword} />
    </div>
  );
}

export default Keypad;
