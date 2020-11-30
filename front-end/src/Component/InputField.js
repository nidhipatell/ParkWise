import React, { useState } from 'react';

const InputField = ({ setValue, ...props}) => {
   
    return (
        <input
            onChange={(e) => setValue(e.target.value)}
            {...props}></input>
    )
}
export default InputField;