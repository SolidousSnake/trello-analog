import React, { useState } from 'react';

export default function AddCardForm({ onAdd, onCancel }) {
    const [text, setText] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        if (text.trim() === '') return;
        onAdd(text);
        setText('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                className="form-control mb-2"
                placeholder="Card content"
                value={text}
                onChange={e => setText(e.target.value)}
                autoFocus
            />
            <div className="d-flex gap-2">
                <button type="submit" className="btn btn-sm btn-success">Add</button>
                <button type="button" className="btn btn-sm btn-secondary" onClick={onCancel}>Cancel</button>
            </div>
        </form>
    );
}
