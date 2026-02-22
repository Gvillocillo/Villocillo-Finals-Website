# 🚀 Quick Start Guide

Get your integrated website running in 2 minutes!

## 1️⃣ Install Dependencies
```bash
cd react-restapi
npm install
```

## 2️⃣ Start Development Server
```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## 3️⃣ View Your Pages
- **Portfolio (Default)**: http://localhost:5173
- **API Testing**: http://localhost:5173/api

## 4️⃣ Build for Production
```bash
npm run build
```

Output is in the `dist/` folder.

---

## What You Get

✅ **Personal Portfolio** - Your website integrated as React component  
✅ **REST API Page** - CRUD operations testing interface  
✅ **Bootstrap Styling** - Responsive design with your custom colors  
✅ **Vercel Ready** - Deploy with one click  
✅ **Vue Support** - Optional Vue.js components  
✅ **API Client** - Pre-configured axios with interceptors  

---

## Key Features

| Feature | What It Does |
|---------|-------------|
| React Router | Multi-page navigation without reloading |
| Axios Client | Simplified REST API calls with error handling |
| Environment Variables | Configure API endpoints easily |
| Vite | Lightning-fast dev server & builds |
| Bootstrap CDN | Professional responsive styling |

---

## File Locations

```
src/
├── App.jsx                       # Routes & page switching
├── components/
│   └── PersonalWebsite.jsx       # Your website component
├── services/
│   └── apiClient.js              # REST API client
└── personalWebsite.css           # Your website styles
```

---

## Using the API Client

```javascript
// In any component
import { postsAPI } from '../services/apiClient';

// Fetch data
const posts = await postsAPI.getAll();

// Create
await postsAPI.create({ title: 'Hello', body: 'World' });

// Update
await postsAPI.update(1, { title: 'Updated' });

// Delete
await postsAPI.delete(1);
```

---

## Deploy to Vercel

### Option A: Web Dashboard
1. Push code to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Connect your repo
4. Set root directory to `./react-restapi`
5. Click Deploy ✨

### Option B: CLI
```bash
npm install -g vercel
cd react-restapi
vercel
```

---

## Environment Setup

Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```

Edit `.env` with your values:
```
VITE_API_URL=https://your-api.com
VITE_AUTH_TOKEN=your-token
```

---

## Useful Commands

```bash
npm run dev        # Start dev server
npm run build      # Build for production
npm run preview    # Preview production build locally
npm run lint       # Check code quality
```

---

## Project Structure

```
react-restapi/
├── src/
│   ├── App.jsx                  # ← Main app & router
│   ├── components/
│   │   └── PersonalWebsite.jsx  # ← Your portfolio
│   ├── services/
│   │   └── apiClient.js         # ← API client
│   └── personalWebsite.css      # ← Your styles
├── public/
│   └── favicon.ico              # ← Your favicon
├── index.html                   # ← HTML template
├── package.json                 # ← Dependencies
├── vite.config.js               # ← Build config
├── vercel.json                  # ← Vercel config
├── .env.example                 # ← Env template
└── dist/                        # ← Build output (after build)
```

---

## Troubleshooting

**Port already in use?**
```bash
npm run dev -- --port 3000
```

**Dependencies issue?**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Build failing?**
```bash
npm run build  # Run locally to see errors
```

**Styles not showing?**
- Hard refresh the browser (Ctrl+Shift+R or Cmd+Shift+R)
- Check Browser DevTools
- Verify CSS imports in PersonalWebsite.jsx

---

## Next Steps

- [ ] Run `npm install` and `npm run dev`
- [ ] Visit Portfolio page
- [ ] Test API CRUD operations
- [ ] Connect your own API
- [ ] Deploy to Vercel
- [ ] Add more components

---

## Documentation

For detailed information:
- 📖 [Integration Guide](./INTEGRATION_GUIDE.md)
- 🚀 [Vercel Deployment](./VERCEL_DEPLOYMENT.md)
- 📝 [Integration Summary](./INTEGRATION_SUMMARY.md)

---

## Questions?

Check the component comments for explanations:
- `src/App.jsx` - Routing setup
- `src/components/PersonalWebsite.jsx` - Component structure
- `src/services/apiClient.js` - API usage examples

---

**Happy coding! 💻**
