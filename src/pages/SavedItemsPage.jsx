// src/pages/SavedItemsPage.jsx
import React, { useState, useEffect, useRef } from 'react';
import BeatCard from '../components/common/BeatCard';
import { mockBeatsData } from '../data/mockBeats.js'; // Using a slice for simulation
import './SavedItemsPage.css'; // Create this file

function SavedItemsPage() {
  // For now, simulate some saved items.
  // In a real app, this would come from user state, localStorage, or backend.
  const [savedBeats, setSavedBeats] = useState([]);
  const [currentPlayingId, setCurrentPlayingId] = useState(null);
  const audioRef = useRef(null);

  useEffect(() => {
    // Simulate fetching a few "saved" beats (e.g., first and third)
    const simulatedSaved = [mockBeatsData[0], mockBeatsData[2]].filter(Boolean); // Filter out undefined if data is short
    setSavedBeats(simulatedSaved);
  }, []);

  useEffect(() => {
    const audioElement = audioRef.current;
    if (audioElement) audioElement.pause();
    if (currentPlayingId) {
      const currentBeat = savedBeats.find(b => b.id === currentPlayingId);
      if (currentBeat && audioElement) {
        audioElement.src = currentBeat.audioUrl;
        audioElement.play().catch(error => console.error("Error playing audio:", error));
      }
    }
    return () => {
      if (audioElement) audioElement.pause();
    };
  }, [currentPlayingId, savedBeats]);

  const handlePlaySavedBeat = (beatToPlay) => {
    if (currentPlayingId === beatToPlay.id) {
      if (audioRef.current) audioRef.current.pause();
      setCurrentPlayingId(null);
    } else {
      setCurrentPlayingId(beatToPlay.id);
    }
  };

  return (
    <div className="page-container saved-items-page">
      <h1 className="page-title">Echoes You've Gathered</h1>
      <audio ref={audioRef} id="saved-items-audio-player" onEnded={() => setCurrentPlayingId(null)}></audio>

      {savedBeats.length > 0 ? (
        <div className="beats-grid"> {/* Re-using .beats-grid style */}
          {savedBeats.map((beat) => (
            <BeatCard
              key={beat.id}
              beat={beat}
              onPlay={handlePlaySavedBeat}
              currentPlayingId={currentPlayingId}
            />
          ))}
        </div>
      ) : (
        <div className="empty-saved-items">
          <p>You haven't gathered any echoes yet.</p>
          <p>Explore the <a href="/beats" className="inline-link">Beatwood</a> to find sounds that resonate with you.</p>
          {/* <p>(In the future, you'll be able to save your favorite beats here!)</p> */}
        </div>
      )}
    </div>
  );
}
export default SavedItemsPage;