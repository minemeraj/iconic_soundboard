import React from 'react';
import SoundCard from './SoundCard';
import { brands } from '../data/brands';
import { useYouTubeAudio } from '../hooks/useYouTubeAudio';
import './SoundGrid.css';

const SoundGrid = () => {
    const { playingId, playSound } = useYouTubeAudio();

    return (
        <div className="sound-grid">
            {brands.map((brand) => (
                <SoundCard
                    key={brand.id}
                    brand={brand}
                    isPlaying={playingId === brand.id}
                    onClick={() => playSound(brand.youtubeId, brand.id, brand.startTime, brand.duration)}
                />
            ))}
        </div>
    );
};

export default SoundGrid;
