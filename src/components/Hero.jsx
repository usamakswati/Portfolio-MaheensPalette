import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="container">
                <div className="hero-block brutal-border float-slow">
                    <div className="hero-content">
                        <h1 className="hero-title">
                            <span className="reveal reveal-up block">GRAPHIC & FASHION</span>
                            <span className="reveal reveal-up block delay-1">DESIGN PORTFOLIO<span className="accent">.</span></span>
                        </h1>
                        <div className="hero-image-placeholder">
                            {/* Optional: Add an image here later if needed, for now just text/layout */}
                        </div>
                    </div>
                    <div className="hero-footer brutal-border-top">
                        <div className="meta-item reveal reveal-up delay-2">
                            <span className="meta-label">ROLE</span>
                            <span className="meta-value">FASHION ILLUSTRATOR</span>
                        </div>

                        <div className="meta-item reveal reveal-up delay-3">
                            <span className="meta-label">LOCATION</span>
                            <span className="meta-value">WORLDWIDE</span>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
