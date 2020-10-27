import axios from "axios";
import React, { useState } from "react";

const App = () => {
  const [text, setText] = useState("hello");

  const handleChange = (e) => {
    setText(() => e.target.value);
  };

  const handleDownload = () => {
    const element = document.createElement("a");
    element.setAttribute("href", "http://localhost:5000/");
    element.setAttribute("download", "response.pdf");

    element.style.display = "none";
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  };

  const handleFull = async () => {
    const response = await axios.post("http://localhost:5000/", { text });
    if (response.status === 201) {
      handleDownload();
    } else {
      console.log("Something went wrong.");
    }
  };

  return (
    <div>
      <textarea onChange={handleChange} value={text} />
      <pre>{JSON.stringify({ text }, null, 2)}</pre>
      <button onClick={handleFull}>POSTING TEST</button>
      <button onClick={handleDownload}>test</button>
    </div>
  );
};

export default App;
