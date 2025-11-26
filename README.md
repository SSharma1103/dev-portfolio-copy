Dev Profile Saver Extension

A Chrome extension built with React, Vite, and Tailwind CSS that allows developers to save and quickly access their LeetCode, GitHub, and LinkedIn profiles.

🚀 Features

Chrome Storage Sync: Saves your links across devices if logged into Chrome.

Dark Mode UI: Clean, professional interface using Tailwind CSS.

Instant Access: Quick popup to view or edit your profile links.

🛠️ Installation & Setup

Since this is a browser extension, you cannot just "run" it like a normal website. Follow these steps:

1. Clone the Repository

git clone [https://github.com/SSharma1103/dev-profile-saver.git](https://github.com/YOUR_USERNAME/dev-profile-saver.git)
cd dev-profile-saver


2. Install Dependencies

npm install


3. Build the Extension

This compiles the React code into a format Chrome can understand.

npm run build


This will create a dist folder in your project root.

4. Load into Chrome

Open Chrome and navigate to chrome://extensions/.

Toggle Developer mode in the top right corner.

Click Load unpacked.

Select the dist folder created in step 3.

💻 Development

To make changes and test them live:

Run npm run watch (if configured) or simply rebuild after changes with npm run build.

Go to the extensions page and click the refresh icon on your extension.

📦 Tech Stack

React

Vite

Tailwind CSS

Chrome Storage API