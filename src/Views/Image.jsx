import { useState, useEffect } from "react";
import "../global-style.css";
import "./Image.css";

export default function Image(props) {
    // Extract image size from filename
    const urlArray = props.url.split('/'); // Trim the url [.., "800_overview_gg9ehj.png"]
    const imageSize = Number.parseInt(urlArray[urlArray.length-1].split('_')[0]); // Trim the image name ["800", "overview", ...]
    
    // State to track if viewport is mobile size
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Function to check viewport width
        const checkViewportSize = () => {
            // Set isMobile to true if viewport width is less than 768px
            setIsMobile(window.innerWidth < 768);
        };

        // Check on mount (initial render)
        checkViewportSize();

        // Add resize event listener to check when window is resized
        window.addEventListener('resize', checkViewportSize);

        // Cleanup: remove event listener when component unmounts
        return () => window.removeEventListener('resize', checkViewportSize);
    }, []); // Empty dependency array means this runs once on mount

    // Calculate width based on viewport size
    // If mobile (< 768px), use half the image size, otherwise use full size
    const sizeConfig = {
        width: isMobile ? `${imageSize / 2}px` : `${imageSize}px`
    };

    console.log(`Image size: ${imageSize}, Is mobile: ${isMobile}, Applied width: ${sizeConfig.width}`);
    
    return (
        <div className="image container m-top-s m-bottom-m">
            <div className="image_column container">
                <img style={sizeConfig} src={props.url} />
            </div>
        </div>
    )
};