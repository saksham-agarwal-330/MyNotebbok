import React, { useContext, useState } from 'react'
import NoteContext from '../context/notes/NoteContext'

const AddNote = () => {
    const context = useContext(NoteContext);
    const { addNote } = context;

    const [note, setNote] = useState({ title: "", desc: "", tag: "" });

    const handleClick = (e) => {
        e.preventDefault();
        addNote(note.title, note.desc, note.tag);  // Pass individual values
        setNote({ title: "", desc: "", tag: "" });  // Clear the form after submission
    };

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value });
    }

    return (
        <div>
            <form onSubmit={handleClick}>
                <div className="form-floating mb-3">
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        name="title"
                        placeholder="Title"
                        value={note.title}
                        onChange={onChange}
                    />
                    <label htmlFor="title">Title</label>
                </div>
                <div className="form-floating mb-3">
                    <input
                        type="text"
                        className="form-control"
                        id="desc"
                        name="desc"
                        placeholder="Description"
                        value={note.desc}
                        onChange={onChange}
                    />
                    <label htmlFor="desc">Description</label>
                </div>
                <div className="form-floating mb-3">
                    <input
                        type="text"
                        className="form-control"
                        id="tag"
                        name="tag"
                        placeholder="Tag"
                        value={note.tag}
                        onChange={onChange}
                    />
                    <label htmlFor="tag">Tag</label>
                </div>
                <button type="submit" className="btn btn-primary">Add Note</button>
            </form>
        </div>
    );
}

export default AddNote;
