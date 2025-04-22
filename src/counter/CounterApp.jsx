import { useState } from "react";
import Counter from "./Counter";

export default function CounterApp(){
    const [show2, setShow] = useState(true);

    console.log(show2);

    function handleChange(e){
        setShow(e.target.checked);
    }

    return(
        <>
            <Counter/>
            {show2 && <Counter/>}
            <div>
                <input type="checkbox" checked={show2} onChange={handleChange}/> Tampilkan Counter 2
            </div>
        </>
    )
}