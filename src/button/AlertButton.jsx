import { useRef } from "react"

export default function AlertButton({text, msg}){
    const counter = useRef(0);

    function handleClick(){
        console.log(`${msg} ${counter.current++}`)
    }

    return(
        <button onClick={handleClick}>{text}</button>
    )
    
}