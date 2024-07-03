import "../global-style.css";
import "./ListItem.css";

export default function ListItem(props) {
    return (
        <div className="list_item container m-top-s m-bottom-s">
            <div className="text_column">
                <div className="bullet_point_row">
                    <div className="bullet_point">
                        <svg width="8" height="8" viewBox="0 0 8 8" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="4" cy="4" r="4" fill="black" />
                        </svg>
                    </div>
                    <p>{props.text}</p>
                </div>

            </div>
        </div>
    )
};