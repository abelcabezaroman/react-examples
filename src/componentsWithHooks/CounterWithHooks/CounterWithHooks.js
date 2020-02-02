import React, { useState } from 'react';
import './CounterWithHooks.scss';

export const CounterWithHooks = function (props) {
    const [count, setCount] = useState(props.initialValue);

    return (
        <div className="b-counter-with-hooks">
            <p>Contador {count}</p>
            <button className="b-counter-with-hooks__button" onClick={() => setCount(count + 1)}>+</button>
            <button className="b-counter-with-hooks__button" onClick={() => setCount(count - 1)}>-</button>
        </div>
    )
};

