import { useState, ChangeEvent } from "react";

/*
This component will return the dynamic input 
and output box for the reversed string
requirement.
*/

function ReverseUserStringBox() {
  const [inputString, setInputString] = useState<string>("");
  const [reversedString, setReversedString] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setInputString(inputValue);

    const reversedValue = inputValue.split("").reverse().join("");
    setReversedString(reversedValue);
  };

  return (
    <div className="borderedContainer">
      <label>
        <input
          className="block"
          type="text"
          value={inputString}
          onChange={handleChange}
        />
      </label>
      <p className="underBlock">
        Reversed String: <b>{reversedString}</b>
      </p>
    </div>
  );
}

export default ReverseUserStringBox;
