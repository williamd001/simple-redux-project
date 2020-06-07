import React from 'react';
import './styles/App.css';
import Note from "./components/Note";


function App() {

    let notes = [
        {
            'title': 'a title',
            'content': 'some content,'
        },
        {
            'title': 'another title',
            'content': 'some more content',
        },
    ];

    return notes.map((note, index) => {
        return <Note key={index} title={note.title} content={note.content}/>;
    });
}

export default App;
