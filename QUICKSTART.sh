#!/bin/bash

# Virtual Alok Saini - Quick Start Script
# Run this script to set up and start the development server

echo "🚀 Virtual Alok Saini - Quick Start"
echo "=================================="
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed!"
    echo "Please install Node.js from https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js version: $(node --version)"
echo "✅ npm version: $(npm --version)"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Failed to install dependencies"
    exit 1
fi

echo "✅ Dependencies installed successfully"
echo ""

# Start development server
echo "🎉 Starting development server..."
echo "🌐 Open http://localhost:5173 in your browser"
echo ""

npm run dev
