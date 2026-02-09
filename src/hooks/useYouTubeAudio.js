import { useState, useCallback } from 'react';

export const useYouTubeAudio = () => {
    const [playingId, setPlayingId] = useState(null);

    const playSound = useCallback((youtubeId, id, startTime = 0, duration = 5) => {
        if (playingId === id) {
            // If clicking the same one, toggle off (stop)
            setPlayingId(null);
        } else {
            // Set new playing ID
            setPlayingId(id);
        }
    }, [playingId]);

    return { playingId, playSound };
};
