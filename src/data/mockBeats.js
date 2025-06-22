// src/data/mockBeats.js

// You'll need to create placeholder images and audio files in your src/assets folder
// or use absolute URLs if you have them hosted somewhere.
// For example: src/assets/artworks/beat1.jpg, src/assets/audio/beat1.mp3

export const mockBeatsData = [
  {
    id: 'b001',
    title: 'Cansionsita',
    bpm: 85,
    key: 'C#m',
    genre: 'Ambient Hip-Hop',
    price: { // Example for multiple licenses later
      mp3: 29.99,
      wav: 49.99,
    },
    artworkUrl: '/src/assets/artworks/SS1.png', // Replace with your actual asset path
    audioUrl: '/src/assets/audio/WDR.mp3', // Replace with your actual asset path
    tags: ['ethereal', 'mystical', 'forest', 'chill'],
    description: 'A haunting melody that echoes through ancient trees, perfect for introspective moments.'
  },
  {
    id: 'b002',
    title: 'Moonlit Clearing',
    bpm: 110,
    key: 'F#m',
    genre: 'Chill Trap',
    price: {
      mp3: 34.99,
      wav: 59.99,
    },
    artworkUrl: '/src/assets/artworks/moonlit.jpg', // Replace with your actual asset path
    audioUrl: '/src/assets/audio/moonlit_preview.mp3', // Replace with your actual asset path
    tags: ['night', 'serene', 'trap', 'smooth'],
    description: 'Smooth trap vibes under a canopy of stars, ideal for late-night sessions.'
  },
  {
    id: 'b003',
    title: 'Terra\'s Awakening',
    bpm: 95,
    key: 'Gmaj',
    genre: 'Orchestral Hip-Hop',
    price: {
      mp3: 39.99,
      wav: 69.99,
    },
    artworkUrl: '/src/assets/artworks/terra.jpg', // Replace with your actual asset path
    audioUrl: '/src/assets/audio/terra_preview.mp3', // Replace with your actual asset path
    tags: ['epic', 'nature', 'orchestral', 'cinematic'],
    description: 'An uplifting and powerful theme that speaks of nature\'s grandeur.'
  },
  // Add 2-3 more mock beats to make the catalog look more populated
];