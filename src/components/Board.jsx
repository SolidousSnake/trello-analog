import React, { useState } from 'react';
import Column from './Column';
import { DragDropContext } from 'react-beautiful-dnd';
import CardModal from './CardModal';

export default function Board({ columns, setColumns }) {
    const [selectedCard, setSelectedCard] = useState(null);

    const onDragEnd = (result) => {
        const { destination, source, draggableId } = result;
        if (!destination) return;
        if (destination.droppableId === source.droppableId && destination.index === source.index) {
            return;
        }

        const sourceColIndex = columns.findIndex(c => c.id === source.droppableId);
        const destColIndex = columns.findIndex(c => c.id === destination.droppableId);
        const sourceCol = columns[sourceColIndex];
        const destCol = columns[destColIndex];
        const movingCard = sourceCol.cards.find(card => card.id === draggableId);

        const newSourceCards = [...sourceCol.cards];
        newSourceCards.splice(source.index, 1);

        if (sourceCol === destCol) {
            newSourceCards.splice(destination.index, 0, movingCard);
            const newColumns = [...columns];
            newColumns[sourceColIndex] = { ...sourceCol, cards: newSourceCards };
            setColumns(newColumns);
        } else {
            const newDestCards = [...destCol.cards];
            newDestCards.splice(destination.index, 0, movingCard);

            const newColumns = [...columns];
            newColumns[sourceColIndex] = { ...sourceCol, cards: newSourceCards };
            newColumns[destColIndex] = { ...destCol, cards: newDestCards };

            setColumns(newColumns);
        }
    };

    const toggleDone = (cardId) => {
        const newColumns = columns.map(col => {
            const newCards = col.cards.map(card => {
                if (card.id === cardId) {
                    return { ...card, done: !card.done };
                }
                return card;
            });
            return { ...col, cards: newCards };
        });
        setColumns(newColumns);
    };

    const openCardModal = (card) => {
        setSelectedCard(card);
    };

    return (
        <>
            <DragDropContext onDragEnd={onDragEnd}>
                <div className="board-wrapper">
                    <div className="board d-flex gap-5">
                        {columns.map(col => (
                            <Column
                                key={col.id}
                                column={col}
                                columns={columns}
                                setColumns={setColumns}
                                toggleDone={toggleDone}
                                onCardClick={openCardModal}
                            />
                        ))}
                    </div>
                </div>
            </DragDropContext>

            <CardModal
                show={selectedCard}
                onClose={() => setSelectedCard(null)}
                card={selectedCard}
            />
        </>
    );
}
