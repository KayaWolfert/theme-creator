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

  async function getColorName(hexValue) {
    const cleanHexValue = hexValue.replace("#", "");
  
    const response = await fetch(
      `https://www.thecolorapi.com/id?hex=${cleanHexValue}`
    );
    const data = await response.json();
    return data.name.value;
  }
  
  async function handleEditTheme(editedTheme, id) {
    console.log("you want to edit a theme with id" +id + "  themeObject : " , editedTheme);
    const colorNamePromises = editedTheme.colors.map(async (color) => {
      const name = await getColorName(color.value);

      return {
        ...color,
        name,
      };
    });

    const colorsWhitNames = await Promise.all(colorNamePromises);

    setThemes(
      themes.map((theme) => {
        if (theme.id !== id) {
          return theme;
        }

        return {
          id,
          name: editedTheme.name,
          colors: colorsWhitNames,
        };
      })
    );
  
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
