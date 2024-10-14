"use client";

import React, { useState } from 'react';
import API_URL from '@/.env';

const AddTurmaModal = ({ isOpen, onClose, onAddSuccess }) => {
    const [nome, setNome] = useState('');
    const [curso, setCurso] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await fetch(`${API_URL}/turmas/criar`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ nome, curso }),
            });

            onAddSuccess();
            onClose();

        } catch (err) {
            console.log('Ocorreu um erro em AddTurmaModal: '+err);
        }
    };
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Adicionar Nova Turma</h2>
                <form onSubmit={handleSubmit}>
                        <label>Nome da Turma</label>
                        <input
                            type="text"
                            id="nome"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            required
                        />
                        <label>Curso</label>
                        <input
                            type="text"
                            id="curso"
                            value={curso}
                            onChange={(e) => setCurso(e.target.value)}
                            required
                        />
                    <div className="button-container">
                    <button className='button-form' type="submit">Adicionar</button>
                    <button type="button" className="button-form" onClick={onClose}>Fechar</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddTurmaModal;
