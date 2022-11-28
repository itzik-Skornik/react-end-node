import React from 'react'
import {Outlet} from "react-router-dom"
import Delete from './Delete'
function Index() {
  const url = window.location.href.split("/")[3];
  // console.log(url);
  return (
   
    <div> 
      <h1>Hello friend</h1>
<a  class="btn btn-primary" href={`/${url}/Info`}>Info</a>{"  "}
<a  class="btn btn-primary" href={`/${url}/Show`}>Show</a>{"  "}
<a  class="btn btn-primary" href={`/${url}/Rename`}>Rename</a>{"  "}
<a  class="btn btn-primary" href={`/${url}/Copy`}>Copy</a>{"  "}
<a onClick={Delete} class="btn btn-primary" href={`/${url}/Delete`}>Delete</a>{"  "}
    <Outlet/>
    </div>
  )
}

export default Index