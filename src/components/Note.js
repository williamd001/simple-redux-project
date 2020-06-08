import React from 'react';

function Note(props) {

    let {title, body} = props;

    return (
        <div className="bg-yellow-400 m-2 p-4">
            <h1 className="text-2xl font-bold">{title}</h1>
            <p>{body}</p>
        </div>
    )
}

export default Note;