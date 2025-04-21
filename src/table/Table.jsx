import Row from './Row.jsx'

export default function Table() {
    let counter = 1;
    return (
        <table border='1'>
            <tbody>
                <Row num={counter++} text="Satu"/>
                <Row num={counter++} text="Dua"/>
                <Row num={counter++} text="Tiga"/>
            </tbody>
        </table>
    )
}

