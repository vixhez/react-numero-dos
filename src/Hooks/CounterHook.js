import { useState } from 'react';

const CounterHook = ({ initial, max }) => {
    const [number, setNumber] = useState(initial);

    const reduceNumber = () => setNumber(number - 1);
    const increaseNumber = () => setNumber(number >= max ? number + 0 : number + 1);

return <>
        <p>{ number }</p>
        <button
            className="btn btn-primary"
            onClick={ reduceNumber }>-</button>
        <button
            className="btn btn-primary"
            onClick={ increaseNumber }>+</button>
    </>
} 

export default CounterHook;