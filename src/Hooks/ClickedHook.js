import { useState } from 'react';

const ClickedHook = () => {
    const [clicks, setClicks] = useState(0);

    const updateClicks = () => setClicks(clicks + 1);

return <p onClick={ updateClicks }>{ clicks }</p>
}

export default ClickedHook;