# Iconic Soundboard

A premium soundboard application featuring iconic brand sounds.

## 🚀 Getting Started

This project is built with React and Vite.

### Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)

### Installation

1.  Navigate to the project directory:
    ```bash
    cd iconic_soundboard
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

3.  Start the development server:
    ```bash
    npm run dev
    ```

## 🔊 Adding Sounds

Currently, the sound files are placeholders. To make the app functional, you need to add the actual sound files (MP3 format recommended) to the `public/assets/sounds/` directory:

- `netflix.mp3`
- `hbo.mp3`
- `playstation.mp3`
- `intel.mp3`
- `mcdonalds.mp3`
- `bmw.mp3`

## 📱 building for Mobile (Android/iOS) to deployment

We recommend using [Capacitor](https://capacitorjs.com/) for mobile deployment.

1.  Initialize Capacitor:
    ```bash
    npm install @capacitor/core @capacitor/cli
    npx cap init
    ```

2.  Build the web app:
    ```bash
    npm run build
    ```

3.  Add platforms:
    ```bash
    npm install @capacitor/android @capacitor/ios
    npx cap add android
    npx cap add ios
    ```

4.  Sync and Open:
    ```bash
    npx cap sync
    npx cap open android
    # or
    npx cap open ios
    ```

## 💻 Building for Desktop (Mac/Windows)

We recommend using [Electron](https://www.electronjs.org/).

1.  Install Electron:
    ```bash
    npm install --save-dev electron
    ```

2.  Create a `main.js` electron entry point (see Electron docs).

3.  Update `package.json` to point to `main.js`.

4.  Run with Electron.

## 🛠️ Tech Stack

- **React**
- **Vite**
- **CSS3** (Variables, Grid, Flexbox, Animations)
