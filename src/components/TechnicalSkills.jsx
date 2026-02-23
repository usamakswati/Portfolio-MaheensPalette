import React, { useEffect, useState, useRef } from 'react';
import './TechnicalSkills.css';

const TechnicalSkills = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    const skills = [
        { id: 1, name: "ADOBE SUITE", percent: 90, color: "black", height: "250px" },
        { id: 2, name: "FASHION DESIGN", percent: 60, color: "red", height: "180px" },
        { id: 3, name: "TYPOGRAPHY", percent: 85, color: "black", height: "230px" }
    ];

    return (
        <section id="skills" className="skills-section" ref={sectionRef}>
            <div className="container skills-container">
                <div className="skills-header-block reveal reveal-up">
                    <h2 className="skills-heading">
                        TECHNICAL <span className="text-red">SKILLS</span>
                    </h2>
                    <p className="skills-description reveal reveal-up delay-1">
                        Mastery of digital tools allows for the seamless translation of
                        abstract concepts into tangible realities. My technical workflow
                        combining industry-standard software with experimental methods.
                    </p>
                </div>

                <div className={`skills-chart reveal reveal-up delay-4 ${isVisible ? 'animate-chart' : ''}`}>
                    {skills.map((skill) => (
                        <div key={skill.id} className="skill-item">
                            <span className="skill-percent">{skill.percent}%</span>
                            <div
                                className={`skill-bar ${skill.color}`}
                                style={{ height: isVisible ? skill.height : '0px' }}
                            >
                                <span className="skill-name">{skill.name}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechnicalSkills;
