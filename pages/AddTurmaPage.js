"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import API_URL from '../src/config.js';
import Navbar from '../src/components/Navbar.js';

const AddTurmaPage = () => {
    const [nome, setNome] = useState('');
    const [curso, setCurso] = useState('');
    const router = useRouter();

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

            router.push('/');

        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div>
            <header>
                <Navbar />
            </header>
            <main className="main">
                <h2>Adicionar Nova Turma</h2>
                <br />
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
                </form>
            </main>
        </div>
    );
};

export default AddTurmaPage;
