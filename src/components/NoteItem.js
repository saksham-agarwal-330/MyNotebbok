import React,{useContext} from "react";
import NoteContext from "../context/notes/NoteContext";

const NoteItem = (props) => {
  const context = useContext(NoteContext);

  const { deleteNote} = context;
  const { note,updateNote } = props;
  return (
    <div className="col-md-3">
  <div className="card my-3">
    <div className="card-body">
      <h5 className="card-title">{note.title.length > 25 ? note.title.substring(0,25) : note.title}</h5>
      <p className="card-text">{note.desc.length > 80 ? note.desc.substring(0, 80) + "..." : note.desc}</p>
      <p className="card-text">{note.tag}</p>
      <i className="fa fa-trash mx-2" onClick={() => { deleteNote(note._id) }}></i>
      <i className="fa fa-pen-to-square mx-2" onClick={() => { updateNote(note) }}></i>
    </div>
  </div>
</div>

  );
};

export default NoteItem;
