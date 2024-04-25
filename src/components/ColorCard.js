import "./ColorCard.css";
import { useState } from "react";
import { useEffect } from "react";

export default function ColorCard ({color}){

    const [colorName,setColorName] = useState("")
    
    useEffect(() => {
    async function FetchColors(){
      const hex = color.value.replace("#", "");
      const url = `https://www.thecolorapi.com/id?hex=${hex}`
      const response = await fetch(url);
      const data = await response.json();
      setColorName(data.name.value);
      
    }
       FetchColors()
       

}, [color.value]);

    
  
   


    return (
        <> 
            <div className="color-cards__color-info">
                <p className="color-cards__role"> {color.role}</p>
                <p className="color-cards__hex"> {color.value}</p>
                <p className="color-cards__name"> {colorName}</p>
            </div>
            <div className="color-cards__color-show" style={{ backgroundColor: color.value }}></div>
        </>
    );
}