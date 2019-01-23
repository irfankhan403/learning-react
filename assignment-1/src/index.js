import React from 'react'
import ReactDOM from 'react-dom'

function myInfo(){
    return (

        <div>
            <h1>Shahid Khan</h1>
            <p>I like learing new stuff all the time, this time around its REACT.</p>
            <p>Some of the places I would like to visit are: </p>
            <ul>
                <li>Japan</li>
                <li>Greenland</li>
                <li>Italy</li>
                <li>Spain</li>
            </ul>
        </div>
    )
}

ReactDOM.render(myInfo(), document.getElementById('root'))