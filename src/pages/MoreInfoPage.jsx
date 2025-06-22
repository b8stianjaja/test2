// src/pages/MoreInfoPage.jsx
import React from 'react';
import './MoreInfoPage.css'; // Create this new CSS file

const GalleryItem = ({ title, description, imageUrl, videoUrl }) => (
  <div className="gallery-item">
    {imageUrl && <img src={imageUrl} alt={title} className="gallery-image" />}
    {videoUrl && (
      <div className="video-responsive">
        <iframe
          width="560"
          height="315"
          src={videoUrl}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    )}
    <h3 className="gallery-item-title">{title}</h3>
    {description && <p className="gallery-item-description">{description}</p>}
  </div>
);

function MoreInfoPage() {
  // UX Purpose: Offer richer context, build brand, showcase related creative works or updates.
  return (
    <div className="page-container more-info-page">
      <h1 className="page-title">Gallery of Whispers</h1>

      <section className="gallery-section">
        <h2>Featured Visuals & Spotlights</h2>
        <p className="section-intro">
          Dive deeper into the world behind the echoes. Here you'll find music video features, artwork showcases, and other glimpses into the creative process.
        </p>
        <div className="gallery-grid">
          <GalleryItem
            title="Visualizer for 'Moonlit Clearing'"
            // videoUrl="https://www.youtube.com/embed/YOUR_YOUTUBE_VIDEO_ID_1" // Replace with actual YouTube embed URL
            description="Experience the vibes of 'Moonlit Clearing' with this official visualizer."
            imageUrl="/src/assets/visualizer_moonlit_placeholder.jpg" // Placeholder image for the video
          />
          <GalleryItem
            title="Artwork: 'Whispers of the Oldwood'"
            imageUrl="/src/assets/artworks/oldwood_large.jpg" // Assume a larger version of beat artwork
            description="The full artwork piece that inspired the 'Whispers of the Oldwood' beat."
          />
          <GalleryItem
            title="Behind the Sound: 'Terra's Awakening'"
            // videoUrl="https://www.youtube.com/embed/YOUR_YOUTUBE_VIDEO_ID_2"
            description="A short look into the creation of the orchestral elements for 'Terra's Awakening'."
            imageUrl="/src/assets/bts_terra_placeholder.jpg"
          />
          {/* Add more GalleryItem components */}
        </div>
      </section>

      <section className="gallery-section">
        <h2>Artist Updates & Insights</h2>
         <div className="update-item">
            <h3>New Beat Pack Coming Soon!</h3>
            <p className="update-date">May 28, 2025</p>
            <p>Excited to announce a new collection of [Genre] beats titled "[Pack Name]" will be dropping next month. Expect more [description of sound/theme]!</p>
        </div>
         <div className="update-item">
            <h3>Studio Upgrade: New Synth!</h3>
            <p className="update-date">May 15, 2025</p>
            <p>Just added the [Synth Name] to the studio arsenal. Can't wait to explore its sonic possibilities for upcoming tracks. The textures are incredible!</p>
        </div>
      </section>
    </div>
  );
}
export default MoreInfoPage;