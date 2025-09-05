# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a Terminal Portfolio - an interactive terminal-style web interface built with Astro that simulates a command-line experience. Visitors can type commands to learn about the developer, navigate to social links, and explore projects through a retro terminal aesthetic.

## Development Commands

```bash
# Start development server with hot reload at localhost:4321
npm run dev

# Build production site to ./dist/
npm run build

# Preview the production build locally
npm run preview

# Run Astro CLI commands
npm run astro add
npm run astro check
```

## Project Architecture

### Core Components

**`src/components/Terminal.astro`** - The main terminal component that handles:
- Terminal UI rendering with authentic terminal styling
- Command parsing and execution (`executeCommand` function)
- Command history navigation (up/down arrows)
- Dynamic output generation based on profile data
- Real-time typing animations and cursor blinking

**`src/data/profile.json`** - Personal configuration file containing:
- Basic profile information (name, title, bio)
- Terminal prompt customization
- Available commands and their descriptions
- Social links with associated URLs and commands
- Skills list and extended about information

### Terminal Command System

Commands are processed in the `executeCommand` function within `Terminal.astro`:

- **Information commands**: `about`, `whoami`, `skills` - Display personal information
- **Link commands**: `github`, `linkedin`, `resume`, etc. - Open external URLs
- **System commands**: `help`, `clear` - Terminal functionality
- **Error handling**: Unknown commands display helpful error messages

### Styling & UX

- Monospace font (`Fira Code`, `Monaco`, `Menlo`) for authentic terminal feel
- Green-on-black color scheme with accent colors for different text types
- Responsive design with mobile-friendly terminal sizing
- Accessibility features (reduced motion support, high contrast mode)
- Keyboard navigation and click-to-copy command functionality

## Configuration

### Profile Customization

Edit `src/data/profile.json` to modify:

```json
{
  "name": "Your Name",
  "title": "Your Title", 
  "prompt": "user@domain:~$",
  "social_links": [
    {
      "label": "GitHub 🚀",
      "url": "https://github.com/username",
      "command": "github",
      "description": "Explore my code repositories"
    }
  ]
}
```

### Site Configuration

`astro.config.mjs` contains deployment settings:
- `site`: Your domain (https://irfansp.dev)
- `base`: Base path for GitHub Pages (currently '/' for custom domain)

## Deployment

### GitHub Pages Deployment

Automatic deployment is configured via `.github/workflows/deploy.yml`:

1. **Trigger**: Pushes to `main` branch or manual workflow dispatch
2. **Build**: Node.js 18, `npm ci`, `npm run build`
3. **Deploy**: Uploads `./dist` to GitHub Pages

**Custom Domain Setup**:
- `CNAME` file in `public/` directory specifies custom domain
- DNS A records point to GitHub Pages IP addresses
- `astro.config.mjs` configured with custom domain and root base path

### Manual Deployment

```bash
# Build and test locally
npm run build
npm run preview

# Deploy via GitHub Actions (push to main)
git push origin main
```

## Development Workflow

### Adding New Terminal Commands

1. **Add to profile.json**: Include command in `social_links` or create new command type
2. **Implement in Terminal.astro**: Add case to `executeCommand` switch statement
3. **Define behavior**: Create function to handle command output/action

### Customizing Terminal Appearance

- **Colors**: Modify CSS custom properties in Terminal.astro `<style>` section
- **Typography**: Adjust font-family stack in terminal container styles
- **Layout**: Modify terminal dimensions and responsive breakpoints

### Testing Terminal Functionality

```bash
# Start dev server and test interactively
npm run dev

# Test specific commands in browser terminal
# Verify command history (up/down arrows)
# Test responsive design on mobile
# Validate external links open correctly
```

## Important Files

- `src/components/Terminal.astro` - Main terminal interface and logic
- `src/data/profile.json` - Personal information and configuration
- `astro.config.mjs` - Astro configuration and deployment settings  
- `.github/workflows/deploy.yml` - GitHub Actions deployment workflow
- `public/CNAME` - Custom domain configuration for GitHub Pages
