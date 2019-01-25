import React from 'react'

const UserInput = ( props ) => {
    return (
        <div>
            <strong><input style={props.styleInline} onChange={props.changed} value={props.currentName}/></strong>
        </div>
    )
}

export default UserInput;