const Square = ({ selected, handleClick, colour }) => (
    <div
        style={{ height: 200,
                width: 200,
                backgroundColor: selected ? "blue" : colour,
                }}
        onClick={ handleClick }>
                    Square!
                </div>
);

export default Square;