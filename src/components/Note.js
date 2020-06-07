import React from 'react';

function Note(props) {

    let {title, content} = props;

    return (
        <div>
            <h1>{title}</h1>
            <p>{content}</p>
        </div>
    )
}

export default Note;