import { useContext } from "react";
import Note from "./Note";
import { NotesContext, NotesDispatchContext } from "./NoteContext";
import { useState } from "react";
import { useRef } from "react";
import { useMemo } from "react";

export default function NoteList() {

    const notes = useContext(NotesContext);
    const [search, setSearch] = useState('');
    const searchInput = useRef(null);

    const filteredNotes = useMemo(() =>{
        return notes.filter(note => note.text.toLowerCase().includes(search.toLowerCase()));
    }, [notes, search]);

    function handleSearch(){
        setSearch(searchInput.current.value);
    }

    return(
        <div>
            <input ref={searchInput} type="text" placeholder="Search" />
            <button onClick={handleSearch}>Search</button>
            <ul>
                {filteredNotes.map(note => 
                    <li key={note.id}>
                        <Note note={note}/>
                    </li>
                )}
            </ul>
        </div>
    ) 

}