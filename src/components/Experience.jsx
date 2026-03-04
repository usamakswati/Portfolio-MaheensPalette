import React from 'react';
import './Experience.css';

const Experience = () => {
    const experiences = [
        {
            id: 1,
            role: "GRAPHIC DESIGNER & CONTENT CREATOR",
            company: "HOLIDAY HEIGHTS HOTELS",
            description: "Leading visual storytelling and content strategy. Pakistan / Remote.",
            year: "2026"
        },
        {
            id: 2,
            role: "VISUAL MARKETING DESIGNER",
            company: "MUGHLIA DAWAT",
            description: "Developed marketing collateral and brand assets. Pakistan.",
            year: "2025"
        },
        {
            id: 3,
            role: "GRAPHIC DESIGNER",
            company: "BEREKET NATURALS PVT LIMITED",
            description: "Full-time brand design and Islamic calligraphy. Islāmābād, Pakistan.",
            year: "2024"
        }
    ];

    return (
        <section id="experience" className="experience-section">
            <div className="container">
                <div className="experience-card">
                    <div className="exp-image-col reveal reveal-up">
                        <img
                            src="/fashion_exp.png"
                            alt="Fashion Design"
                            className="exp-image"
                            loading="lazy"
                            decoding="async"
                            onLoad={(e) => e.target.classList.add('loaded')}
                        />
                    </div>
                    <div className="exp-content-col">
                        <div className="exp-main-header reveal reveal-up delay-1">
                            <h2 className="experience-heading">.EXPERIENCE</h2>
                            <div className="exp-text-block">
                                <p className="exp-description-large">
                                    With over three years of experience in Adobe Photoshop and Adobe Illustrator,
                                    I have built a versatile career at the intersection of digital design and physical fashion production.
                                    My expertise lies in translating digital concepts into tangible garments, with a specialized focus on
                                    avant-garde draping, textile surface design, and exhibition curation. I possess a proven ability to
                                    work with complex textures—from structured brocades and sequins to ethereal organza ruffles and
                                    netted overlays—to create high-impact, conceptual silhouettes.
                                </p>
                            </div>
                        </div>
                        <div className="exp-grid-block">
                            {experiences.map((exp, index) => {
                                let displayRole = exp.role;
                                let displayDesc = exp.description;
                                let displayYear = exp.year;

                                if (exp.id === 3) { // 2024
                                    displayDesc = "Full-time brand design. On-site.";
                                }
                                if (exp.id === 2) { // 2025
                                    displayDesc = "Developed marketing collateral and brand assets. Pakistan/Remote.";
                                }

                                return (
                                    <div key={exp.id} className={`exp-item reveal reveal-up delay-${(index % 3) + 1}`}>
                                        <div className="exp-item-top">
                                            <h4 className="exp-role">{displayRole}</h4>
                                            <h4 className="exp-company">{exp.company}</h4>
                                        </div>
                                        <p className="exp-item-desc">{displayDesc}</p>
                                        <span className="exp-year">{displayYear}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
