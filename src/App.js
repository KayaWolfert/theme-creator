import Theme from "./components/Theme.js";
import { themes as initialThemes } from "./db.js";
import "./App.css";
import ThemeForm from "./components/ThemeForm.js";
import { v4 as uuid } from "uuid";
import useLocalStorageState from "use-local-storage-state";

function App() {
  const [themes, setThemes] = useLocalStorageState("themes", {
    defaultValue: initialThemes,
  });

  function handleAddTheme(newTheme) {
    setThemes([{ ...newTheme, id: uuid() }, ...themes]);
  }

  function handleDeleteTheme(id) {
    console.log("you clicked delete" + id);
    setThemes(themes.filter((theme) => theme.id !== id));
  }

  function handleEditTheme(editedTheme, id) {
    console.log("you want to edit a theme with id" +id + "  themeObject should be here: " , editedTheme);
    
  
  } 
        
            

  return (
    <>
      <header>
        <h1>Theme Creator </h1>
      </header>
      <main>
        <ThemeForm onSubmit={handleAddTheme} />

        {themes.map((theme) => {
          return (
            <Theme
              key={theme.id}
              theme={theme}
              name={theme.name}
              onDelete={() => handleDeleteTheme(theme.id)}
              onEdit={handleEditTheme
              }
            />
          );
        })}
      </main>
    </>
  );
}

export default App;
