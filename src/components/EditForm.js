import "./EditForm.css";

export default function EditForm({ onSubmit, theme, id, toggleEdit}) {
  const themeToEdit = theme;

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    const editedTheme = {
      name: data.name,
      colors: [
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
          role: "surfac-eon",
          value: data["surface-on"],
        },
      ],
    };
    console.log(editedTheme);
    onSubmit(editedTheme, id);
    toggleEdit();

  }

  return (
    <form className="edit-form__add-themes" onSubmit={handleSubmit}>
      {" "}
      <h2>Edit theme here</h2>
      <label htmlFor="name"> Edit theme name</label>
      <input
        type="text"
        name="name"
        id="name"
        placeholder={themeToEdit.name}
        required
      ></input>
      <fieldset className="edit-form__color-fields">
        {themeToEdit.colors.map((color) => (
          <input
            key={color.role}
            className="edit-form__color-input"
            type="color"
            name={color.role}
            aria-label={color.role}
            defaultValue={color.value}
          />
        ))}
      </fieldset>
      <button type="submit" className="edit-form__submit-button">
        {" "}
        submit changes
      </button>
    </form>
  );
}
