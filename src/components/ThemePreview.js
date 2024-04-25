import "./ThemePreview.css";

export default function ThemePreview({ theme }) {
  return (
    
      <article className="theme-preview__article">
        {theme.colors.map((color) => {
          return (
            <div key={color.role}
              className="theme-preview__color-preview"
              style={{ backgroundColor: color.value }}
            >
              
            </div>
          );
        })}
      </article>
    
  );
}
