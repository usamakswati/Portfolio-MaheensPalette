import React from 'react';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="container">
                <h2 className="about-main-heading">.ABOUT ME</h2>
                <div className="about-card reveal reveal-up">
                    <div className="about-image-column">
                        <img
                            src="/maheen_about_red.png"
                            alt="Maheen Nouman"
                            className="about-image"
                            loading="lazy"
                            decoding="async"
                            onLoad={(e) => e.target.classList.add('loaded')}
                        />
                    </div>
                    <div className="about-text-column">
                        <h3 className="about-internal-heading reveal reveal-up delay-1">
                            GRAPHIC DESIGNER AND FASHION ILLUSTRATOR
                        </h3>
                        <p className="about-description reveal reveal-up delay-2">
                            I am a dedicated Graphic Designer and Fashion & Textile student at Pearson University (Expected 2027) with a strong foundation in visual storytelling and brand identity. I specialize in merging traditional design concepts with modern digital tools, utilizing Adobe Photoshop and Illustrator to bring creative visions to life. My expertise spans graphic design, logo creation, and packaging design, all driven by a strategic approach to visual marketing and branding.
                        </p>
                        <div className="about-footer">
                            <div className="about-info">
                                <span className="info-name">MAHEEN NOUMAN</span>
                                <span className="info-role">FASHION ILLUSTRATOR</span>
                            </div>
                            <a href="mailto:imaheenwrites@gmail.com" className="about-email">imaheenwrites@gmail.com</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
