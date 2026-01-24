import React from 'react';
import SoundCard from './SoundCard';
import { brands } from '../data/brands';
import { useAudio } from '../hooks/useAudio';
import './SoundGrid.css';

const SoundGrid = () => {
    const { playingId, playSound } = useAudio();

    return (
        <div className="sound-grid">
            {brands.map((brand) => (
                <SoundCard
                    key={brand.id}
                    brand={brand}
                    isPlaying={playingId === brand.id}
                    onClick={playSound}
                />
            ))}
        </div>
    );
};

export default SoundGrid;
