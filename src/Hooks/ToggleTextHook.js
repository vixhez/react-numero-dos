import { useState } from 'react';

const ToggleTextHook = ({ initial, alternate }) => {
    const [message, setMessage] = useState(1);

    const changeMessage = () => setMessage(message + 1);

    return <>
                <p>{message % 2 === 0 ? alternate : initial}</p>
                <button
                    onClick={ changeMessage }>Toggle</button>
            </>
}

export default ToggleTextHook;