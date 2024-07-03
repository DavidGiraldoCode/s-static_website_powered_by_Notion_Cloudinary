import "../global-style.css";
//import "./Heading1.css";
export default function Paragraph(props) {
    return (
        <div className="paragraph container m-bottom-m">
            <div className="text_column">
                <p>
                    {props.text}
                </p>
            </div>
        </div>
    )
};