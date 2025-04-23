import { useState } from "react"

export default function Kalkulator()
{

    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [operator, setOperator] = useState("+");
    const [sum, setSum] = useState(0);

    function handleNumber(e, num){
        const value = parseInt(e.target.value);
        if(num == 1){
            setNum1(value)
        }else{
            setNum2(value)
        }
    }

    function handleChangeOperator(e){
        setOperator(e.target.value);
    }

    function handleClick(){
        setNum1(0);
        setNum2(0);
        setOperator("");

        let sum = 0;
        if(operator == "+"){
            sum = num1 + num2;
        }else if(operator == "*"){
            sum = num1 * num2;
        }else if(operator == "-"){
            sum = num1 - num2;
        }else if(operator == "/"){
            sum = num1 / num2;
        }
        setSum(sum);
    }

    return(
        <>
            <h1>Kalkulator</h1>
            <input type="number" style={
                {
                    width: "50px",
                    marginRight: "10px",
                    backgroundColor: "yellow"

                }
            } value={num1} onChange={(e) => handleNumber(e, 1)} />
            <select onChange={handleChangeOperator}>
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="*">X</option>
                <option value="/">/</option>
            </select>
            <input type="number" value={num2} onChange={(e) => handleNumber(e, 2)}/>
            <button onClick={handleClick}>=</button>
            <input type="number" value={sum} readOnly/>
        </>
    )
}