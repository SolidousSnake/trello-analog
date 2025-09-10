import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import '../styles/cardModal.css';

export default function CardModal({ show, onClose, card, onSaveDescription, onDelete }) {
    const [description, setDescription] = useState('');

    useEffect(() => {
        if (card) {
            setDescription(card.description ?? '');
        }
    }, [card]);

    if (!card) return null;

    const handleSave = () => {
        onSaveDescription(card.id, description.trim() || null);
        onClose();
    };

    const handleDelete = () => {
        const ok = window.confirm('Are you sure?');
        if (!ok) return;
        onDelete(card.id);
    };

    return (
        <Modal show={show} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>{card.content}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p><strong>Creation date:</strong> {new Date(card.createdAt).toLocaleString()}</p>

                <Form.Group className="mt-3">
                    <Form.Label><strong>Description:</strong></Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder={card.description || "No description"}
                    />

                </Form.Group>
            </Modal.Body>

            <Modal.Footer className="d-flex justify-content-between">
                <Button variant="danger" onClick={handleDelete}>
                    Delete
                </Button>
                <div>
                    <Button variant="secondary" className="me-2" onClick={onClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSave}>
                        Save
                    </Button>
                </div>
            </Modal.Footer>
        </Modal>
    );
}
