
import React, { useState, useEffect } from "react";

const Timer = () => {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(seconds + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, [seconds]);

    const one = seconds / 1 % 10
    const two = Math.floor(seconds / 10) % 10;
    const three = Math.floor(seconds / 100) % 10;
    const four = Math.floor(seconds / 1000) % 10;
    const five = Math.floor(seconds / 10000) % 10;
    const six = Math.floor(seconds / 100000) % 10;

    return (
        <div style={{ borderColor: "white", borderStyle: "solid", borderWidth: "15px", backgroundColor: "black", display: "flex", alignItems: "center", justifyContent: "center", height: "200px"}}>
          <i className="fas fa-clock fa-4x" style={{ marginRight: "10px", borderRadius:"5px", fontSize: "100px", border: "1px solid grey", padding: "2px", margin: "10px" }}></i>
          <div style={{ marginLeft: "10px", display: "flex" }}>
            <div style={{ borderRadius:"5px", fontSize: "100px", border: "1px solid grey", padding: "2px", margin: "10px" }}>{six}</div>
            <div style={{ borderRadius:"5px", fontSize: "100px", border: "1px solid gray", padding: "2px", margin: "10px" }}>{five}</div>
            <div style={{ borderRadius:"5px", fontSize: "100px", border: "1px solid grey", padding: "2px", margin: "10px" }}>{four}</div>
            <div style={{ borderRadius:"5px", fontSize: "100px", border: "1px solid grey", padding: "2px", margin: "10px" }}>{three}</div>
            <div style={{ borderRadius:"5px", fontSize: "100px", border: "1px solid grey", padding: "2px", margin: "10px" }}>{two}</div>
            <div style={{ borderRadius:"5px", fontSize: "100px", border: "1px solid grey", padding: "2px", margin: "10px" }}>{one}</div>
          </div>
        </div>
      );
      
} 

export default Timer;
