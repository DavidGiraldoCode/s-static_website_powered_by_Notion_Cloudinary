import "../global-style.css";
import "./Image.css";
export default function Image(props) {
    return (
        <div className="image container">
            <div className="image_column">
                <img src={props.url} />
            </div>
        </div>
    )
};