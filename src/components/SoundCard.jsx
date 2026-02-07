import React from 'react';
import './SoundCard.css';

const SoundCard = ({ brand, isPlaying, onClick }) => {
    // Construct the embed URL with necessary parameters
    const embedUrl = `https://www.youtube.com/embed/${brand.youtubeId}?start=${brand.startTime}&end=${brand.startTime + brand.duration}&autoplay=${isPlaying ? 1 : 0}&controls=0&modestbranding=1&rel=0`;

    return (
        <div
            className={`sound-card ${isPlaying ? 'playing' : ''}`}
            style={{ '--brand-color': brand.color, padding: 0, overflow: 'hidden', cursor: 'pointer' }}
            onClick={onClick}
        >
            <iframe
                width="100%"
                height="100%"
                src={embedUrl}
                title={`${brand.name} sound`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                style={{ pointerEvents: 'none' }}
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
