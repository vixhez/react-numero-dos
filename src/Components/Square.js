const Square = ({ selected, handleClick }) => (
    <div
        style={{ height: 200,
                width: 200,
                backgroundColor: selected ? "blue" : "hotpink",
                }}
        onClick={ handleClick }>
                    Square!
                </div>
);

export default Square;