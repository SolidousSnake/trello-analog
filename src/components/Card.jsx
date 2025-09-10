import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import '../styles/card.css';

export default function Card({ card, index, toggleDone, onCardClick }) {
    return (
        <Draggable draggableId={card.id} index={index}>
            {(provided) => (
                <div
                    className={`card mb-2 ${card.done ? 'bg-success bg-opacity-25' : ''}`}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    onMouseUp={(e) => {
                        if (e.target.type !== 'checkbox') {
                            onCardClick(card);
                        }
                    }}
                    style={{
                        userSelect: 'none',
                        cursor: 'pointer',
                        ...provided.draggableProps.style,
                    }}
                >
                    <div className="card-body p-2 d-flex align-items-center">
                        <input
                            type="checkbox"
                            className="form-check-input me-2"
                            checked={card.done || false}
                            onChange={(e) => {
                                e.stopPropagation();
                                toggleDone(card.id);
                            }}
                        />
                        <span style={{ textDecoration: card.done ? 'line-through' : 'none' }}>
                            {card.content}
                        </span>
                    </div>
                </div>
            )}
        </Draggable>
    );
}
