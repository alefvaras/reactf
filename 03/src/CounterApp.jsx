import { useState } from 'react'
import PropTypes from 'prop-types';
export const CounterApp = ({ value }) => {
    const [counter, setCounter] = useState(value);

 
    const handleAdd = () => {
        // setCounter(counter+1) 
        //c es el valor actual del counter, cuando desconocemos cual es
        setCounter((c) => c + 1)

    };
    const handleRest = () => {
        setCounter(counter - 1)

    };

    const reset = () => {
        setCounter(value);
        //setCounter((c) => c = value)


    };
    

    return (

        <>
            <h1>CounterApp</h1>
            <h2>{counter}</h2>
              {/* <button onClick={(event)=>handleAdd(event)}>+1</button> */}
            <button onClick={handleAdd}>+1</button>
            <button onClick={handleRest}>-1</button>
            <button aria-label="btn-reset" onClick={reset}>Reset</button>

        </>
    );
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

