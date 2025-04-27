import { useRef } from "react";
import { useState } from "react";

export default function Timer(){
    const [start, setStart] = useState(0);
    const [now, setNow] = useState(0);

    // useReff digunakan jika ada data yamg ingin di simpan namun tidak ingin di render ulang
    const timer = useRef(null);

    function handleStart(){
        setStart(Date.now());
        setNow(Date.now());
        
        timer.current = setInterval(() => {
            setNow(Date.now());
        }, 10);
    }

    function handleStop(){
        clearInterval(timer.current);
    }


    return(
        <>
            <h1>Timer : {now - start} ms</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </>
    )
}