import { useState } from 'react';

const SquareHook = ({ colour }) => {
    const [green, changeColour] = useState(1);

    const updateColour = () => changeColour(green + 1);

   return <div
            onClick={ updateColour }
            style={{ height: 200,
                    width: 200,
                    background: green % 2 === 0 ? colour : "green" }}>
                <p>
                        I am a circle
                </p>
            </div> 
}

export default SquareHook;