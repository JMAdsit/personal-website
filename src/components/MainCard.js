import React from "react";

function MainCard({title, body}) {
    return (
    <div className="card rounded border border-primary my-3 mx-auto">
        
        <div className="card-header">
            <h2 className="card-title text-center">
                {title}
            </h2>
        </div>

        <div className="card-body">
            
            <p className="card-text">
                {body}
            </p>
        </div>
    </div>);
}

export default MainCard;