import React from 'react';

function CreateNoteForm() {


    return (
            <form className="w-full max-w-md mx-auto shadow mt-4 p-6">

                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                    Title
                </label>

                <input type="text" name="title" id="title"
                       className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
                />

                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="note">
                    note body
                </label>

                <textarea name="body" id="note"
                       className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
                          rows="5"

                />

                <input type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"/>
            </form>
    );
}

export default CreateNoteForm;