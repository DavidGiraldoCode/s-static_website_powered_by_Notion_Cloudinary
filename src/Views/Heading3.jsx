import "../global-style.css";
//import "./Heading1.css";
export default function Heading3(props) {
    return (
        <div className="heading_3 container m-top-m m-bottom-s">
            <div className="text_column">
                <h3>
                    {props.text}
                </h3>
            </div>
        </div>
    )
};