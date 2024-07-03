import "../global-style.css";
import "./Callout.css";
export default function Callout(props) {
    return (
        <div className="callout container">
            <div className="text_column">
                <h1 className="callout_h1">
                    {props.text}
                </h1>
            </div>
        </div>
    )
};