# Design System Preview

A component library built from your Figma design tokens.

## What's Inside

- **Components**: Buttons, Cards, Forms
- **Colors**: Full color palette with light/dark themes
- **Typography**: Heading and body styles
- **Spacing**: Visual spacing scale

## Local Development

1. Install dependencies:
```bash
npm install
```

2. Start dev server:
```bash
npm run dev
```

3. Open browser to `http://localhost:5173`

## Deploy to Vercel

1. Push this code to your GitHub repository
2. Go to vercel.com
3. Click "New Project"
4. Import your `design-system-preview` repository
5. Click "Deploy"

## Update Tokens

Your tokens are in `src/tokens/tokens.json`. When you update them in Figma and push to GitHub, replace this file and the components will automatically use the new values.

## Theme Switching

The app includes light/dark theme toggle. Themes are defined in your `tokens.json` under the `light` and `dark` keys.
