import React, { useState } from 'react';
import Card from './Card';
import AddCardForm from './AddCardForm';
import CardModal from './CardModal';
import { Droppable } from 'react-beautiful-dnd';

export default function Column({ column, columns, setColumns, toggleDone }) {
    const [adding, setAdding] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);

    const addCard = (content) => {
        const newCard = {
            id: 'card-' + Date.now(),
            content,
            description: '',          
            done: false,
            createdAt: new Date().toISOString()
        };

        const newColumns = columns.map(col =>
            col.id === column.id ? { ...col, cards: [...col.cards, newCard] } : col
        );

        setColumns(newColumns);
        setAdding(false);
    };

    const openCardModal = (card) => setSelectedCard(card);

    const updateCardDescription = (cardId, newDescription) => {
        const newColumns = columns.map(col => ({
            ...col,
            cards: col.cards.map(card =>
                card.id === cardId ? { ...card, description: newDescription } : card
            )
        }));
        setColumns(newColumns);
        setSelectedCard(prev => (prev ? { ...prev, description: newDescription } : null));
    };

    const deleteCard = (cardId) => {
        const newColumns = columns.map(col => ({
            ...col,
            cards: col.cards.filter(card => card.id !== cardId)
        }));
        setColumns(newColumns);
        setSelectedCard(prev => (prev && prev.id === cardId ? null : prev));
    };

    return (
        <div className="card flex-shrink-0" style={{ width: '300px' }}>
            <div className="card-body d-flex flex-column">
                <h5 className="card-title">{column.title}</h5>

                <Droppable droppableId={column.id} direction="vertical">
                    {(provided) => (
                        <div
                            className="flex-grow-1 mb-2 overflow-hidden"
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                        >
                            {column.cards.map((card, index) => (
                                <Card
                                    key={card.id}
                                    card={card}
                                    index={index}
                                    toggleDone={toggleDone}
                                    onCardClick={openCardModal}
                                />
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>

                {adding ? (
                    <AddCardForm onAdd={addCard} onCancel={() => setAdding(false)} />
                ) : (
                    <button className="btn btn-sm btn-primary" onClick={() => setAdding(true)}>
                        + Add Card
                    </button>
                )}
            </div>

            <CardModal
                show={selectedCard}
                onClose={() => setSelectedCard(null)}
                card={selectedCard}
                onSaveDescription={updateCardDescription}
                onDelete={deleteCard}        
            />
        </div>
    );
}
