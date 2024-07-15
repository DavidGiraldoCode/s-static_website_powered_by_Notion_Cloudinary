import { useEffect, useState } from "react";
import "../global-style.css";
import "./FixedHeaderView.css";
export default function FixedHeaderView(props) {

    // State for style configuration
    const [styleConfig, setStyleConfig] = useState({
        backgroundColor: "transparent"
    });
    const [pColor, setPColor] = useState("rgba(255,255,255, 0.4)");

    // Named function to handle scroll event
    function handleScroll() {
        if (window.scrollY > 700 /*props.coverHeight*/) {
            setPColor("var(--grey-3)")
            setStyleConfig({
                ...styleConfig,
                backgroundColor: "var(--main-white)"
            });
        } else {
            setPColor("rgba(255,255,255, 0.6)");
            setStyleConfig({
                ...styleConfig,
                backgroundColor: "transparent"
            });
        }
    };

    useEffect(() => {
        // Add scroll event listener when component mounts
        window.addEventListener('scroll', handleScroll);

        // Clean up event listener when component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="fixed_header_view">
            <div className="header_top fixed_header_row" style={styleConfig}>
                <p><a className="p-small" style={{ color: pColor }} href="https://drive.google.com/file/d/1yIITMes0aEZy8TvpibfzdE9LWwR-RPX4" target="blank">
                    David | Go to Portfolio summary
                </a></p>
                <p className="p-small" style={{ color: pColor }}>{props.projectName}</p>
            </div>
            <div className="header_bottom fixed_header_row">
                <p><a className="p-small" href="https://drive.google.com/file/d/1mIyPfHizKI9VjQAgBO859mQib68xUbZE" target="blank">
                    David | Download CV.pdf
                </a></p>
                <p className="p-small">2024</p>
            </div>
        </div>
    )
}