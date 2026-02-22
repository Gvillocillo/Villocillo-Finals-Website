# Vercel Deployment Guide

This guide walks you through deploying the Villocillo Finals Website to Vercel.

## Prerequisites

- GitHub account with this repository
- Vercel account (free tier available)
- Node.js 18+ installed locally

## Deployment Steps

### Option 1: Vercel Dashboard (Recommended)

1. **Connect Your Repository**
   - Go to [vercel.com](https://vercel.com)
   - Sign up or log in with GitHub
   - Click "New Project"
   - Select your GitHub repository

2. **Configure Project**
   - Framework: Vite
   - Root Directory: `./react-restapi`
   - Build Command: `npm run build`
   - Output Directory: `dist`

3. **Environment Variables**
   - Add any environment variables from `.env.example`
   - Example: `VITE_API_URL=https://your-api.com`

4. **Deploy**
   - Click "Deploy"
   - Your site will be live in minutes!

### Option 2: Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   cd react-restapi
   vercel
   ```

3. **Follow the prompts** to configure your project

## Project Configuration

### vercel.json
Contains build outputs and routing configuration:
- Build command
- Output directory
- Redirect rules for API proxying

### vercel.config.js
Advanced configuration for:
- Static file serving
- SPA routing (all routes serve index.html)

### package.json
- `vercel:build` script for custom build logic
- Engines specification for Node.js version

## Post-Deployment

1. **Test Your Site**
   - Visit your Vercel URL
   - Test portfolio page at `/portfolio`
   - Test API page at `/api`

2. **Custom Domain** (Optional)
   - Add domain in Vercel Settings
   - Update DNS records as shown in Vercel

3. **Environment Variables**
   - Update in Vercel Dashboard → Settings → Environment Variables
   - Redeploy after changes

4. **Analytics & Monitoring**
   - View in Vercel Dashboard
   - Monitor performance and deployments

## Monitoring Deployments

1. Each push to main branch triggers auto-deploy
2. View deployment history in Vercel Dashboard
3. Rollback to previous versions if needed
4. Check build logs for debugging

## Troubleshooting

### Build Fails
- Check `npm run build` works locally
- Review build logs in Vercel dashboard
- Ensure all dependencies are in package.json

### Routes Not Working
- Verify SPA routing in vercel.config.js
- Check React Router configuration in App.jsx
- Ensure index.html is in dist/

### API Calls Failing
- Check API URL in environment variables
- Verify CORS settings on your API
- Use vercel.json redirects for same-origin requests

### Styling Not Loading
- Verify CSS imports in components
- Check Bootstrap CDN links in index.html
- Clear browser cache

## Environment Variables

Set these in Vercel Dashboard:

| Variable | Example | Purpose |
|----------|---------|---------|
| VITE_API_URL | https://api.example.com | REST API endpoint |
| VITE_ENVIRONMENT | production | App environment |

## Performance Tips

1. **Enable Caching**
   - Configure cache headers in vercel.json

2. **Optimize Images**
   - Use optimized image formats
   - Compress before uploading

3. **Monitor Bundle Size**
   - Check build output for large dependencies
   - Use dynamic imports for code splitting

4. **Use Edge Functions** (Advanced)
   - Serverless functions for custom logic
   - Authentication middleware

## Rollback

If you need to revert to a previous version:
1. Go to Deployments in Vercel Dashboard
2. Find the successful deployment
3. Click the `...` menu
4. Select "Promote to Production"

## Support

- Vercel Docs: https://vercel.com/docs
- React Router Docs: https://reactrouter.com
- Vite Docs: https://vitejs.dev

## Next Steps

- [ ] Connect custom domain
- [ ] Set up monitoring
- [ ] Configure auto-deployments
- [ ] Add authentication
- [ ] Implement backend API
