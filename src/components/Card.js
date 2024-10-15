import React from 'react';

const Card = ({ materia, onDelete, onEdit }) => {
    return (
        <div className="card">
            <div className="card-header">
                <h1 className="card-materianome">{materia.nome}</h1>
                <br></br>
                <h3 className="card-cursonome">{materia.curso}</h3>
                <span className="material-icons teacher-icon">person</span>
            </div>
            <div className="card-body"></div>
            <div className="card-footer">
                <span className="card-icon material-icons-outlined" onClick={() => onDelete(materia.id)}>
                    delete
                </span>
                <span className="card-icon material-icons-outlined" onClick={() => onEdit(materia)}>
                    update
                </span>
            </div>
        </div>
    );
};

export default Card;
