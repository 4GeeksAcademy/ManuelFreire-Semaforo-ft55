import React from "react";
import { useState } from 'react'

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component


export default function Home() {
	const [color, establishColor] = useState("red");
    const [colors, establishColores] = useState(["red", "yellow", "green"]);
  
    const alternarColor = () => {
      const currentIndex = colors.indexOf(color);
      const nextIndex = (currentIndex + 1) % colors.length;
      establishColor(colors[nextIndex]);
    };
  
    const addPurple = () => {
      if (!colors.includes("purple")) {
        establishColores([...colors, "purple"]);
      }
    };

	return (
		<div className="container justify-content-center my-3">
            <div className="row my-1">
                <div className="col-md-12 p-2 rounded-3 bg-secondary d-flex justify-content-center">
                    <button type="button" className="btn btn-primary mx-2" onClick={alternarColor}>Cambiar color</button>
                    <button type="button" className="btn btn-success mx-2" onClick={addPurple}>Añadir Purpura</button>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 rounded-3 bg-light d-flex flex-column align-items-center p-4">
                    <div className="bg-dark p-3 rounded-3">
                        {colors.map((c) => (
                            <div
                                key={c}
                                className={`brillo ${c} ${color === c ? "active" : ""}`}
                                onClick={() => establishColor(c)}
                            />
                        ))}
                    </div>
                    <div className="palo">
                    </div>
                </div>
            </div>
        </div>
	);
}

