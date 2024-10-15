"use client";

import React, { useState, useEffect } from 'react';
import API_URL from '@/.env';

const AddTurmaModal = ({ isOpen, onClose, onAddSuccess, turmaEditada }) => {
    const [nome, setNome] = useState('');
    const [curso, setCurso] = useState('');

    useEffect(() => {
        if (turmaEditada) {
            setNome(turmaEditada.nome);
            setCurso(turmaEditada.curso);
        } else {
            resetFields();
        }
    }, [turmaEditada, isOpen]);

    const resetFields = () => {
        setNome('');
        setCurso('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const method = turmaEditada ? 'PUT' : 'POST';
            const endpoint = turmaEditada ? `${API_URL}/turmas/atualizar/${turmaEditada.id}` : `${API_URL}/turmas/criar`;
            await fetch(endpoint, {
                method: method,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ nome, curso }),
            });

            onAddSuccess();
            resetFields(); // Resetando campos após o sucesso
            onClose();

        } catch (err) {
            console.log('Ocorreu um erro em AddTurmaModal: '+err);
        }
    };
    const handleClose = () => {
        resetFields(); // Resetando campos ao fechar
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>{turmaEditada ? 'Atualizar Turma' : 'Adicionar Nova Turma'}</h2>
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
                    <button className='button-form' type="submit">{turmaEditada ? 'Atualizar' : 'Adicionar'}</button>
                    <button type="button" className="button-form" onClick={handleClose}>Fechar</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddTurmaModal;
