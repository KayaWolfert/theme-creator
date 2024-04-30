import "./TryTheme.css"

export default function TryTheme({theme}){
    const surfaceOn = theme.colors[3].value;
    const white = "#ffffff"
    
    return (
        <article className="trytheme__article" style={{backgroundColor : theme.colors[2].value}}>
            <h2 className="trytheme__headline" style={{color : theme.colors[0].value}}> {theme.name} </h2>
            <p className="trytheme__paragraph"style={{color : surfaceOn}}>  a Paragraph to show what the color themes look like, in case you would pick them.
                Lorem Ipsum Blabla noch ein bisschen Text
            </p>
            <p className="trytheme__highlight-box" style={{backgroundColor : theme.colors[1].value, color: surfaceOn}} > 
            Text in the highlight box has another backgroundColor than the rest. I will write a second sentence here</p>
            <div className="trytheme__button-container">
            <button className="trytheme__button" style={{backgroundColor : theme.colors[0].value, color: surfaceOn}}>primary</button>
            <button className="trytheme__button" style={{backgroundColor : theme.colors[1].value, color: surfaceOn}}>secondary</button>
            <button className="trytheme__button" style={{backgroundColor : theme.colors[2].value, color: surfaceOn}}>surface</button>
            <button className="trytheme__button" style={{backgroundColor : white, color: surfaceOn}}>surface-on</button>
            </div>
        </article>
    )
}