import React from "react";
import TextCard from "../components/TextCard";

/**
 * Defines the "Not Found" page that is displayed for any unmatched route.
 *
 * @returns {JSX.Element}
 */
function NotFound() {
    let title = "Page Not Found";
    let body = "";
  
    return (
        <div className="NotFound content d-flex flex-column justify-content-center">
            <TextCard 
                title={title}
                body={body}    
            />
        </div>
    );
}

export default NotFound;