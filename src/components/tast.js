import React from 'react'
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from "axios"
import { Outlet} from 'react-router-dom';

const Tast = () => {
    const size = (f) => {
        const a = f.split(".");
        return a[a.length - 1];
    };
    const size1 = (f) => {
        const a = f.split(".");
        return a[a.length - 2];
    };
    const [files, setfiles] = useState()
 

    useEffect(() => {
        fetch("http://localhost:3004")
            .then(fil => fil.json())
            .then(file => setfiles(file))
    }, []);

    return (

        <div>
            <h1>your folders</h1>
            {/* <iframe src={`http://localhost:3004/${curFile}`} title="W3Schools Free Online Web Tutorials"></iframe> */}
       
            {files &&
                files.map((item, idx) => (
                    
                    <Card style={{ display:"inline-block", width: '15rem', border: '1px solid', margin:"50px" }}>
                        <Card.Img width={25}  variant="top" 

src={
    size(item) === "html"
      ?"https://cdn-icons-png.flaticon.com/512/103/103077.png"
      : size(item) === "pdf" ? "https://www.y4pc.co.il/images/Guides/01-16/how-to-create-pdf-file/how-to-create-pdf-file6.jpg"
      : "https://cdn.pixabay.com/photo/2013/07/12/16/58/folder-151584__340.png"
      
   }

                        />
                        <Card.Body>
                            <Card.Title>{size1(item)?size1(item):'folder'}</Card.Title>
                          
                            <Button variant="secondary" href={item} >כניסה לתיקיה</Button>
                        </Card.Body>
                        
                    </Card>


                ))}
                <Outlet />
                </div>
    )
}

export default Tast