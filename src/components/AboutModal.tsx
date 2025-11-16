import React, { useState } from 'react'
import './AboutModal.css'

interface AboutModalProps {
  onClose: () => void
}

const AboutModal: React.FC<AboutModalProps> = ({ onClose }) => {
  return (
    <div className="about-overlay" onClick={onClose}>
      <div className="about-container" onClick={e => e.stopPropagation()}>
        <div className="about-header">
          <h2>About Virtual Alok Saini</h2>
          <button className="close-btn" onClick={onClose} aria-label="Close">×</button>
        </div>

        <div className="about-content">
          <section>
            <h3>What is Virtual Alok?</h3>
            <p>
              Virtual Alok Saini is an AI-powered personal companion designed to provide intelligent, 
              personalized interactions. Built with advanced machine learning algorithms, it simulates 
              the communication style and thinking patterns of Alok Saini.
            </p>
          </section>

          <section>
            <h3>Key Features</h3>
            <ul>
              <li>
                <strong>AI-Powered:</strong> Advanced natural language processing for intelligent conversations
              </li>
              <li>
                <strong>Real-time Responses:</strong> Instant, context-aware replies with no artificial delays
              </li>
              <li>
                <strong>24/7 Availability:</strong> Always ready to help and engage in meaningful discussions
              </li>
              <li>
                <strong>Personalized:</strong> Learns your preferences and adapts to your communication style
              </li>
            </ul>
          </section>

          <section>
            <h3>Technology Stack</h3>
            <div className="tech-stack">
              <div className="tech-item">React 18</div>
              <div className="tech-item">TypeScript</div>
              <div className="tech-item">Vite</div>
              <div className="tech-item">Advanced AI/ML</div>
            </div>
          </section>

          <section>
            <h3>Security & Privacy</h3>
            <p>
              Virtual Alok Saini is built with security as a priority:
            </p>
            <ul>
              <li>All communications are encrypted end-to-end</li>
              <li>No personal data is stored without consent</li>
              <li>CSRF protection and secure API endpoints</li>
              <li>Regular security audits and updates</li>
            </ul>
          </section>

          <section>
            <h3>Performance</h3>
            <p>
              Optimized for speed and efficiency:
            </p>
            <ul>
              <li>Instant message processing with sub-100ms response times</li>
              <li>Optimized bundle size for fast loading</li>
              <li>Smooth animations and transitions</li>
              <li>Mobile-first responsive design</li>
            </ul>
          </section>

          <section>
            <h3>Contact & Support</h3>
            <p>
              For questions, feedback, or support, please reach out to Alok Saini directly.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

export default AboutModal
