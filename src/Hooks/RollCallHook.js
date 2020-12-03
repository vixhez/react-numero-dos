import { useState } from 'react';

const RollCallHook = ({ names }) => {
    const [name, setName] = useState(0);

    const changeName = () => setName(name === names.length - 1 ? 0 : name + 1);

    return <>
            <p>{ names[name] }</p>
            <button
                onClick={ changeName }>
                    Next
                </button>
        </>

}

export default RollCallHook;