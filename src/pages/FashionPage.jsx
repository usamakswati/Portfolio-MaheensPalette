import React from 'react';
import GraphicSlider from '../components/GraphicSlider';
import { fashionDesigns } from '../data/projects';
import '../components/GraphicSlider.css';

export default function FashionPage() {
    return (
        <section className="portfolio-section page-section">
            <div className="container">
                <h2 className="section-header-block">FASHION DESIGN</h2>
            </div>
            {/* Full-width marquee scrolling right for variety */}
            <GraphicSlider graphics={fashionDesigns} direction="right" duration="80s" />
        </section>
    );
}
