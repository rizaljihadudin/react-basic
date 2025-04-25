import { useContext } from "react";
import Note from "./Note";
import { NotesContext, NotesDispatchContext } from "./NoteContext";

export default function NoteList() {

    const notes = useContext(NotesContext);

    return(
        <>
            <ul>
                {notes.map(note => 
                    <li key={note.id}>
                        <Note note={note}/>
                    </li>
                )}
            </ul>
        </>
    ) 

}