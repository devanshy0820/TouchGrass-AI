
# 🌿 TouchGrass AI
### Less Scrolling. More Living.

**TouchGrass AI** is an AI-powered outdoor adventure companion that encourages people to spend less time on their screens and more time exploring the real world.

Built using HTML, CSS, JavaScript, and an open-weight AI model, TouchGrass AI generates personalized outdoor quests based on a user's mood, interests, and available time.

Instead of endlessly scrolling through social media, users can discover small adventures, explore nature, complete outdoor challenges, and record their experiences.

> 🌎 The best part of life happens off-screen.

---

## 📌 Table of Contents

- [Overview](#-overview)
- [Problem Statement](#-problem-statement)
- [Our Solution](#-our-solution)
- [Features](#-features)
- [How It Works](#-how-it-works)
- [Screenshots](#-screenshots)
- [Technology Stack](#-technology-stack)
- [Open-Source AI](#-open-source-ai)
- [Project Structure](#-project-structure)
- [Installation and Setup](#-installation-and-setup)
- [How to Use](#-how-to-use)
- [Privacy](#-privacy)
- [Limitations](#-limitations)
- [Future Improvements](#-future-improvements)
- [Contributing](#-contributing)
- [License](#-license)
- [Author](#-author)

---

## 🌱 Overview

TouchGrass AI is a web application designed to turn free time into meaningful outdoor experiences.

The application combines a simple, responsive interface with browser-based AI inference to generate personalized outdoor activities.

Whether someone wants a peaceful walk, a photography challenge, a bird-watching session, or a little gardening adventure, TouchGrass AI helps them find something enjoyable to do outside.

### Our Mission

To make technology a tool that helps people reconnect with nature rather than keeping them glued to their screens.

### Project Theme

**Touch Grass — Build with Open-Source AI**

This project explores how open-weight AI models can be used to create practical applications that encourage real-world experiences.

---

## 🚨 Problem Statement

Smartphones and social media make entertainment accessible at any time. However, it can be difficult to decide what to do during free time without returning to familiar screen-based activities.

Some common challenges include:

- Spending excessive free time scrolling through social media.
- Finding it difficult to think of simple outdoor activities.
- Missing opportunities to explore nearby parks, gardens, and natural surroundings.
- Lacking motivation to take short breaks from screens.
- Wanting personalized activity suggestions without creating an account or relying on a paid AI service.

TouchGrass AI addresses these challenges by making outdoor exploration simple, accessible, and engaging.

---

## 💡 Our Solution

TouchGrass AI transforms a user's preferences into an actionable outdoor quest.

Users select:

- **Mood:** Chill, Adventurous, Curious, or Energetic.
- **Activity:** Nature exploration, Walking, Photography, Bird watching, Mindfulness, or Gardening.
- **Available time:** 10, 20, 30, or 60 minutes.

The application uses an open-weight language model to generate an outdoor challenge tailored to these selections.

If AI generation is unavailable or the model produces an invalid response, the application can provide a predefined activity instead.

Users can then follow a checklist, use a countdown timer, mark the activity complete, earn experience points, and save a personal field note.

---

## ✨ Features

### 1. 🤖 AI-Powered Quest Generation

Generate personalized outdoor activities using an open-weight language model.

Each quest can include:
- A creative title.
- A short description.
- A checklist of practical steps.
- An activity category.
- A suggested duration.

### 2. 🎭 Mood-Based Personalization

Choose a mood that reflects how you feel.

Available moods:
- 😌 Chill
- 🧭 Adventurous
- 🔎 Curious
- ⚡ Energetic

The selected mood helps guide the AI toward a suitable activity.

### 3. 🌳 Multiple Outdoor Activities

Explore different ways to spend time outside:

- Nature exploration
- Walking
- Photography
- Bird watching
- Mindfulness
- Gardening

### 4. ⏱️ Outdoor Countdown Timer

Use a countdown timer to dedicate a specific amount of time to an outdoor activity.

The timer supports starting, pausing, resuming, and restarting a session.

### 5. ✅ Interactive Quest Checklist

Every adventure includes a checklist of tasks.

Users can mark each step as completed and log the quest once all checklist items have been checked.

### 6. 🏆 XP and Gamification

Encourage consistent outdoor exploration with a simple reward system.

- Earn 50 XP for each completed quest.
- Track total completed quests.
- View your outdoor streak.
- Build a personal record of completed adventures.

### 7. 📓 Personal Outdoor Journal

Save a short note after completing an adventure.

The journal can record:
- The completed quest.
- The date of completion.
- Personal observations.
- Memorable outdoor experiences.

### 8. 💾 Local Progress Storage

The application uses browser LocalStorage to save XP, completed quests, and journal entries.

No account is required for the current version.

### 9. 📱 Responsive Interface

The interface adapts to different screen sizes, including desktop computers, tablets, and mobile phones.

### 10. 🔄 Fallback Quest System

If the AI model fails to load or its output cannot be parsed, the application can use predefined quests.

This allows users to continue exploring the app even when AI generation is unavailable.

---

## ⚙️ How It Works

The application follows a simple workflow:

1. Open TouchGrass AI.
2. Select a mood.
3. Choose an outdoor activity.
4. Select the available time.
5. Generate a personalized quest.
6. Review the quest instructions.
7. Go outside and complete the activity.
8. Check off the completed tasks.
9. Record an optional journal note.
10. Earn XP and review your progress.

The main objective is to minimize unnecessary screen time while making outdoor activities more approachable.

---

## 🛠️ Technology Stack

| Technology | Purpose |
|---|---|
| HTML5 | Structure and content |
| CSS3 | Layout, styling, animations, and responsive design |
| JavaScript | Application logic and interactivity |
| Transformers.js | Running supported machine-learning models in the browser |
| SmolLM2-360M-Instruct | Open-weight language model for quest generation |
| LocalStorage | Saving progress and journal entries |
| Python HTTP Server | Local development server |

### Frontend

The application uses vanilla HTML, CSS, and JavaScript without requiring a frontend framework.

### AI Integration

Transformers.js provides the model inference pipeline. The configured model is:

`onnx-community/SmolLM2-360M-Instruct`

The model is loaded through the Hugging Face Transformers.js ecosystem.

### Storage

The current version stores progress locally in the browser. It does not require a custom database or application server.

---

## 🧠 Open-Source AI

Open innovation is an important part of TouchGrass AI.

Instead of depending on a proprietary, paid AI inference API, the application is designed to run an open-weight language model directly in the user's browser.

### Why Open-Weight AI?

**1. Privacy**

Quest generation can happen locally in the browser, so user preferences do not need to be sent to a remote AI inference service.

**2. Lower Inference Costs**

Local inference does not require paying a model API provider for each generated quest. Users still need compatible hardware and may incur internet or hosting costs when downloading or serving the model.

**3. Model Flexibility**

The model can potentially be replaced with another compatible model, provided its architecture, format, license, and runtime requirements are supported.

**4. Learning and Experimentation**

Developers can inspect the implementation, experiment with prompts, compare models, and investigate fine-tuning or other customization approaches.

**5. Offline Potential**

After the model and application dependencies have been downloaded and made available locally, offline operation may be possible.

However, fully offline use must be tested with the exact browser, caching configuration, model files, and runtime dependencies.

### Open-Source Components

- Transformers.js documentation: https://huggingface.co/docs/transformers.js
- SmolLM2 model card: https://huggingface.co/HuggingFaceTB/SmolLM2-360M-Instruct
- ONNX Community model: https://huggingface.co/onnx-community/SmolLM2-360M-Instruct

**Licensing note:** Open weights and open-source software are not identical concepts. Check the license of the exact model repository, its weights, and every dependency before redistribution or commercial use.

---

## 📂 Project Structure

```text
touchgrass-ai/
│
├── index.html
│   └── Main webpage and application structure
│
├── style.css
│   └── Styling, colors, responsive layout, and UI components
│
├── script.js
│   └── AI integration, quest generation, timer,
│       XP system, journal, and LocalStorage
│
└── README.md
    └── Project documentation
```

---

## 🚀 Installation and Setup

Follow these steps to run TouchGrass AI locally.

### Prerequisites

Make sure you have:

- A modern browser such as Chrome, Edge, or Firefox.
- Python 3 installed, or another local HTTP server.
- An internet connection for the initial model and library downloads.
- Sufficient memory and compatible browser hardware for the selected model.

### Step 1: Clone the Repository

Replace `YOUR_USERNAME` with your GitHub username.

```bash
git clone https://github.com/YOUR_USERNAME/touchgrass-ai.git
```

### Step 2: Navigate to the Project

```bash
cd touchgrass-ai
```

### Step 3: Start a Local Server

```bash
python3 -m http.server 8000
```

### Step 4: Open the Application

Visit:

http://localhost:8000

### Step 5: Load the AI Model

Click the **Load AI** button and wait for the model to download and initialize.

The first launch may take some time depending on your internet connection, browser, and hardware.

### Step 6: Generate Your First Quest

Choose your mood, select an activity, choose your available time, and click **Generate my quest**.

If model loading fails, the application can fall back to predefined activities.

---

## 🎮 How to Use

### Generate an Adventure

Choose your preferred mood, activity, and available time. The application attempts to generate a personalized quest with AI.

### Complete the Checklist

Read the instructions and check off each step as you complete it.

### Start the Timer

Use the timer to keep track of your intended outdoor session.

### Record Your Experience

After completing the quest, write an optional note describing what you discovered.

### Earn XP

Mark the adventure complete to receive 50 XP.

### Track Your Progress

Your saved quests and journal notes will appear in the history section.

Your data is stored in the current browser profile, so it may not automatically appear on another device or browser.

---

## 🔐 Privacy

Privacy is a key design consideration.

The current application:

- Does not require a user account.
- Stores progress using browser LocalStorage.
- Performs quest generation locally when the model is successfully loaded.
- Does not intentionally send quest preferences to a remote AI inference API.
- Does not include a custom application backend.

### Important Privacy Considerations

The application loads its JavaScript library and model from external hosting services. Those services may receive ordinary network information when assets are downloaded.

LocalStorage is not encrypted storage. Other people with access to the same browser profile may be able to view or clear saved information.

For a stronger offline and privacy-focused deployment, the application could bundle its dependencies and model assets locally and be tested with the network disconnected.

---

## ⚠️ Limitations

TouchGrass AI is an early-stage project, and the current implementation has some limitations.

- AI output quality depends on the selected model.
- Small language models may return invalid JSON or repetitive suggestions.
- Model loading and generation speed vary by device and browser.
- The fallback system does not provide personalized AI generation.
- LocalStorage data remains tied to the browser profile.
- The application does not currently provide verified live weather, maps, or location-aware route recommendations.
- The timer is a basic browser countdown and is not a guaranteed background timer.
- Model caching alone does not guarantee fully offline operation.

Users should choose safe, accessible locations and respect local rules and wildlife when completing outdoor activities.

---

## 🔮 Future Improvements

TouchGrass AI can be expanded in several directions.

### 🌿 Nature Recognition
Add an open-weight vision model to help users identify plants and leaves from photographs, with uncertainty clearly communicated.

### 🐦 Bird Identification
Explore open audio-classification models for identifying bird calls during outdoor walks.

### 🗺️ Outdoor Route Recommendations
Introduce safe walking routes and nature locations using suitable map data and routing tools.

### 🌦️ Weather-Aware Quests
Recommend activities based on local weather and conditions.

### 📴 Fully Offline Mode
Bundle or cache all required application assets and model files, then verify the app works without a network connection.

### 👥 Community Challenges
Allow users to participate in shared outdoor challenges and nature-discovery events.

### 📊 Personal Progress Dashboard
Add weekly summaries, activity trends, and more detailed adventure statistics.

### 🎨 Customizable Quests
Let users specify accessibility requirements, preferred environments, and additional interests.

### 🧠 Model Comparison
Evaluate different open-weight models for output quality, speed, memory usage, and offline performance.

---

## 🤝 Contributing

Contributions, ideas, bug reports, and improvements are welcome.

### How to Contribute

1. Fork the repository.
2. Create a new branch.
3. Make your changes.
4. Test the application in a local browser.
5. Commit your changes.
6. Open a pull request describing your contribution.

Example:

```bash
git checkout -b feature/new-outdoor-quest
git add .
git commit -m "Add new outdoor quest"
git push origin feature/new-outdoor-quest
```

Please keep privacy, accessibility, safety, and the project's outdoor-first philosophy in mind when contributing.

---

## 📜 License

This project does not automatically inherit the license of its AI model or dependencies.

If you intend to make this project open source, consider selecting a suitable software license, such as the MIT License, and adding a `LICENSE` file to your repository.

Before publishing, verify that the chosen license is compatible with the dependencies and model artifacts you distribute.

---

## 👨‍💻 Author

**Your Name**

Student Developer | Computer Science Engineering | AI & ML

Interested in building practical applications with web technologies and open-weight AI.

GitHub: https://github.com/YOUR_USERNAME

---

## 🌍 Final Thought

Technology should not only help us explore the digital world. It should also encourage us to experience the real one.

TouchGrass AI uses open-weight AI to make outdoor exploration easier, more personal, and more engaging.

**Less scrolling. More living. More discovering. More outside.** 🌿

If you like the idea, give the repository a ⭐ and help make outdoor exploration more accessible.