import { useContext } from "react";
import { useState } from "react"
import { NotesDispatchContext } from "./NoteContext";

export default function NoteForm(){
    const [text, setText] = useState("");
    const dispatch =useContext(NotesDispatchContext);

    function handleChange(e){
        setText(e.target.value);
    }

    function handleClick(){
        setText("");
        dispatch({
            type: "ADD_NOTE",
            text: text
        })
    }

    return(
        <>
            <input type="text" placeholder="Add Note" value={text} onChange={handleChange}/>
            <button onClick={handleClick}>Add</button>
        </>
    )
}