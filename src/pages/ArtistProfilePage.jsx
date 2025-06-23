// src/pages/ArtistProfilePage.jsx
import React from 'react';
import './ArtistProfilePage.css';

const SocialLink = ({ platform, url, children }) => (
  <a href={url} target="_blank" rel="noopener noreferrer" className="social-link">
    {children || platform}
  </a>
);

function ArtistProfilePage() {
  return (
    <>
      <section className="profile-section artist-bio">
        <div className="profile-image-container">
          <img src="/src/assets/artworks/SS1.png" alt="Grove Guardian" className="artist-image" />
        </div>
        <div className="bio-content">
          <h2>About the Grove Guardian</h2>
          <p>
            The Guardian of the Grove is a sonic storyteller, crafting auditory landscapes from the whispers of ancient forests and the hum of neon-lit futures. Each beat is a seed, planted in the rich soil of inspiration and nurtured with a passion for immersive sound design. The journey began with a simple desire: to create music that feels like a world waiting to be explored.
          </p>
          <p>
            The Grove of Echoes is more than just a beat store; it's an extension of this artistic vision, offering soundscapes designed to inspire creators and transport listeners to another realm.
          </p>
        </div>
      </section>

      <section className="profile-section artist-philosophy">
        <h2>Creative Philosophy</h2>
        <p>
            "I believe every sound has a story. My approach is to listen to the silence between the notes, to find the rhythm in rain, and to capture the harmony in the chaos of life. Music should be an experience—a full-body resonance that sparks imagination and provides the perfect backdrop for your own narrative to unfold."
        </p>
      </section>

      <section className="profile-section connect-social">
        <h2>Connect & Follow The Journey</h2>
        <div className="social-links-container">
          <SocialLink platform="YouTube" url="#">YouTube</SocialLink>
          <SocialLink platform="Instagram" url="#">Instagram</SocialLink>
          <SocialLink platform="SoundCloud" url="#">SoundCloud</SocialLink>
          <SocialLink platform="Twitter" url="#">Twitter/X</SocialLink>
        </div>
      </section>

      <section className="profile-section testimonials">
        <h2>Echoes from Other Creators</h2>
        <div className="testimonial-item">
          <p>"The beats from the Grove are pure magic! They transformed my project from a simple video into a cinematic experience." - Alex R.</p>
        </div>
        <div className="testimonial-item">
          <p>"Incredible quality and a truly unique sound that you can't find anywhere else. The 'Terra's Awakening' track gave my podcast the epic intro it needed." - Samira K.</p>
        </div>
      </section>
    </>
  );
}
export default ArtistProfilePage;