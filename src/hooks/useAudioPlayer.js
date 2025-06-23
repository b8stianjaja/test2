// src/hooks/useAudioPlayer.js
import { useState, useRef, useEffect, useCallback } from 'react';

// A single audio instance for the entire app
const audio = new Audio();

export const useAudioPlayer = (allBeats) => {
  const [currentPlayingId, setCurrentPlayingId] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Function to stop playback
  const stopPlayback = useCallback(() => {
    audio.pause();
    setIsPlaying(false);
  }, []);

  // Function to handle playing/pausing a beat
  const handlePlayToggle = useCallback((beat) => {
    // If the clicked beat is already playing, pause it
    if (currentPlayingId === beat.id && isPlaying) {
      stopPlayback();
      setCurrentPlayingId(null);
    } else {
      // Find the full beat data to get the audioUrl
      const beatToPlay = allBeats.find(b => b.id === beat.id);
      if (beatToPlay) {
        audio.src = beatToPlay.audioUrl;
        audio.play().catch(error => console.error("Error playing audio:", error));
        setCurrentPlayingId(beat.id);
        setIsPlaying(true);
      }
    }
  }, [currentPlayingId, isPlaying, allBeats, stopPlayback]);
  
  // Effect to automatically clear state when a track finishes
  useEffect(() => {
    const handleEnded = () => {
      setCurrentPlayingId(null);
      setIsPlaying(false);
    };
    audio.addEventListener('ended', handleEnded);
    return () => {
      audio.removeEventListener('ended', handleEnded);
    };
  }, []);

  return {
    currentPlayingId,
    isPlaying,
    handlePlayToggle
  };
};