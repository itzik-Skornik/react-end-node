import './App.css';

import Tast from "./components/tast"
import 'bootstrap/dist/css/bootstrap.min.css';
import Index from "./components/Index"
import Info from "./components/Info"
import Show from "./components/Show"
import Rename from "./components/Rename"
import Delete from "./components/Delete"
import {BrowserRouter , Route,Routes} from "react-router-dom"
import Copy from './components/copy';

function App() {
  const url = window.location.href.split("/")[3];
  // console.log(url);
  return (
 
    <div className="App">
  

<BrowserRouter>
<Routes>
<Route path='/'  element={<Tast/>}/>
<Route path={`/${url}`} element={<Index/>}>
<Route path={`/${url}/info`} element={<Info/>}/>
<Route path={`/${url}/Show`} element={<Show/>}/>
<Route path={`/${url}/Rename`} element={<Rename/>}/>
<Route path={`/${url}/Copy`} element={<Copy/>}/>
<Route path={`/${url}/Delete`} element={<Delete/>}/>
  </Route>
</Routes>
</BrowserRouter>
    </div>
 );
}

export default App;
