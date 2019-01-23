import React from 'react'
import ReactDOM from 'react-dom'

function myInfo(){
    return (
        <ul>
            <li>Shahid Khan</li>
            <li>Having fun while learing react</li>
            <li>Ireland, Greenland, Italy</li>
        </ul>
    )
}

ReactDOM.render(myInfo(), document.getElementById('root'))