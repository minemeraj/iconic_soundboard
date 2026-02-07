import React, { useEffect, useState } from 'react';
import SoundCard from './SoundCard';
import { brands } from '../data/brands';
import { useYouTubeAudio } from '../hooks/useYouTubeAudio';
import './SoundGrid.css';

const SoundGrid = () => {
    const { playingId, playSound } = useYouTubeAudio();
    const [playingDuration, setPlayingDuration] = useState(0);

    // Refresh page after video finishes
    useEffect(() => {
        if (playingId && playingDuration > 0) {
            // Add 3 seconds buffer time for video loading
            const totalTime = playingDuration + 3;
            console.log(`Setting refresh timer for ${totalTime} seconds (${playingDuration}s video + 3s buffer)`);
            const timer = setTimeout(() => {
                console.log('Refreshing page now!');
                window.location.reload();
            }, totalTime * 1000);

            return () => {
                console.log('Clearing refresh timer');
                clearTimeout(timer);
            };
        }
    }, [playingId, playingDuration]);

    const handlePlay = (youtubeId, id, startTime, duration) => {
        console.log('handlePlay called:', { youtubeId, id, startTime, duration, currentPlayingId: playingId });
        if (playingId === id) {
            // Stopping - reset duration
            console.log('Stopping video');
            setPlayingDuration(0);
        } else {
            // Starting - set duration
            console.log('Starting video with duration:', duration);
            setPlayingDuration(duration);
        }
        playSound(youtubeId, id, startTime, duration);
    };

    return (
        <div className="sound-grid">
            {brands.map((brand) => (
                <SoundCard
                    key={brand.id}
                    brand={brand}
                    isPlaying={playingId === brand.id}
                    onClick={() => handlePlay(brand.youtubeId, brand.id, brand.startTime, brand.duration)}
                />
            ))}
        </div>
    );
};

export default SoundGrid;
