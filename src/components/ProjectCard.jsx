import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
    return (
        <div className="project-card fade-in">
            <div className="card-image-wrap">
                <img src={project.image} alt={project.title} className="card-image" />
            </div>
            <div className="card-content">
                <h3 className="card-title">{project.title}</h3>
                <p className="card-desc">{project.description}</p>
            </div>
        </div>
    );
};

export default ProjectCard;
