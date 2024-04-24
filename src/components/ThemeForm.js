import "./ThemeForm.css";

export default function ThemeForm({onSubmit}) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    

    const newTheme = {
        name: data.name ,
        colors : [
            {
                role: "primary",
                value: data.primary,
              },

              {
                role: "secondary",
                value: data.secondary,
              },
              {
                role: "surface",
                value: data.surface,
              },
              {
                role: "surface-on",
                value: data.surfaceon,
              },]}

              onSubmit(newTheme);
    
  
  }

  

  return (
    <form className="add-themes" onSubmit={handleSubmit}>
      <h2> add new Themes here</h2>
      <label htmlFor="name"> Theme Name</label>
      <input type="text" name="name" id="name" required></input>
      <fieldset className="color-fields">
        <input
          className="color-input"
          type="color"
          name="primary"
          id="primary"
        ></input>
        <input
          className="color-input"
          type="color"
          name="secondary"
          id="secondary"
        ></input>
        <input
          className="color-input"
          type="color"
          name="surface"
          id="surface"
        ></input>
        <input
          className="color-input"
          type="color"
          name="surfaceon"
          id="surfaceon"
        ></input>
      </fieldset>
      <button className="form-submit-button" type="submit">
        
        add your Theme
      </button>
    </form>
  );
}
