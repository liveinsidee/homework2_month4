import React, { useState } from "react";


function Squares() {
    const [color1, setСolor1] = useState("red")
    const [color2, setСolor2] = useState("blue")

    const handleClick1= () =>{
        setСolor1(color2)
        setСolor2(color1)
    }
    return (
        <div>
            <div
                style={{
                    backgroundColor: color1,
                    width: "200px",
                    height: "200px",
                    cursor: "pointer"
                }}
                onClick={handleClick1}>
            </div>
            <div
                style={{
                    backgroundColor: color2,
                    width: "200px",
                    height: "200px",
                    cursor: "pointer"
                }}
                onClick={handleClick1}>
            </div>
        </div>
    )
}
export default Squares