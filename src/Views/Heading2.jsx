import "../global-style.css";
//import "./Heading1.css";
export default function Heading2(props) {
    return (
        <div className="heading_2 container m-top-l m-bottom-m">
            <div className="text_column">
                <h2>
                    {props.text}
                </h2>
            </div>
        </div>
    )
};