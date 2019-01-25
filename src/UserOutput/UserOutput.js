import React from 'react'
import './Output.css'

const UserOutput = ( props ) => {
    return (
        <div className="Output">
            <p>Username: {props.username}{props.children}</p>
            <p>Length: {props.len}</p>
        </div>
    )
}

export default UserOutput;