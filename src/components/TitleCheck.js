import React from "react";

function TitleCheck({title}) {
    if (!title) {return null;}
    
    return (
    <div className="card-header">
        <h2 className="card-title text-center">
            {title}
        </h2>
    </div>);
}

export default TitleCheck;