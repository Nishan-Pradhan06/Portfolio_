import { useState, useEffect } from "react";

const YourComponent = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        // Event listener for scrolling
        const handleScroll = () => {
            // Set showButton to true when scrolled down, false when at the top
            setShowButton(window.scrollY > 0);
        };

        // Add event listener when the component mounts
        window.addEventListener("scroll", handleScroll);

        // Remove event listener when the component unmounts
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []); // Empty dependency array ensures the effect runs only once

    const scrollToTop = () => {
        // Scroll to the top of the page
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div>
            {/* Your website content goes here */}

            {/* "Back to Top" button */}
            {showButton && (
                <button
                    className="fixed bottom-5 right-5 bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-blue-600"
                    onClick={scrollToTop}
                >
                    Back to Top
                </button>
            )}
        </div>
    );
};

export default YourComponent;
