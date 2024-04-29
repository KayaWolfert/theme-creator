import "./Theme.css";
import ColorList from "./ColorList.js";
import ThemePreview from "./ThemePreview.js";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import { useState } from "react";
import EditForm from "./EditForm.js"

export default function Theme({ theme, name , onDelete, onEdit}) {
  const [showDetails, setShowDetails] = useState(false);
  const [showEdit,setShowEdit] = useState(false);

  function toggleDetails() {
    setShowDetails(!showDetails);
  }

  function toggleEdit(){
    setShowEdit(!showEdit);
    
  }

  return (
    <section className="theme__section">
      <button className="theme__toggle-button" onClick={toggleDetails}>
        <h2> {name}</h2>
        {showDetails ? (
          <IconChevronUp size="1.5rem" />
        ) : (
          <IconChevronDown size="1.5rem" />
        )}
      </button>
      {showDetails ? (
      <>
        <button className="theme__delete-button" id={theme.id} onClick={()=> onDelete(theme.id)}> delete Theme</button>
        <button className="theme__edit-button" id={theme.id} onClick={toggleEdit}> edit theme</button> 
        {showEdit && <EditForm toggleEdit={toggleEdit} onSubmit={onEdit} id={theme.id} theme={theme}/>}
        <ColorList theme={theme} />
        
        </>
      ) : (
        <ThemePreview theme={theme} />
      )}
      
    </section>
  );
}
;
