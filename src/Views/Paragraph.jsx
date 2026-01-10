import "../global-style.css";
import "./Paragraph.css"
//import "./Heading1.css";
export default function Paragraph(props) {
    return (
        <div className="paragraph container m-bottom-m">
            <div className="text_column">
                <div className="justify-block">
                    <p className="">
                        {props.text}
                    </p>
                </div>
            </div>
        </div>
    )
};