import { useState } from "react"

export default function NoteForm({onAddButton}){
    const [text, setText] = useState("");

    function handleChange(e){
        setText(e.target.value);
    }

    function handleClick(){
        setText("");
        onAddButton(text);
    }

    return(
        <>
            <input type="text" placeholder="Add Note" value={text} onChange={handleChange}/>
            <button onClick={handleClick}>Add</button>
        </>
    )
}