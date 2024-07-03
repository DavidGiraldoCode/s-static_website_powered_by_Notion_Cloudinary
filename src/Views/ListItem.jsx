import "../global-style.css";
//import "./Heading1.css";
export default function ListItem(props) {
    return (
        <div className="list_item container m-top-s m-bottom-s">
            <div className="text_column">
                <li>
                    {props.text}
                </li>
            </div>
        </div>
    )
};