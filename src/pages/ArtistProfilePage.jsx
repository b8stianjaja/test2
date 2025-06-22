// src/pages/ArtistProfilePage.jsx
import React from 'react';
import './ArtistProfilePage.css'; // Create this new CSS file

// Placeholder for social icons - replace with actual icons/library later
const SocialLink = ({ platform, url, children }) => (
  <a href={url} target="_blank" rel="noopener noreferrer" className="social-link">
    {children || platform}
  </a>
);

function ArtistProfilePage() {
  // UX Purpose: Connect with the artist. Build trust and a personal connection.
  // Showcase personality, philosophy, and ways to connect.
  return (
    <div className="page-container artist-profile-page">
      <h1 className="page-title">The Storyteller</h1>

      <section className="profile-section artist-bio">
        <div className="profile-image-container">
          {/* Replace with your actual artist image */}
          <img src="/src/assets/artist_profile_placeholder.jpg" alt="[Artist Name]" className="artist-image" />
        </div>
        <div className="bio-content">
          <h2>About [Your Artist Name / Brand]</h2>
          <p>
            [Placeholder: Write your detailed artist bio here. Talk about your journey, your inspirations (especially how they tie into the "Rewrite" theme if you like), what drives you to create music. Aim for 2-3 paragraphs.]
          </p>
          <p>
            The Grove of Echoes is more than just a beat store; it's an extension of this artistic vision, offering soundscapes designed to inspire and transport listeners.
          </p>
        </div>
      </section>

      <section className="profile-section artist-philosophy">
        <h2>My Creative Philosophy</h2>
        <p>
          [Placeholder: Share your thoughts on music creation, what you believe makes a beat special, your approach to sound design, or the emotions you aim to evoke. Connect it to the "Rewrite" themes of nature, introspection, or storytelling if applicable.]
        </p>
      </section>

      <section className="profile-section studio-inspirations">
        <h2>Studio & Inspirations</h2>
        <p>
          [Placeholder: Optionally, talk a bit about your creative environment, key pieces of gear that define your sound, or specific artists, games (like Rewrite!), or experiences that inspire your music.]
        </p>
      </section>

      <section className="profile-section connect-social">
        <h2>Connect & Follow</h2>
        <div className="social-links-container">
          <SocialLink platform="YouTube" url="https://youtube.com/yourchannel">YouTube</SocialLink>
          <SocialLink platform="Instagram" url="https://instagram.com/yourprofile">Instagram</SocialLink>
          <SocialLink platform="SoundCloud" url="https://soundcloud.com/yourprofile">SoundCloud</SocialLink>
          <SocialLink platform="Twitter" url="https://twitter.com/yourprofile">Twitter/X</SocialLink>
          {/* Add other relevant platforms */}
        </div>
      </section>

      {/* Optional: Testimonials Section */}
      {/*
      <section className="profile-section testimonials">
        <h2>Echoes from Others (Testimonials)</h2>
        <div className="testimonial-item">
          <p>"[Artist Name]'s beats are pure magic! Transformed my project." - Happy Client</p>
        </div>
        <div className="testimonial-item">
          <p>"Incredible quality and truly unique sound." - Another Fan</p>
        </div>
      </section>
      */}
    </div>
  );
}
export default ArtistProfilePage;