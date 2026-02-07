import React from 'react';
import './SoundCard.css';

const SoundCard = ({ brand, isPlaying, onClick }) => {
    // Construct the embed URL with necessary parameters
    // autoplay=1: Play when loaded (we might want to control this via prop/state for performance)
    // controls=0: Minimal UI
    // start: Start time
    // end: End time (optional, but helpful)
    const embedUrl = `https://www.youtube.com/embed/${brand.youtubeId}?start=${brand.startTime}&end=${brand.startTime + brand.duration}&autoplay=${isPlaying ? 1 : 0}&controls=0&modestbranding=1&rel=0`;

    return (
        <div
            className={`sound-card ${isPlaying ? 'playing' : ''}`}
            style={{ '--brand-color': brand.color, padding: 0, overflow: 'hidden' }}
        >
            <iframe
                width="100%"
                height="100%"
                src={embedUrl}
                title={`${brand.name} sound`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                style={{ pointerEvents: 'auto' }} //Allow interaction if desired, or 'none' for pure soundboard feel
            ></iframe>
            <div className="brand-label" style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                background: 'rgba(0,0,0,0.7)',
                color: 'white',
                padding: '4px',
                fontSize: '0.8rem',
                textAlign: 'center',
                pointerEvents: 'none'
            }}>
                {brand.name}
            </div>
        </div>
    );
};

export default SoundCard;
