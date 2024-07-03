import "../global-style.css";
import "./Heading1.css";
export default function Heading1(props) {
    return (
        <div className="heading_1 container m-top-l m-bottom-l">
            <div className="text_column">
                <h1>
                    {props.text}
                </h1>
            </div>
        </div>
    )
};