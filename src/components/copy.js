import { method } from 'lodash';
import React,{useState,useEffect} from 'react'

function Copy() {
    const [files, setFiles] = useState("");
    const url = window.location.href.split('/')[3]
      // console.log(url);
   const send = () =>{
      fetch(`http://localhost:3004/${url}/Copy`,{
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({"name":files}),
        
      });
   }
  return(


    <div>
        <br/>
        <br/>
        <br/>
        <br/>
        <h1>Copy</h1>
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

  )
  }

export default Copy
