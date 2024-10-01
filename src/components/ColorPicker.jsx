import React, { useState } from 'react'
import { GetColorName } from 'hex-color-to-color-name';

function ColorPicker() {
    const [selectedColor, setColor] = useState("#ffffff");
    const [selectColorName, setColorName] = useState("White");
    function handleColorChange(e){
        setColor(e.target.value);
        setColorName(GetColorName(e.target.value));
    }
    return (
        <>
            <div className="body-main">
                <h1>Pick your color</h1>
                <div className="color-box" style={{backgroundColor: selectedColor}}>
                    <p>{selectedColor}</p>
                </div>
                <div className="color-input">
                    <p>Selected Color : <span style={{color:selectedColor}}>{selectedColor}</span> ({selectColorName}) </p>
                    <input type="color" value={selectedColor} onChange={() => handleColorChange(event)} />
                </div>
            </div>
        </>
    )
}

export default ColorPicker