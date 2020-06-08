import React, {useState} from 'react';
import {useDispatch} from "react-redux";

function CreateNoteForm() {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const dispatch = useDispatch();

    function handleSubmit(event) {
        event.preventDefault();

        dispatch(
            {
                'type': 'ADD_NOTE',
                'title': title,
                'body': body,
            }
        );

        setTitle('');
        setBody('');
    }

    return (
        <form className="w-full max-w-md mx-auto shadow mt-4 p-6" onSubmit={handleSubmit}>

            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                Title
            </label>

            <input type="text" name="title" id="title"
                   onChange={event => setTitle(event.target.value)}
                   value={title}
                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
            />

            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="note">
                Note body
            </label>

            <textarea name="body" id="note"
                      onChange={event => setBody(event.target.value)}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
                      rows="5"
                      value={body}
            />

            <input type="submit"
                   className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"/>
        </form>
    );
}

export default CreateNoteForm;