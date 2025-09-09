import React, {useState} from "react";
import Board from "../components/Board";

export default function BoardPage() {
    const [columns, setColumns] = useState([
        {
            id: 'col-1',
            title: 'To Do',
            cards: [{
                id: 'card-1',
                content: 'Try analog trello',
                description: "Rly, try this",
                done: false,
                createdAt: new Date(2024, 1, 2, 11, 55, 23).toISOString()
            }],
        },
        {
            id: 'col-2',
            title: 'In Progress',
            cards: [],
        },
        {
            id: 'col-3',
            title: 'Done',
            cards: [],
        },
    ]);

    return (
        <Board columns={columns} setColumns={setColumns}/>
    );
}
