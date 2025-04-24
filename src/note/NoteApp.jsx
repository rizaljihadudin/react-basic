import NoteForm from "./NoteForm";
import NoteList from "./NoteList";
import { useReducer } from "react";

    // Reducer
function notesReducer(notes, action){
    switch (action.type) {
        case "ADD_NOTE":
            return [
                ...notes,
                {
                    id: id++,
                    text: action.text,
                    done: false
                }
            ];
        case "CHANGE_NOTE":
            return notes.map(note => 
                note.id == action.id ? {...note, text: action.text, done: action.done} : note
            );
        case "DELETE_NOTE":
            return notes.filter(note => note.id !== action.id);
        default :
            return notes;
    }
}

let id = 0;
let initialNotes = [
    {id: id++, text: 'Belajar React', done: true},
    {id: id++, text: 'Belajar HTML', done: false},
    {id: id++, text: 'Belajar NODE', done: false},
]

export default function NoteApp()
{
    const [notes, dispatch] = useReducer(notesReducer, initialNotes);

    function handleAddNote(text){
        dispatch({
            type: "ADD_NOTE",
            text:text
        });
    }

    function handleChangeNote(note){
        dispatch({
            type: "CHANGE_NOTE",
            ...note
        });
    }

    function handleDelete(note){
        dispatch({
            type: "DELETE_NOTE",
            id:note.id
        });
    }


    return(
        <>
            <h1>Note App</h1>
            <NoteForm onAddButton={handleAddNote} />
            <NoteList notes={notes} onChange={handleChangeNote} onDelete={handleDelete} />
        </>
    )
}