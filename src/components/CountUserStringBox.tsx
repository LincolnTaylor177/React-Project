import { useState, ChangeEvent } from "react";
import "../index.css";

/*
This component will return the dynamic input 
and output box for the counted string
requirement.
*/

function CountUserStringBox() {
  const [inputString, setInputString] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputString(event.target.value);
  };

  return (
    <div className="borderedContainer">
      <input
        className="block"
        type="text"
        value={inputString}
        onChange={handleChange}
      />
      <p className="underBlock">
        You have typed <b>{inputString.length}</b> characters.
      </p>
    </div>
  );
}

export default CountUserStringBox;
