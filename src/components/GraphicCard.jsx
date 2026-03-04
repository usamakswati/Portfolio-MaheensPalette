import React from 'react';
import './GraphicCard.css';

const GraphicCard = ({ graphic }) => {
    return (
        <div className="graphic-card fade-in">
            <div className="card-image-wrap">
                <img src={graphic.image} alt={graphic.title} className="card-image" />
            </div>
            <div className="card-content">
                <h3 className="card-title">{graphic.title}</h3>
            </div>
        </div>
    );
};

export default GraphicCard;
