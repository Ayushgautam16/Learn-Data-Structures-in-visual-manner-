import React from 'react';
import './App.css';
import ArrayVisualizer from './components/ArrayVisualizer';

function App() {
  return (
    <div className="app-container">
      <header className="header">
        <h1 className="title">DS Unlocked 🚀</h1>
        <p className="subtitle">Master Data Structures with Interactive Visualizations</p>
      </header>

      <main className="grid">
        {/* We can add more visualizers here later */}
        <div style={{ gridColumn: '1 / -1' }}>
          <ArrayVisualizer />
        </div>

        {/* Placeholder for future components */}
        <div className="card">
          <h3>🔗 Linked List (Coming Soon)</h3>
          <p style={{ color: 'var(--text-secondary)', marginTop: '1rem' }}>
            Visualize nodes and pointers in real-time.
          </p>
        </div>
        <div className="card">
          <h3>🌳 Binary Tree (Coming Soon)</h3>
          <p style={{ color: 'var(--text-secondary)', marginTop: '1rem' }}>
            Traverse trees and understand hierarchy.
          </p>
        </div>
      </main>

      <footer style={{ textAlign: 'center', color: 'var(--text-secondary)', marginTop: '4rem' }}>
        <p>Built for the community ❤️</p>
      </footer>
    </div>
  );
}

export default App;
