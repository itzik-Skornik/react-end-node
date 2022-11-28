import React, { useEffect, useState } from "react";
function Rename() {
  const [files, setFiles] = useState("");
  const url = window.location.href.split("/")[3];
  console.log(url);
  const send = () => {
    fetch(`http://localhost:3004/${url}/Rename`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({"name":files}),
      
    });
  };
  return (
    <div>
        <br/>
        <br/>
        <br/>
        <br/>
        <h1>Rename</h1>
        <br/>
        <br/>
        <br/>
      <input
        type="text"
        value={files}
        onChange={(e) => setFiles(e.target.value)}
      />
      {' '}
      <button
        onClick={() => {
          send();
        }}
      >
       שלח
      </button>
    </div>
  );
}
export default Rename;