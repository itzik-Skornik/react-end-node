import { method } from 'lodash'
import React from 'react'

function Delete() {
    const url = window.location.href.split('/')[3]
    fetch(`http://localhost:3004/${url}/Delete`,{
    method:"DELETE"})


}

export default Delete