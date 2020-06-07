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

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3">
            { notes.map((note, index) => <Note key={index} title={note.title} content={note.content}/>) }
        </div>
    );
}

export default App;
