import "./ColorCard.css";

export default function ColorCard ({color}){
    return (
        <> 
            <div className="color-info">
                <p className="role"> {color.role}</p>
                <p className="hex"> {color.value}</p>
            </div>
            <div className="color-show" style={{ backgroundColor: color.value }}></div>
        </>
    );
}