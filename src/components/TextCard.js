import React from "react";

function IsTitleCard({title}) {
    if (!title) {return null;}
    
    return (
    <div className="card-header">
        <h2 className="card-title text-center">
            {title}
        </h2>
    </div>);
}

function TextCard({title, textBody}) {

    return (
    <div className="card my-3 mx-auto">
        
        <IsTitleCard title={title} />

        <div className="card-body">
            <p className="card-text">
                {textBody}
            </p>
        </div>
    </div>);
}

export default TextCard;