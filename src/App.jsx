import { React, useState, useReducer } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

// Define initial state of app
const initialState = {
    // Default background
    backgroundColor: 'white',
    // Button clicks
    count: 0,
};

// Parameters state and action
// State is current state of app; Action is how to update the state
// The reducer function receives the current state and dispatched action as arguments
const reducer = (state, action) => {
    // Switch determines ow to update based on action.type - a string
    // If string is 'CHANGE_COLOR', return new state
    switch (action.type) {
        case 'CHANGE_COLOR':
            return {
                ...state,
                // The backgroundColor property is updated
                // with the value of new color to be set.
                backgroundColor: action.payload,
                // Button has been clicked
                count: state.count + 1,
            };
        default:
            // Return current state if no match
            return state;
    }
};

const App = () => {
    // Initialize state, get dispatch function
    // useReducer takes two arguments: reducer function, initialState
    // It returns and we destructure an array to assign state and dispatch
    const [state, dispatch] = useReducer(reducer, initialState);

    // Define colors
    const colors = ['red', 'blue', 'green', 'purple'];

    // Button function
    const handleColorChange = () => {
        // Choose random color
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        // The dispatch function sends the action object to the reducer function
        dispatch({ type: 'CHANGE_COLOR', payload: randomColor });
    };

    return (
        <div
            // Set background to the current value of state.backgroundColor
            style={{ backgroundColor: state.backgroundColor, height: '100vh' }}
        >
            <h1>Color Switch</h1>
            {/* Display clicks */}
            <p>Button clicked: {state.count} times</p>
            <button onClick={handleColorChange}>Change Color</button>
        </div>
    );
};

export default App;
