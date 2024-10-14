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
                    <div>
                        <label htmlFor="nome">Nome da Turma:</label><br />
                        <input
                            type="text"
                            id="nome"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="curso">Curso:</label><br />
                        <input
                            type="text"
                            id="curso"
                            value={curso}
                            onChange={(e) => setCurso(e.target.value)}
                            required
                        />
                    </div>
                    <button className='button-form' type="submit">Adicionar</button>
                    <button type="button" onClick={onClose}>Fechar</button>
                </form>
            </div>
        </div>
    );
};

export default AddTurmaModal;
