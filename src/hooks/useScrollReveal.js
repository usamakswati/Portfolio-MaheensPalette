import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useScrollReveal = () => {
    const location = useLocation();

    useEffect(() => {
        // Small delay so the DOM is painted before we observe
        const timer = setTimeout(() => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const handleIntersect = (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                    }
                });
            };

            const observer = new IntersectionObserver(handleIntersect, observerOptions);
            const revealElements = document.querySelectorAll('.reveal');

            revealElements.forEach(el => {
                // Immediately activate elements already in the viewport
                const rect = el.getBoundingClientRect();
                if (rect.top < window.innerHeight && rect.bottom > 0) {
                    el.classList.add('active');
                } else {
                    observer.observe(el);
                }
            });

            return () => {
                revealElements.forEach(el => observer.unobserve(el));
            };
        }, 80); // wait for page paint

        return () => clearTimeout(timer);
    }, [location.pathname]); // re-run every time the page route changes
};

export default useScrollReveal;
