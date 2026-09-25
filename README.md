# 🎱 Magic 8 Ball (Expo & React Native)

A fun, interactive, and lightweight mobile application built with **React Native** and **Expo SDK 54**, inspired by the classic Magic 8 Ball toy. 

Ask a question in your head, tap anywhere on the screen, and let the Magic 8 Ball reveal your fortune!

---

## ✨ Features

- 🎲 **Interactive Tap to Fortune**: Tap anywhere on the screen to roll the Magic 8 Ball and discover a random answer.
- 🎨 **Clean & Vibrant UI**: Styled with a soothing cyan background (`#e0f7fa`) and crisp visual assets.
- 📱 **Cross-Platform Support**: Runs seamlessly on iOS, Android, and Web platforms powered by Expo.
- ⚡ **Lightweight & Fast**: Built with React Hooks (`useState`), TypeScript, and React Native `TouchableOpacity` for optimal performance.

---

## 🛠️ Tech Stack

- **Framework**: [React Native](https://reactnative.dev/) (v0.81.5) with [Expo](https://expo.dev/) (v54.0.20)
- **Routing**: [Expo Router](https://docs.expo.dev/router/introduction/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: React Native `StyleSheet`

---

## 📁 Project Structure

```text
Magic8Ball/
├── app/
│   └── index.tsx          # Main interactive Magic 8 Ball component
├── assets/
│   └── ball/              # Magic 8 Ball image assets (ball1.png - ball5.png)
├── components/            # Reusable UI components
├── hooks/                 # Custom React hooks
├── package.json           # Dependencies and scripts
├── tsconfig.json          # TypeScript configuration
└── README.md              # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (v18+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Expo Go app](https://expo.dev/go) on your iOS/Android device (optional for physical testing)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/VeanceVancott-Vu/Magic8ball.git
   cd Magic8ball
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm start
   ```

4. **Run on target platform**:
   - **Android**: Press `a` in the terminal or run `npm run android`
   - **iOS**: Press `i` in the terminal or run `npm run ios`
   - **Web**: Press `w` in the terminal or run `npm run web`

---

## 🎮 How to Play

1. Think of a yes/no question.
2. Tap anywhere on the screen.
3. The Magic 8 Ball will cycle to one of 5 prediction outcomes!

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).