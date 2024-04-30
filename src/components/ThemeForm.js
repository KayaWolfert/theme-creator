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
                value: data["surface-on"],
              },]}

              onSubmit(newTheme);
    
  
  }

  

  return (
    <form className="theme-form__add-themes" onSubmit={handleSubmit}>
      <h2> Add new Themes</h2>
        <fieldset className="theme-form__color-fields">
        <input
          className="theme-form__color-input"
          type="color"
          name="primary"
          id="primary"
          defaultValue="#3c868b"
        ></input>
        <input
          className="theme-form__color-input"
          type="color"
          name="secondary"
          id="secondary"
          defaultValue="#95f0f6"
        ></input>
        <input
          className="theme-form__color-input"
          type="color"
          name="surface"
          id="surface"
          defaultValue="#d9d4c1"
        ></input>
        <input
          className="theme-form__color-input"
          type="color"
          name="surface-on"
          id="surface-on"
          defaultValue="#000000"
        ></input>
      </fieldset>
      <div class="theme-form__part-wrapper">
      <label className="theme-form__label-name" htmlFor="name"> Theme Name:</label>
      <input className="theme-form__name-input" type="text" name="name" id="name" required></input>
      <button className="form-submit-button" type="submit">
        
        add your Theme
      </button>
      </div>
      
    </form>
  );
}
