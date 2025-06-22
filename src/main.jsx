// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Ensure BrowserRouter is imported
import App from './App.jsx';
import './index.css'; // Your global styles

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>  {/* <== This is the crucial part */}
      <App />
    </BrowserRouter> {/* <== And its closing tag */}
  </React.StrictMode>,
);