import { useState, useEffect } from "react";
import "../global-style.css";
import "./Image.css";
import useFadeInOnScroll from "../hooks/useFadeInOnScroll";

export default function Image(props) {
    const MOBILE_VIEWPORT_SIZE = 768;
    // Extract image size from filename
    const urlArray = props.url.split('/'); // Trim the url [.., "800_overview_gg9ehj.png"]
    const imageSize = Number.parseInt(urlArray[urlArray.length-1].split('_')[0]); // Trim the image name ["800", "overview", ...]
    
    // State to track if viewport is mobile size
    const [isMobile, setIsMobile] = useState(false);
    
    /**
     * CUSTOM HOOK USAGE
     * 
     * ONE LINE replaces all the Intersection Observer setup!
     * 
     * Returns:
     * - ref: Attach to <img> element
     * - isVisible: true when image enters viewport
     * 
     * Options (all optional):
     * - threshold: 0.1 = trigger when 10% visible
     * - rootMargin: '0px' = no offset
     * - triggerOnce: true = only observe once
     */
    const { ref: imageRef, isVisible } = useFadeInOnScroll({
        threshold: 0.25,      // Trigger when 10% of image is visible
        rootMargin: '0px',   // No offset (could be '100px' to trigger early)
        triggerOnce: true    // Stop observing after first trigger
    });

    useEffect(() => {
        // Function to check viewport width
        const checkViewportSize = () => {
            // Set isMobile to true if viewport width is less than 768px
            setIsMobile(window.innerWidth < MOBILE_VIEWPORT_SIZE);
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
                <img 
                    ref={imageRef}
                    className={`image-fade ${isVisible ? 'image-visible' : ''}`}
                    style={sizeConfig} 
                    src={props.url} 
                />
            </div>
        </div>
    )
};

/**
 * EXAMPLE: Using the hook in OTHER components
 * 
 * // Fade in a heading
 * function Heading() {
 *   const { ref, isVisible } = useFadeInOnScroll({ threshold: 0.3 });
 *   return (
 *     <h1 ref={ref} className={`fade ${isVisible ? 'visible' : ''}`}>
 *       Hello World
 *     </h1>
 *   );
 * }
 * 
 * // Fade in with early trigger (100px before viewport)
 * function Card() {
 *   const { ref, isVisible } = useFadeInOnScroll({ 
 *     rootMargin: '100px',
 *     threshold: 0.2 
 *   });
 *   return <div ref={ref} className={isVisible ? 'visible' : ''}>Card</div>;
 * }
 * 
 * // Continuous fade-in/out (not just once)
 * function AnimatedElement() {
 *   const { ref, isVisible } = useFadeInOnScroll({ triggerOnce: false });
 *   return (
 *     <div ref={ref} className={isVisible ? 'fade-in' : 'fade-out'}>
 *       I fade in and out!
 *     </div>
 *   );
 * }
 */