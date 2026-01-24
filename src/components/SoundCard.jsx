import React from 'react';
import './SoundCard.css';

const SoundCard = ({ brand, isPlaying, onClick }) => {
    return (
        <button
            className={`sound-card ${isPlaying ? 'playing' : ''}`}
            onClick={() => onClick(brand.sound, brand.id)}
            style={{ '--brand-color': brand.color }}
            aria-label={`Play ${brand.name} sound`}
        >
            <div className="card-content">
                <img src={brand.logo} alt={`${brand.name} logo`} className="brand-logo" />
                <div className="glow-effect"></div>
            </div>
            <span className="brand-name">{brand.name}</span>
            <span className="sound-desc" style={{ opacity: isPlaying ? 1 : 0 }}>
                {brand.description}
            </span>
        </button>
    );
};

export default SoundCard;
