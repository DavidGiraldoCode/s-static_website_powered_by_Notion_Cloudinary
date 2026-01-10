import { useEffect, useState } from "react";
import "../global-style.css";
import "./FixedHeaderView.css";
export default function FixedHeaderView(props) {

    // State for style configuration
    const [styleConfig, setStyleConfig] = useState({
        backgroundColor: "transparent"
    });
    const [pColor, setPColor] = useState("var(--grey-3)");

    // Named function to handle scroll event
    function handleScroll() {
        if (window.scrollY > 700 /*props.coverHeight*/) {
            setPColor("var(--accent-color)")
            setStyleConfig({
                ...styleConfig,
                backgroundColor: "var(--main-white)"
            });
        } else {
            setPColor("var(--grey-3)");
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

    //? How the styles get updated:
    /*
    Apply styleConfig to the main container for background color using style={styleConfig}
    Then, apply pColor to text elements, using style={{ color: pColor }}
    */
    return (
        <div className="fixed_header_view" style={styleConfig}>
            <div className="fixed_header_row">
                <div className="fixed_header_row left_header">
                    <p className="p-small" style={{ color: "var(--grey-3)" }}>Portfolio</p>
                </div> 

                <div className="fixed_header_row right_header">
                    <p>
                        <a className="p-small" style={{ color: pColor }} href="https://drive.google.com/file/d/1mIyPfHizKI9VjQAgBO859mQib68xUbZE" target="blank">
                            Resumé
                        </a>
                    </p>
                    <p>
                        <a className="p-small" style={{ color: pColor }} href="https://github.com/DavidGiraldoCode" target="blank">
                            GitHub
                        </a>
                    </p>
                    <p>
                        <a className="p-small" style={{ color: pColor }} href="https://www.linkedin.com/in/davidgiraldodesign/" target="blank">
                            LinkedIn
                        </a>
                    </p>
                </div>   
            </div>
        </div>
    )
}



/*
This code used the project name to display it on the header
{ <div className="header_top fixed_header_row" style={styleConfig}>
                <p>
                    <a className="p-small" style={{ color: pColor }} href="https://drive.google.com/file/d/1yIITMes0aEZy8TvpibfzdE9LWwR-RPX4" target="blank">
                        David | Go to Portfolio summary
                    </a>
                </p>
                <p className="p-small" style={{ color: pColor }}>{props.projectName} </p>
            </div> *}
            {/* <div className="header_bottom fixed_header_row"> }
*/