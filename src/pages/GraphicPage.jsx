import React from 'react';
import GraphicSlider from '../components/GraphicSlider';
import { graphicDesigns } from '../data/projects';
import '../components/GraphicSlider.css';

export default function GraphicPage() {
    return (
        <section className="portfolio-section page-section">
            <div className="container">
                <h2 className="section-header-block">GRAPHIC DESIGN</h2>
            </div>
            {/* Full-width marquee scrolling */}
            <GraphicSlider graphics={graphicDesigns} />
        </section>
    );
}
