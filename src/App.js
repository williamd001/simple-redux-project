import React from 'react';
import './styles/App.css';
import Note from "./components/Note";
import CreateNoteForm from "./components/CreateNoteForm";
import {useSelector} from "react-redux";

function App() {

    let notes = useSelector(state => state.notes);

    return (
        <div className="container mx-auto">
            <CreateNoteForm/>
            <div className="grid grid-cols-1 lg:grid-cols-3 mt-4">
                {notes.map((note, index) => <Note key={index} title={note.title} body={note.body}/>)}
            </div>
        </div>
    );
}

export default App;
