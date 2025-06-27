# Terminal Portfolio Project

This project is a **Terminal Portfolio** built with Astro. It provides an interactive terminal-like interface where users can navigate, explore various commands, and learn about the developer through a set of predefined commands that open different links and display information.

## 🚀 Project Structure

Inside of your Terminal Portfolio project, you'll see the following folders and files:

```text
/
├── public/
│   ├── favicon.svg
│   └── profile.svg          # Profile picture
├── src/
│   ├── components/
│   │   └── Terminal.astro   # Main terminal component
│   ├── data/
│   │   └── profile.json     # Personal data configuration
│   ├── layouts/
│   │   └── Layout.astro     # Base layout
│   └── pages/
│       └── index.astro      # Main page
├── astro.config.mjs
└── package.json
```

**Key Files to Customize:**
- `src/data/profile.json` - Your personal information, social links, and bio
- `src/components/Terminal.astro` - Terminal interface and command logic
- `public/profile.svg` - Your profile picture

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 🔧 Customization Guide

1. **Profile Customization:**
   - Update `src/data/profile.json` to modify personal details, bio, welcome message, and social links.
   - Example:
     ```json
     {
       "name": "Your Name",
       "title": "Your Title",
       ...
     }
     ```

2. **Adding/Editing Commands:**
   - Modify `src/components/Terminal.astro` to add new commands or change existing ones.
   - Commands are defined in the JavaScript section near `executeCommand` function.

3. **Styling:**
   - Customize CSS in `src/components/Terminal.astro` to modify the terminal's appearance.
   - Styles are defined within `<style>` tags.

4. **Running and Building:**
   - Use the following npm scripts for development and production:
     - `npm run dev` - Starts the development server.
     - `npm run build` - Builds the project for production.
     - `npm run preview` - Previews the production build.

## 🌐 GitHub Pages Deployment

This project is configured to deploy automatically to GitHub Pages. To set up deployment for your own repository:

### 1. Update astro.config.mjs

Modify the `astro.config.mjs` file with your GitHub username and repository name:

```javascript
// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://YOUR_GITHUB_USERNAME.github.io',
  base: '/YOUR_REPOSITORY_NAME',
  build: {
    assets: 'assets'
  }
});
```

**Replace:**
- `YOUR_GITHUB_USERNAME` with your actual GitHub username
- `YOUR_REPOSITORY_NAME` with your repository name

**Example:**
```javascript
export default defineConfig({
  site: 'https://johndoe.github.io',
  base: '/my-terminal-portfolio',
  // ...
});
```

### 2. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** tab
3. Scroll down to **Pages** section
4. Under **Source**, select **GitHub Actions**
5. The deployment workflow is already configured in `.github/workflows/deploy.yml`

### 3. Deploy

- **Automatic:** Push to the `main` branch triggers automatic deployment
- **Manual:** Go to **Actions** tab and run the "Deploy to GitHub Pages" workflow manually

### 4. Access Your Site

Once deployed, your site will be available at:
```
https://YOUR_GITHUB_USERNAME.github.io/YOUR_REPOSITORY_NAME
```

**Note:** The first deployment may take a few minutes. Check the **Actions** tab for deployment status.

### 5. Custom Domain Setup (Optional)

If you want to use your own custom domain instead of the default GitHub Pages URL:

#### A. Update astro.config.mjs for Custom Domain

```javascript
// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://yourdomain.com',  // Your custom domain
  base: '/',                       // Root path for custom domain
  build: {
    assets: 'assets'
  }
});
```

#### B. Configure DNS Settings

In your domain registrar's DNS settings, add these records:

**For Apex Domain (yourdomain.com):**
```
Type: A
Name: @
Value: 185.199.108.153

Type: A
Name: @
Value: 185.199.109.153

Type: A
Name: @
Value: 185.199.110.153

Type: A
Name: @
Value: 185.199.111.153
```

**For Subdomain (www.yourdomain.com):**
```
Type: CNAME
Name: www
Value: YOUR_GITHUB_USERNAME.github.io
```

#### C. Add CNAME File

Create a `CNAME` file in the `public/` directory:

```bash
echo "yourdomain.com" > public/CNAME
```

#### D. Enable Custom Domain in GitHub

1. Go to your repository **Settings** → **Pages**
2. Under **Custom domain**, enter your domain name
3. Check **Enforce HTTPS** (recommended)
4. Save the settings

#### E. Verify Domain

- DNS propagation can take up to 24-48 hours
- Check your domain status in GitHub Pages settings
- Your site will be accessible at `https://yourdomain.com`

**Important Notes:**
- Replace `yourdomain.com` with your actual domain
- Replace `YOUR_GITHUB_USERNAME` with your GitHub username
- The `CNAME` file will be included in your build and deployment
