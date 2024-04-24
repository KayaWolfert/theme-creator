import "./Theme.css";
import ColorList from "./ColorList.js";
import ThemePreview from "./ThemePreview.js";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import { useState } from "react";

export default function Theme({ theme, name , onDelete}) {
  const [showDetails, setshowDetails] = useState(false);

  function toggleDetails() {
    setshowDetails(!showDetails);
  }

  return (
    <section className="theme-section">
      <button className="toggle-button" onClick={toggleDetails}>
        <h2> {name}</h2>
        {showDetails ? (
          <IconChevronUp size="1.5rem" />
        ) : (
          <IconChevronDown size="1.5rem" />
        )}
      </button>
      {showDetails ? (
      <>
        <button className="delete-theme-button" id={theme.id} onClick={()=> onDelete(theme.id)}> delete Theme</button>
        <ColorList theme={theme} />
        </>
      ) : (
        <ThemePreview theme={theme} />
      )}
      
    </section>
  );
}
;
