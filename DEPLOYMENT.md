# GitHub Pages Deployment Guide

## 🚀 Automatic Deployment Setup

Your UPKRAFT Dashboard is configured for automatic deployment to GitHub Pages.

### ✅ Current Configuration

- **Repository**: `Sujal-02/UpKraft_Assignment`
- **Base Path**: `/UpKraft_Assignment/`
- **Workflow**: `.github/workflows/deploy.yml`
- **Build Output**: `dist/spa/`

### 📋 Steps to Deploy

1. **Enable GitHub Pages**:
   - Go to your repository: `https://github.com/Sujal-02/UpKraft_Assignment`
   - Navigate to **Settings** → **Pages**
   - Under "Source", select **GitHub Actions**

2. **Push to Main Branch**:

   ```bash
   git add .
   git commit -m "Deploy UPKRAFT Dashboard"
   git push origin main
   ```

3. **Monitor Deployment**:
   - Go to **Actions** tab in your repository
   - Watch the "Deploy React App to GitHub Pages" workflow
   - Deployment takes ~2-3 minutes

4. **Access Your Site**:
   - Once deployed, visit: `https://sujal-02.github.io/UpKraft_Assignment/`

### 🔧 Workflow Features

- **Automatic Triggers**: Deploys on every push to `main` branch
- **Manual Triggers**: Can be triggered manually from Actions tab
- **Optimized Build**: Uses pnpm with caching for faster builds
- **SPA Routing**: Configured for React Router client-side navigation

### ⚠️ Important Notes

1. **Server APIs**: GitHub Pages only serves static files. The Express server routes (`/api/*`) won't work in production.

2. **Alternative Hosting**: For full-stack functionality, consider:
   - [Connect to Netlify](#open-mcp-popover) - Full-stack support
   - [Connect to Vercel](#open-mcp-popover) - Full-stack support

3. **Domain Changes**: If you rename your repository, update the `base` path in `vite.config.ts`:
   ```typescript
   base: mode === "production" ? "/NEW_REPO_NAME/" : "/",
   ```

### 🐛 Troubleshooting

- **404 Errors**: Make sure GitHub Pages source is set to "GitHub Actions"
- **Blank Page**: Check browser console for path errors
- **Build Fails**: Check Actions tab for detailed error logs
- **Wrong Base Path**: Ensure `vite.config.ts` base path matches your repo name

### 📁 Key Files

- `.github/workflows/deploy.yml` - GitHub Actions workflow
- `vite.config.ts` - Build configuration with base path
- `public/404.html` - SPA routing fallback
- `index.html` - Main HTML with SPA routing script

Your dashboard is ready to deploy! 🎉
