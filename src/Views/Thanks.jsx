import "../global-style.css";
//import "./Thanks.css";
export default function Thanks(props) {
    return (
        <div className="heading_3 container m-top-m m-bottom-s">
            <div className="text_column row">
                {/* <h1 className="callout_h1">
                    {props.message}
                    </h1>  */}
                <p className="p-small">Utvecklad i Stockholm av en colombian</p>
                <p className="p-small">© 2025 David Giraldo</p>
            </div>
        </div>
    )
};