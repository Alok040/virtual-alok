# Setup & Installation Guide

## Virtual Alok Saini - Complete Setup Instructions

This guide will help you get the Virtual Alok Saini application up and running on your machine.

### Prerequisites

Before you begin, make sure you have:

1. **Node.js** (v16.0.0 or higher)
   - Download: https://nodejs.org/
   - Verify: `node --version` and `npm --version`

2. **Git** (optional, for version control)
   - Download: https://git-scm.com/

3. **Code Editor** (optional)
   - VS Code: https://code.visualstudio.com/

### Installation Steps

#### Step 1: Navigate to Project Directory

```bash
cd /Users/aloksaini/Desktop/virtual-alok-saini
```

#### Step 2: Install Dependencies

```bash
npm install
```

This will install all required packages:
- React 18.2.0
- TypeScript 5.3.0
- Vite 5.0.0
- And other dependencies

#### Step 3: Environment Configuration

Copy the example environment file:

```bash
cp .env.example .env
```

Edit `.env` with your API endpoints:

```env
VITE_API_URL=https://your-api.com
VITE_ENVIRONMENT=development
```

#### Step 4: Start Development Server

```bash
npm run dev
```

The application will be available at: **http://localhost:5173**

### Available Commands

```bash
# Development mode with hot reload
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type checking
npx tsc --noEmit
```

### Project Structure

```
virtual-alok-saini/
├── src/
│   ├── components/          # React components
│   ├── services/            # API and utilities
│   ├── App.tsx              # Main component
│   ├── main.tsx             # Entry point
│   └── index.css            # Global styles
├── index.html               # HTML template
├── package.json             # Dependencies
├── tsconfig.json            # TypeScript config
├── vite.config.ts          # Vite configuration
└── README.md               # Documentation
```

### Features

#### Welcome Screen
- Profile avatar display
- Feature highlights (AI-Powered, Real-time, 24/7, Personalized)
- Call-to-action buttons
- Chat preview

#### Chat Interface
- Real-time messaging
- Typing indicators
- Message timestamps
- User and AI avatars
- Smooth animations

#### About Modal
- Information about the service
- Technology stack
- Security features
- Performance metrics

### Security Features Implemented

✅ **Input Sanitization** - Prevents XSS attacks
✅ **CSRF Protection** - Token-based security
✅ **Secure API Client** - Encrypted communication
✅ **Error Handling** - Safe error messages
✅ **Session Management** - Auto-logout on 401
✅ **Content Security** - No inline scripts

### Performance Optimizations

✅ **Code Splitting** - Automatic chunk splitting
✅ **Lazy Loading** - Components load on demand
✅ **Tree Shaking** - Unused code removed
✅ **Minification** - Production bundles optimized
✅ **Caching** - Browser cache strategies
✅ **CDN Ready** - Optimized for distribution

### Building for Production

```bash
# Create optimized production build
npm run build

# Output directory: ./dist
# Upload dist/ folder to your hosting
```

### Deployment Options

1. **Vercel** (Recommended)
   - Connect GitHub repository
   - Auto-deployments
   - Zero-config

2. **Netlify**
   - Similar to Vercel
   - Easy integration
   - Great performance

3. **AWS S3 + CloudFront**
   - Upload dist/ to S3
   - CloudFront for CDN
   - Enterprise-grade

4. **GitHub Pages**
   - Free hosting
   - Use gh-pages package
   - Perfect for portfolios

5. **Traditional Hosting**
   - FTP upload dist/
   - Works with any server
   - Full control

### Troubleshooting

#### Port 5173 already in use?
```bash
# Use different port
npm run dev -- --port 3000
```

#### Module not found errors?
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

#### TypeScript errors?
```bash
# Type checking
npx tsc --noEmit

# Fix TypeScript config issues
npx tsc --init
```

#### Slow performance?
- Run `npm run build` to check bundle size
- Use `vite --debug` for detailed analysis
- Check network tab in browser DevTools

### Browser DevTools Tips

1. **React DevTools**
   - Install Chrome extension
   - Inspect component hierarchy
   - Debug props and state

2. **Network Tab**
   - Monitor API calls
   - Check response times
   - Verify security headers

3. **Performance Tab**
   - Measure rendering time
   - Identify bottlenecks
   - Optimize animations

### Customization Guide

#### Change Colors

Edit `src/components/WelcomeScreen.css`:
```css
.welcome-container {
  background: linear-gradient(135deg, #your-color-1 0%, #your-color-2 100%);
}
```

#### Update Profile Avatar

Edit `src/components/WelcomeScreen.tsx`:
```tsx
<img 
  src="your-image-url.jpg"
  alt="Your Name"
/>
```

#### Modify Chat Messages

Edit `src/components/ChatInterface.tsx`:
```tsx
const [messages, setMessages] = useState<Message[]>([
  // Add your sample messages
])
```

#### Add New Features

1. Create component in `src/components/`
2. Style with CSS file
3. Import in `src/App.tsx`
4. Add state management if needed

### Testing

```bash
# Run tests (if configured)
npm test

# Test specific file
npm test -- ChatInterface.tsx

# Coverage report
npm test -- --coverage
```

### Performance Monitoring

```bash
# Lighthouse report
npm run build
npm run preview
# Open http://localhost:5173 and run Lighthouse in DevTools
```

### Getting Help

1. Check `README.md` for overview
2. Review component JSDoc comments
3. Check browser console for errors
4. Inspect network requests
5. Contact project maintainer

### Next Steps

1. ✅ Install dependencies
2. ✅ Start development server
3. ✅ Explore the application
4. ✅ Customize colors and content
5. ✅ Connect to real API
6. ✅ Deploy to production

### Additional Resources

- **React**: https://react.dev
- **Vite**: https://vitejs.dev
- **TypeScript**: https://www.typescriptlang.org
- **Tailwind CSS** (optional): https://tailwindcss.com

---

**Everything is set up and ready to go! Happy coding! 🚀**
