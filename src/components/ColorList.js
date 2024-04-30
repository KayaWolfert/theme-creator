import ColorCard from "./ColorCard.js";
import "./ColorList.css"
import { useState } from "react";
import TryTheme from "./TryTheme.js";


export default function ColorList({theme}){

    const [tryTheme,setTryTheme] = useState(false);
    function toggleTry(){
        setTryTheme(!tryTheme)
      }

    
        return (
            <>
              <button className="colorlist__try-button" onClick={toggleTry}>
                try theme
              </button>
              {tryTheme ? (
            
                <TryTheme theme={theme} />
                
              ) : (
                theme.colors.map((color) => (
                  <article className="color-list__article" key={color.role}>
                    <ColorCard color={color} />
                  </article>
                ))
              )}
            </>
          );
        }