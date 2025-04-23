import { useState } from "react";
import NoteForm from "./NoteForm";
import NoteList from "./NoteList";

export default function NoteApp()
{
    let id = 0;
    let initialNotes = [
        {id: id++, text: 'Belajar React', done: true},
        {id: id++, text: 'Belajar HTML', done: false},
        {id: id++, text: 'Belajar NODE', done: false},
    ]

    const [notes, setNotes] = useState(initialNotes);

    function handleAddNote(val){
        const newNote = {id: id++, text: val, done: false}
        setNotes([...notes, newNote])
    }

    function handleChangeNote(note){
        setNotes(draft =>{
                return draft.map(item => item.id === note.id ? note : item);
            }
        );
    }

    function handleDelete(note){
        setNotes(draft =>
            draft.filter(item => item.id !== note.id)
        );
    }


    return(
        <>
            <h1>Note App</h1>
            <NoteForm onAddButton={handleAddNote} />
            <NoteList notes={notes} onChange={handleChangeNote} onDelete={handleDelete} />
        </>
    )
}