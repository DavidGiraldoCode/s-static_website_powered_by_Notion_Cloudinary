import { useRef, useEffect, useState } from "react";
import "../global-style.css";
import "./Heading3.css";

export default function Heading3(props) {
    // Reference to the h3 element to measure its height
    const h3Ref = useRef(null);
    
    // State to track if the heading spans multiple lines
    const [isMultiLine, setIsMultiLine] = useState(false);

    useEffect(() => {
        // Function to check if h3 has multiple lines
        const checkMultiLine = () => {
            if (h3Ref.current) {
                // Get the line-height from computed styles
                const computedStyle = window.getComputedStyle(h3Ref.current);
                const lineHeight = parseFloat(computedStyle.lineHeight);
                
                // Get the actual height of the h3 element
                const actualHeight = h3Ref.current.offsetHeight;
                
                // If actual height is greater than one line height,
                // it means the text wraps to multiple lines
                // We add a small tolerance (5px) to account for rounding
                setIsMultiLine(actualHeight > lineHeight + 5);
            }
        };

        // Check on mount
        checkMultiLine();

        // Also check when window resizes (text might wrap differently)
        window.addEventListener('resize', checkMultiLine);

        // Cleanup event listener on unmount
        return () => window.removeEventListener('resize', checkMultiLine);
    }, [props.text]); // Re-run when text changes

    return (
        <div className="heading_3 container m-top-m m-bottom-s">
            {/* Conditionally apply 'no-border' class if multi-line */}
            <div className={`text_column m-bottom-s ${isMultiLine ? 'no-border' : ''}`}>
                {/* Add ref to measure the h3 element */}
                <h3 className="m-bottom-s" ref={h3Ref}>
                    {props.text}
                </h3>
            </div>
        </div>
    )
};