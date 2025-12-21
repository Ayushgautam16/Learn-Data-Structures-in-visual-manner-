import React, { useState } from 'react';
import './ArrayVisualizer.css';

const ArrayVisualizer = () => {
    const [array, setArray] = useState([10, 20, 30, 40, 50]);
    const [inputValue, setInputValue] = useState('');
    const [indexValue, setIndexValue] = useState('');
    const [message, setMessage] = useState('Welcome! Try adding or removing elements.');
    const [highlighted, setHighlighted] = useState([]); // Array of indices to highlight
    const [highlightColor, setHighlightColor] = useState('green');

    const showMessage = (msg) => {
        setMessage(msg);
        // Clear highlights after a short delay
        setTimeout(() => {
            setHighlighted([]);
        }, 2000);
    };

    const addElement = () => {
        if (!inputValue) {
            showMessage('Please enter a value to add.');
            return;
        }
        const newArr = [...array, inputValue];
        setArray(newArr);
        setMessage(`Added ${inputValue} to the end.`);
        setHighlighted([newArr.length - 1]);
        setHighlightColor('green');
        setInputValue('');
    };

    const addAtIndex = () => {
        const idx = parseInt(indexValue);
        if (isNaN(idx) || idx < 0 || idx > array.length) {
            showMessage('Invalid index.');
            return;
        }
        if (!inputValue) {
            showMessage('Please enter a value.');
            return;
        }
        const newArr = [...array];
        newArr.splice(idx, 0, inputValue);
        setArray(newArr);
        setMessage(`Inserted ${inputValue} at index ${idx}.`);
        setHighlighted([idx]);
        setHighlightColor('green');
        setInputValue('');
        setIndexValue('');
    };

    const removeElement = () => {
        if (array.length === 0) {
            showMessage('Array is empty.');
            return;
        }
        const newArr = [...array];
        const removed = newArr.pop();
        setArray(newArr);
        setMessage(`Removed ${removed} from the end.`);
    };

    const removeAtIndex = () => {
        const idx = parseInt(indexValue);
        if (isNaN(idx) || idx < 0 || idx >= array.length) {
            showMessage('Invalid index.');
            return;
        }
        const newArr = [...array];
        const removed = newArr.splice(idx, 1)[0];
        setArray(newArr);
        setMessage(`Removed ${removed} at index ${idx}.`);
        setIndexValue('');
    };

    const searchElement = () => {
        if (!inputValue) {
            showMessage('Enter a value to search.');
            return;
        }
        const idx = array.findIndex(item => item == inputValue);
        if (idx !== -1) {
            setMessage(`Found ${inputValue} at index ${idx}.`);
            setHighlighted([idx]);
            setHighlightColor('green');
        } else {
            setMessage(`${inputValue} not found.`);
            setHighlighted([]);
            setHighlightColor('red');
        }
    };

    return (
        <div className="card visualizer-container">
            <div className="header">
                <h2>Array Visualizer</h2>
                <p className="subtitle">Explore how arrays store data linearly</p>
            </div>

            <div className="array-box">
                {array.length === 0 ? (
                    <p style={{ color: 'var(--text-secondary)' }}>Array is empty</p>
                ) : (
                    array.map((item, idx) => (
                        <div
                            key={idx}
                            className={`array-element ${highlighted.includes(idx) ? (highlightColor === 'green' ? 'highlight-green' : 'highlight-red') : ''}`}
                        >
                            {item}
                            <span className="index-label">{idx}</span>
                        </div>
                    ))
                )}
            </div>

            <div className="message-area">
                {message}
            </div>

            <div className="controls-area">
                <div className="control-group">
                    <h4>Add & Insert</h4>
                    <div className="input-group">
                        <input
                            type="text"
                            placeholder="Value"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                        />
                        <button onClick={addElement}>Add End</button>
                    </div>
                    <div className="input-group">
                        <input
                            type="number"
                            placeholder="Index"
                            value={indexValue}
                            onChange={(e) => setIndexValue(e.target.value)}
                        />
                        <button onClick={addAtIndex}>Insert</button>
                    </div>
                </div>

                <div className="control-group">
                    <h4>Remove</h4>
                    <div className="input-group">
                        <button onClick={removeElement} style={{ width: '100%' }}>Remove Last</button>
                    </div>
                    <div className="input-group">
                        {/* Reusing index input if desired, but nice to have duplicate for clarity or share state */}
                        <button onClick={removeAtIndex} style={{ width: '100%' }}>Remove at Index</button>
                    </div>
                </div>

                <div className="control-group">
                    <h4>Operations</h4>
                    <div className="input-group">
                        <button onClick={searchElement}>Search Value</button>
                    </div>
                    <div className="input-group">
                        <button onClick={() => { setArray([]); showMessage('Array cleared.'); }}>Clear</button>
                        <button onClick={() => { setArray(array.slice().reverse()); showMessage('Array reversed.'); }}>Reverse</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArrayVisualizer;
