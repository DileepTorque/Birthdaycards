import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Birthday.css";

const Birthday = () => {
    let [state, setState] = useState([]);
  
    useEffect(() => {
        let api = "http://localhost:4342/Brdy";
        axios.get(api).then((x) => setState(x.data));
    }, []);

    let Delet = () => {
        setState([]); 
    };

    return (
        <div className="birthday-container">
            <h1>{state.length} Birthdays Today</h1>
            {state.map((d) => {
                return (
                    <div className="birthday-card" key={d.id}>
                        <img src={d.image} className="birthday-image" alt="birthday" />
                        <h1 className="birthday-name">Happy Birthday to {d.name} </h1>
                        <h3 className="birthday-age">{d.age} years old</h3>
                    </div>
                );
            })}
            <button onClick={Delet} className="clear-button">Clear All</button>
        </div>
    );
};

export default Birthday;

