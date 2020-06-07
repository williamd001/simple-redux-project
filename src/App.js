 import React from 'react';
import './styles/App.css';
import Note from "./components/Note";
import CreateNoteForm from "./components/CreateNoteForm";


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
        {
            'title': 'yet another title',
            'content': 'some more content',
        },
    ];

    return (
        <div className="container mx-auto">
            <CreateNoteForm/>
            <div className="grid grid-cols-1 lg:grid-cols-3 mt-4">
                {notes.map((note, index) => <Note key={index} title={note.title} content={note.content}/>)}
            </div>
        </div>
    );
}

export default App;
