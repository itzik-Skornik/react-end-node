
import React,{useEffect,useState} from 'react'
function Show() {
  const [files, setFiles] = useState([]);
  const url = window.location.href.split('/')[3]
    // console.log(url);
  useEffect(() => {
    fetch(`http://localhost:3004/${url}/Show`)
      .then((files) => files.text())
      .then((files) => {
       
        setFiles(files);
      
      });
  }, []);
  return (
    <div>{files && files}</div>
  )
}
export default Show