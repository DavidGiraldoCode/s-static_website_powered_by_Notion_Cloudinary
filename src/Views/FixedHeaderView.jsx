import "../global-style.css";
import "./FixedHeaderView.css";
export default function FixedHeaderView(props) {
    return (
        <div className="fixed_header_view">
            <div className="header_top fixed_header_row">
                <p className="p-small">David | Produt development & Design</p>
                <p className="p-small">{props.projectName}</p>
            </div>
            <div className="header_bottom fixed_header_row">
                <p className="p-small">Portfolio</p>
                <p className="p-small">2024</p>
            </div>
        </div>
    )
}