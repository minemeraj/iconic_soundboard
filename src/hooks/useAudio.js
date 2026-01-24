import { useState, useRef, useCallback } from 'react';

export const useAudio = () => {
    const [playingId, setPlayingId] = useState(null);
    const audioRef = useRef(new Audio());

    const playSound = useCallback((soundPath, id) => {
        if (playingId === id) {
            // Toggle off if clicking the same one (optional, or just replay)
            // audioRef.current.pause();
            // audioRef.current.currentTime = 0;
            // setPlayingId(null);
            // For soundboards, usually retriggering is better, or stopping.
            // Let's restart it.
            audioRef.current.currentTime = 0;
            audioRef.current.play().catch(e => console.error("Audio play failed", e));
            return;
        }

        // Stop current
        audioRef.current.pause();
        audioRef.current.src = soundPath;
        audioRef.current.currentTime = 0;

        // Play new
        audioRef.current.play().catch(e => console.error("Audio play failed", e));
        setPlayingId(id);

        // Reset playing state when ended
        audioRef.current.onended = () => {
            setPlayingId(null);
        };
    }, [playingId]);

    return { playingId, playSound };
};
