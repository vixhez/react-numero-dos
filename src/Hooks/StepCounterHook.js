import { useState } from 'react';

const StepCounterHook = ({ max, step }) => {
    const [number, setNumber] = useState(0);

    const reduceNumber = () => setNumber(number === 0 ? number - 0 : number - step);
    const increaseNumber = () => setNumber(number >= max ? number + 0 : number + step);

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

export default StepCounterHook;