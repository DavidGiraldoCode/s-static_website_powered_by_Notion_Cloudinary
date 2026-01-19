import { useState, useEffect, useRef } from 'react';

/**
 * Custom Hook: useFadeInOnScroll
 * 
 * PURPOSE:
 * Detects when an element enters the viewport and triggers a visibility state
 * Enables scroll-triggered animations without repetitive code
 * 
 * RETURNS:
 * - ref: Attach to the element you want to observe
 * - isVisible: Boolean state (true when element enters viewport)
 * 
 * USAGE EXAMPLE:
 * const { ref, isVisible } = useFadeInOnScroll();
 * <img ref={ref} className={isVisible ? 'visible' : ''} />
 * 
 * @param {Object} options - Configuration options
 * @param {number} options.threshold - % of element visible before trigger (0-1)
 * @param {string} options.rootMargin - Offset before trigger ('100px', '-50px')
 * @param {boolean} options.triggerOnce - Stop observing after first trigger
 * @returns {Object} - { ref, isVisible }
 */
function useFadeInOnScroll({
  threshold = 0.1,      // Trigger when 10% visible
  rootMargin = '0px',   // No offset
  triggerOnce = true    // Observe only once by default
} = {}) {
  
  /**
   * STATE: Tracks visibility
   * 
   * Starts false (element not yet visible)
   * Becomes true when element enters viewport
   * Stays true if triggerOnce=true
   */
  const [isVisible, setIsVisible] = useState(false);
  
  /**
   * REF: Reference to the DOM element
   * 
   * This will be attached to the element you want to observe
   * useRef persists across re-renders without causing them
   */
  const elementRef = useRef(null);

  useEffect(() => {
    /**
     * GUARD CLAUSE: Prevent errors if ref not attached
     * 
     * Early return if no element to observe
     * Happens when component unmounts before ref is set
     */
    if (!elementRef.current) return;

    /**
     * INTERSECTION OBSERVER CONFIGURATION
     * 
     * Uses options passed to hook (with defaults)
     * Allows consumers to customize behavior per component
     */
    const observerOptions = {
      root: null,           // Viewport as reference
      rootMargin,           // Use passed rootMargin
      threshold             // Use passed threshold
    };

    /**
     * CALLBACK: What happens when intersection changes
     * 
     * @param {IntersectionObserverEntry[]} entries
     * 
     * LOGIC:
     * 1. Check if element is intersecting (entering viewport)
     * 2. Update visibility state
     * 3. Optionally stop observing (if triggerOnce=true)
     */
    const observerCallback = (entries) => {
      const [entry] = entries; // Get first (and only) entry
      
      if (entry.isIntersecting) {
        setIsVisible(true);
        
        /**
         * CONDITIONAL CLEANUP
         * 
         * If triggerOnce=true (default):
         *   - Stop observing after first trigger
         *   - Saves resources, prevents re-triggers
         * 
         * If triggerOnce=false:
         *   - Keep observing
         *   - Allows fade-in/fade-out on scroll
         */
        if (triggerOnce && observer) {
          observer.unobserve(entry.target);
        }
      } else {
        /**
         * FADE-OUT SUPPORT
         * 
         * Only runs if triggerOnce=false
         * Allows element to fade out when leaving viewport
         * 
         * Use case: Elements that animate in AND out
         */
        if (!triggerOnce) {
          setIsVisible(false);
        }
      }
    };

    // Create observer instance
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Start observing the element
    observer.observe(elementRef.current);

    /**
     * CLEANUP FUNCTION
     * 
     * Runs when:
     * - Component unmounts
     * - Dependencies change (threshold, rootMargin, triggerOnce)
     * 
     * CRITICAL: Always disconnect observers to prevent memory leaks
     */
    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [threshold, rootMargin, triggerOnce]); // Re-run if options change

  /**
   * RETURN VALUES
   * 
   * ref: Consumer attaches to their element
   * isVisible: Consumer uses for conditional styling/rendering
   */
  return { 
    ref: elementRef, 
    isVisible 
  };
}

export default useFadeInOnScroll;