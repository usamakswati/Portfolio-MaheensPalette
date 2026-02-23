import React, { useState, useRef, useEffect, useCallback } from 'react';
import './GraphicSlider.css';

const GraphicSlider = ({ graphics, direction = 'left', duration = '35s' }) => {
    const [lightboxImage, setLightboxImage] = useState(null);
    const outerRef = useRef(null);
    const trackRef = useRef(null);
    const rafRef = useRef(null);
    const isPaused = useRef(false);
    const isDragging = useRef(false);
    const dragStartX = useRef(0);
    const dragScrollStart = useRef(0);
    const dragDelta = useRef(0); // track how far user dragged to prevent accidental click

    // Duplicate for seamless loop
    const items = [...graphics, ...graphics];

    // Speed: cover half the track width in `duration` seconds
    const durationMs = parseFloat(duration) * 1000;

    /* ── Animation loop ───────────────────────────── */
    const animate = useCallback(() => {
        const outer = outerRef.current;
        const track = trackRef.current;

        if (outer && track && !isPaused.current) {
            const halfWidth = track.scrollWidth / 2;
            // pixels per frame (assuming ~60 fps)
            const step = halfWidth / (durationMs / (1000 / 60));

            if (direction === 'right') {
                outer.scrollLeft -= step;
                // Seamless loop: when at 0 jump to halfWidth
                if (outer.scrollLeft <= 0) outer.scrollLeft += halfWidth;
            } else {
                outer.scrollLeft += step;
                // Seamless loop: when at halfWidth jump to 0
                if (outer.scrollLeft >= halfWidth) outer.scrollLeft -= halfWidth;
            }
        }

        rafRef.current = requestAnimationFrame(animate);
    }, [direction, durationMs]);

    useEffect(() => {
        const outer = outerRef.current;
        const track = trackRef.current;

        // For right-scrolling: start midway so we can scroll both directions
        if (direction === 'right' && outer && track) {
            // small timeout so images have begun sizing
            setTimeout(() => { outer.scrollLeft = track.scrollWidth / 2; }, 50);
        }

        rafRef.current = requestAnimationFrame(animate);
        return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
    }, [animate, direction]);

    /* ── Mouse drag ───────────────────────────────── */
    const onMouseEnter = () => {
        if (!isDragging.current) isPaused.current = true;
    };

    const onMouseLeave = () => {
        isDragging.current = false;
        isPaused.current = false;
        if (outerRef.current) outerRef.current.style.cursor = 'grab';
    };

    const onMouseDown = (e) => {
        e.preventDefault();
        isDragging.current = true;
        isPaused.current = true;
        dragStartX.current = e.clientX;
        dragScrollStart.current = outerRef.current.scrollLeft;
        dragDelta.current = 0;
        outerRef.current.style.cursor = 'grabbing';
    };

    const onMouseMove = (e) => {
        if (!isDragging.current) return;
        const delta = dragStartX.current - e.clientX;
        dragDelta.current = Math.abs(delta);
        outerRef.current.scrollLeft = dragScrollStart.current + delta;
    };

    const onMouseUp = () => {
        isDragging.current = false;
        isPaused.current = false;
        if (outerRef.current) outerRef.current.style.cursor = 'grab';
    };

    /* ── Touch drag ───────────────────────────────── */
    const onTouchStart = (e) => {
        isPaused.current = true;
        dragStartX.current = e.touches[0].clientX;
        dragScrollStart.current = outerRef.current.scrollLeft;
        dragDelta.current = 0;
    };

    const onTouchMove = (e) => {
        const delta = dragStartX.current - e.touches[0].clientX;
        dragDelta.current = Math.abs(delta);
        outerRef.current.scrollLeft = dragScrollStart.current + delta;
    };

    const onTouchEnd = () => { isPaused.current = false; };

    /* ── Lightbox ─────────────────────────────────── */
    const openLightbox = (graphic) => setLightboxImage(graphic);
    const closeLightbox = () => setLightboxImage(null);

    // Only open lightbox if user didn't drag more than 6px
    const handleItemClick = (graphic) => {
        if (dragDelta.current < 6) openLightbox(graphic);
    };

    return (
        <div className="marquee-slider">
            {/* Hint label */}
            <div className="marquee-hint">
                <span>⟵ drag to scroll ⟶</span>
            </div>

            <div
                ref={outerRef}
                className="marquee-outer"
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                onMouseDown={onMouseDown}
                onMouseMove={onMouseMove}
                onMouseUp={onMouseUp}
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
                style={{ cursor: 'grab' }}
            >
                <div ref={trackRef} className="marquee-track">
                    {items.map((graphic, idx) => (
                        <div
                            key={`${graphic.id}-${idx}`}
                            className="marquee-item"
                            onClick={() => handleItemClick(graphic)}
                            title={graphic.title}
                        >
                            <div className="marquee-image-wrap">
                                <img
                                    src={graphic.image}
                                    alt={graphic.title}
                                    className="marquee-image"
                                    loading="lazy"
                                    decoding="async"
                                    draggable="false"
                                    onLoad={(e) => e.target.classList.add('loaded')}
                                />
                                <div className="marquee-overlay">
                                    <span className="marquee-title">{graphic.title}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            {lightboxImage && (
                <div className="lightbox-overlay" onClick={closeLightbox}>
                    <button className="lightbox-close" onClick={closeLightbox}>×</button>
                    <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                        <img
                            src={lightboxImage.image}
                            alt={lightboxImage.title}
                            className="lightbox-image"
                            decoding="async"
                            onLoad={(e) => e.target.classList.add('loaded')}
                        />
                        <div className="lightbox-caption">{lightboxImage.title}</div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default GraphicSlider;
