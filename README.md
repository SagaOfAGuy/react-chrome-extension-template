# React Chrome Extension Boilerplate
Simple Chrome extension template to use react, tailwindcss, and daisyui

## Getting Started

1. `npm update` to install updated dependancies
2. `npm start` to start running the fast development mode Webpack build process that bundle files into the `dist` folder
3. `npm i --save-dev <package_name>` to install new packages

## Loading The Chrome Extension

1. Open Chrome and navigate to `chrome://extensions/`
2. Toggle on `Developer mode` in the top right corner
3. Click `Load unpacked`
4. Select the entire `dist` folder




## Project Structure
Chrome extension template code is inside of the `src` folder. It contains the following folders: 
- `background`: Contains the `background.ts` file 
- `contentScript`: Contains `contentScript.ts` or the Content Script file
- `options`: Contains `options.tsx` and `index.tsx`. `options.html` is generated from those 2 files when building the chrome extension
- `popup`: Contains `popup.tsx` , `popup.css`, as well as a few starter react components that are `Button.tsx` and `MainPage.tsx`. `popup.html` is generated from those 2 files when building the chrome extension
- `static`: Folder that contains assets like `icon.png` and the `manifest.json` file need to build the chrome extension
- `assets`: Folder that contains the `tailwind.css` file

```bash
.
├── LICENSE
├── package.json
├── package-lock.json
├── postcss.config.js
├── README.md
├── src
│   ├── assets
│   │   └── tailwind.css
│   ├── background
│   │   └── background.ts
│   ├── contentScript
│   │   └── contentScript.ts
│   ├── options
│   │   ├── index.tsx
│   │   └── options.tsx
│   ├── popup
│   │   ├── Button.tsx
│   │   ├── index.tsx
│   │   ├── MainPage.tsx
│   │   ├── popup.css
│   │   └── popup.tsx
│   └── static
│       ├── icon.png
│       └── manifest.json
├── tailwind.config.js
├── tsconfig.json
├── webpack.common.js
├── webpack.dev.js
└── webpack.prod.js

7 directories, 22 files
```


## Important Initial Steps

1. `git init` to start a new git repo for tracking your changes, do an initial base commit with all the default files
2. Update `package.json`, important fields include `author`, `version`, `name` and `description`
3. Update `manifest.json`, important fields include `version`, `name` and `description`
4. Update `webpack.commmon.js`, the title in the `getHtmlPlugins` function should be your extension name

## Production Build

1. `npm run build` to generate a minimized production build in the `dist` folder
2. ZIP the entire `dist` folder (e.g. `dist.zip`) via the command `zip -r dist.zip dist/`
3. Publish the ZIP file on the Chrome Web Store Developer Dashboard!

## Important Default Boilerplate Notes

- Folders get flattened, static references to images from HTML do not need to be relative (i.e. `icon.png` instead of `../static/icon.png`)
- Importing local ts/tsx/css files should be relative, since Webpack will build a dependancy graph using these paths
- Update the manifest file as per usual for chrome related permissions, references to files in here should also be flattened and not be relative
- In order to use DaisyUI with Tailwind, The `tailwind.config.js` file MUST include the snippet `require("daisyui")` inside of the plugins array: 

```bash
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
```

