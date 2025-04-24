import { useImmerReducer } from "use-immer";
import NoteForm from "./NoteForm";
import NoteList from "./NoteList";

    // Reducer
function notesReducer(notes, action){
    if (action.type == "ADD_NOTE") {
        notes.push({
            id: id++,
            text: action.text,
            done: false
        })
    }else if(action.type === "CHANGE_NOTE"){
        const index = notes.findIndex(note => note.id === action.id)
        notes[index] = {...notes[index], text: action.text, done: action.done};

    }else if(action.type === "DELETE_NOTE"){
        const index = notes.findIndex(note => note.id === action.id)
        notes.splice(index, 1);
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
    const [notes, dispatch] = useImmerReducer(notesReducer, initialNotes);

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