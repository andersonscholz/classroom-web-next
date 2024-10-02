"use client";

import React, { useEffect, useState } from 'react';
import API_URL from '../src/config.js';
import Navbar from '../src/components/Navbar';
import Card from '../src/components/Card';


const MateriasPage = () => {
    const [materias, setMaterias] = useState([]);

    useEffect(() => {
        const fetchMaterias = async () => {
            try {
                const response = await fetch(`${API_URL}/turmas`);                
                const data = await response.json();
                setMaterias(data);
            } catch (err) {
                console.log('Ocorreu um erro ao buscar as unidades em index.js: ' + err);
            }
        };

        fetchMaterias();
    }, []);

    const deleteMateria = async (id) => {
        try {
            await fetch(`${API_URL}/turmas/deletar/${id}`, {
                method: 'DELETE',
            });

            setMaterias(materias.filter(materia => materia.id !== id));
        } catch (err) {
            console.log('Ocorreu um erro ao deletar as unidades em index.js: ' +err);
        }
    };

    return (
        <div>
            <Navbar />
            <main className="main">
                <section className="card-section">
                    {materias.map((materia) => (
                        <Card 
                            key={materia.id} 
                            materia={materia} 
                            onDelete={deleteMateria} 
                        />
                    ))}
                </section>
            </main>
        </div>
    );
};

export default MateriasPage;
