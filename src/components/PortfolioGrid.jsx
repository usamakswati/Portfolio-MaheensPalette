import React from 'react';
import ProjectCard from './ProjectCard';
import './PortfolioGrid.css';

const PortfolioGrid = ({ projects }) => {
    return (
        <section id="portfolio" className="portfolio-section">
            <div className="container">
                <h2 className="section-header">SELECTED WORKS</h2>
                <div className="grid">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PortfolioGrid;
