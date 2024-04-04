import {useState} from "react";

export function FAddComponent(props) {
    const [number, setNumber] = useState(0)
    const tang = () => setNumber(number + 1)
    const giam = () => setNumber(number - 1)

    return(
        <>
            <button onClick={tang}>TANG</button>
            <h2>COUNT: {number}</h2>
            <button onClick={giam}>GIAM</button>
        </>
    )
}