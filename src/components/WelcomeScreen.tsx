import React from 'react'
import './WelcomeScreen.css'

interface WelcomeScreenProps {
  onStartChat: () => void
  onAbout: () => void
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStartChat, onAbout }) => {
  return (
    <div className="welcome-container">
      <div className="content-wrapper">
        {/* Profile Section */}
        <div className="profile-section">
          <div className="avatar-container">
            <div className="avatar">
              <img 
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='50' fill='%236D28D9'/%3E%3Ccircle cx='50' cy='35' r='15' fill='%23fff'/%3E%3Cpath d='M 30 70 Q 30 55 50 55 Q 70 55 70 70' fill='%23fff'/%3E%3C/svg%3E"
                alt="Alok Saini"
              />
              <div className="status-indicator"></div>
            </div>
          </div>
        </div>

        {/* Welcome Message */}
        <div className="welcome-message">
          <h1>Welcome to <span className="highlight">Virtual Alok Saini</span> ✨</h1>
          <p>Your personal AI companion that speaks, thinks, and interacts like Alok Saini.</p>
          <p className="subtitle">Experience intelligent conversations powered by advanced AI technology.</p>
        </div>

        {/* Action Buttons */}
        <div className="action-buttons">
          <button className="btn btn-primary" onClick={onStartChat}>
            <span className="icon">💬</span>
            <span>Start Chat</span>
          </button>
          <button className="btn btn-secondary" onClick={onAbout}>
            <span className="icon">ℹ️</span>
            <span>About Virtual Alok</span>
          </button>
        </div>

        {/* Features */}
        <div className="features">
          <div className="feature">
            <div className="feature-icon">🤖</div>
            <span>AI-Powered</span>
          </div>
          <div className="feature">
            <div className="feature-icon">⚡</div>
            <span>Real-time Responses</span>
          </div>
          <div className="feature">
            <div className="feature-icon">🕐</div>
            <span>24/7 Available</span>
          </div>
          <div className="feature">
            <div className="feature-icon">👤</div>
            <span>Personalized</span>
          </div>
        </div>

        {/* Chat Preview */}
        <div className="chat-preview">
          <h2>See Virtual Alok in Action</h2>
          <p>Experience natural, intelligent conversations</p>
          
          <div className="conversation">
            <div className="chat-bubble user">
              <span>Hey Alok! Can you help me with a project idea?</span>
              <time>2:34 PM</time>
            </div>
            
            <div className="chat-bubble ai">
              <span>Absolutely! I'd love to help. What kind of project are you thinking about? I can provide insights on design, development, or creative direction.</span>
              <time>2:34 PM</time>
            </div>
            
            <div className="chat-bubble user">
              <span>I want to build an AI-powered web app!</span>
              <time>2:35 PM</time>
            </div>

            <div className="chat-bubble ai typing">
              <div className="typing-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <span className="typing-text">Virtual Alok is typing...</span>
            </div>
          </div>

          <div className="message-input-preview">
            <input type="text" placeholder="Type your message..." disabled />
            <button disabled>⬆</button>
          </div>
        </div>

        {/* Footer */}
        <footer className="footer">
          <p>Powered by <span>Alok Saini</span> • <span>AI Technology</span> • <span>2025</span></p>
        </footer>
      </div>
    </div>
  )
}

export default WelcomeScreen
