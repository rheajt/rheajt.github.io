import React, { useState } from "react";

export const Counter = () => {
    const [value, setValue] = useState(0);

    const handleIncrement = () => {
        setValue(value + 1);
    };

    const handleDecrement = () => {
        setValue(value - 1);
    };
    return (
        <span style={{ color: "red" }}>
            <strong style={{ flex: `1 1` }}>{value}</strong>
            <button onClick={handleDecrement}>-1</button>
            <button onClick={handleIncrement}>+1</button>
        </span>
    );
};
export default Counter;
