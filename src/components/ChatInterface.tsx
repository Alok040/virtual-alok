import React, { useState, useRef, useEffect, useCallback } from 'react'
import './ChatInterface.css'
import apiClient from '../services/api'

interface Message {
  id: string
  text: string
  sender: 'user' | 'ai'
  timestamp: Date
}

interface ChatInterfaceProps {
  onClose: () => void
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({ onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hey Alok! Can you help me with a project idea?',
      sender: 'user',
      timestamp: new Date(Date.now() - 120000)
    },
    {
      id: '2',
      text: "Absolutely! I'd love to help. What kind of project are you thinking about? I can provide insights on design, development, or creative direction.",
      sender: 'ai',
      timestamp: new Date(Date.now() - 100000)
    },
    {
      id: '3',
      text: 'I want to build an AI-powered web app!',
      sender: 'user',
      timestamp: new Date(Date.now() - 30000)
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  useEffect(() => {
    scrollToBottom()
  }, [messages, scrollToBottom])

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsLoading(true)

    try {
      // Convert messages to history format for API
      const history = messages.map(msg => ({
        role: msg.sender === 'user' ? 'user' : 'assistant',
        content: msg.text
      }))

      // Call your backend API
      const response = await apiClient.sendMessage(inputValue, history)
      
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response.reply || "Sorry, I couldn't generate a response.",
        sender: 'ai',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, aiMessage])
    } catch (error) {
      console.error('Failed to send message:', error)
      
      // Error message
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "Sorry, I encountered an error. Please try again.",
        sender: 'ai',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="chat-overlay" onClick={onClose}>
      <div className="chat-container" onClick={e => e.stopPropagation()}>
        <div className="chat-header">
          <h2>Virtual Alok Chat</h2>
          <button className="close-btn" onClick={onClose} aria-label="Close chat">×</button>
        </div>

        <div className="messages-container">
          {messages.map(message => (
            <div key={message.id} className={`message ${message.sender}`}>
              <div className="message-avatar">
                {message.sender === 'user' ? (
                  <div className="user-avatar">A</div>
                ) : (
                  <div className="ai-avatar">
                    <span>🤖</span>
                  </div>
                )}
              </div>
              <div className="message-content">
                <p>{message.text}</p>
                <span className="message-time">
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="message ai">
              <div className="message-avatar">
                <div className="ai-avatar">
                  <span>🤖</span>
                </div>
              </div>
              <div className="message-content">
                <div className="typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <form className="message-input-form" onSubmit={handleSendMessage}>
          <input
            type="text"
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
            placeholder="Type your message..."
            disabled={isLoading}
            maxLength={1000}
            aria-label="Message input"
          />
          <button
            type="submit"
            disabled={!inputValue.trim() || isLoading}
            aria-label="Send message"
          >
            <span>⬆</span>
          </button>
        </form>
      </div>
    </div>
  )
}

export default ChatInterface
