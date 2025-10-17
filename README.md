# 🚗 Self-Driving Car Simulation with Reinforcement Learning & Genetic Algorithms

> An interactive, fully-featured self-driving car simulation built with vanilla JavaScript, featuring AI cars that learn to navigate through traffic using neural networks, genetic algorithms, and reinforcement learning.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![No Dependencies](https://img.shields.io/badge/Dependencies-0-brightgreen)

---

## 📋 Table of Contents
- [Overview](#overview)
- [Features](#-key-features)
- [How It Works](#-how-it-works)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Controls](#-controls)
- [Contributing](#contributing)
- [License](#-license)

---

## Overview

This project demonstrates the power of **neuro-evolutionary algorithms** through an interactive visualization. 

A fleet of AI-controlled cars, each equipped with its own neural network "brain," learns to navigate a dynamic multi-lane highway populated with traffic. Using a genetic algorithm, the best-performing cars are selected to "reproduce," passing their optimized neural networks to the next generation with slight mutations. 

Watch as simple AI agents evolve into intelligent drivers capable of **lane-following**, **obstacle avoidance**, and **collision prevention**—all without any explicit programming of driving rules!

### Key Concepts

| Concept | Description |
|---------|-------------|
| 🧠 **Neural Networks** | Feed-forward networks control each car's behavior |
| 🧬 **Genetic Algorithm** | "Survival of the fittest" drives evolution across generations |
| 🎯 **Reinforcement Learning** | *(Coming soon!)* Q-learning and reward-based training will be integrated |
| 📡 **Ray-Casting Sensors** | Cars perceive their environment through simulated laser sensors |
| ⚡ **Real-Time Learning** | Visualize evolution happening in real-time |

---

## ✨ Key Features

- 🧠 **Neural Network Brain** — Each car is controlled by its own feed-forward neural network
- 🧬 **Genetic Algorithm** — Fittest cars reproduce and pass optimized networks to the next generation with mutations
- 📡 **Ray-Casting Sensors** — Cars use simulated sensors to detect road edges and other vehicles
- 🚗 **Dynamic Traffic** — Realistic multi-lane environment with varying vehicle speeds
- 👁️ **Real-Time Visualization** — Watch sensors, roads, cars, and AI decisions rendered live on canvas
- ⚡ **Zero Dependencies** — Pure vanilla JavaScript—no frameworks, libraries, or build tools required
- 🎮 **Manual Control Option** — Take the wheel and test the road yourself

---

## 🧠 How It Works

The simulation combines three key technologies working in harmony:

### 1️⃣ **Sensing the World** 📡

Each car is equipped with multiple ray-casting sensors that act like laser beams. These sensors measure:
- 📏 Distance to the **left road edge**
- 📏 Distance to the **right road edge**  
- 📏 Distance to **vehicles ahead**
- 📏 Distance to **obstacles in different directions**

### 2️⃣ **Making Decisions** 🤖

Sensor readings are fed as **inputs** into the car's neural network. The network processes this information and produces **four output values**:
- ⬆️ **Forward acceleration**
- ⬇️ **Backward acceleration**
- ⬅️ **Left steering**
- ➡️ **Right steering**

### 3️⃣ **Learning Through Evolution** 🧬

The genetic algorithm drives improvement over generations:

#### **Generation 0** — Random Chaos 🎲
- Population of 100 cars with **randomly initialized** neural networks
- Most crash immediately—there's no intelligence yet!

#### **Survival of the Fittest** 🏆
- All cars drive until they crash
- The car that travels the **farthest** is deemed "fittest"

#### **Reproduction & Mutation** 👶
- The fittest car's neural network weights are **saved**
- A new generation of 100 cars is created
- Each new car gets a **slightly mutated copy** of the best network
- Mutations introduce variation for natural selection

#### **Continuous Evolution** 📈
Process repeats across many generations with steady improvement:
  - **Early generations**: Random crashing 💥
  - **Middle generations**: Intelligent lane-following 🚗
  - **Later generations**: Collision avoidance mastery 🛡️
  - **Final generations**: Expert-level driving! 🏁

---

## 🚀 Getting Started

Get this simulation running in minutes—no build tools, dependencies, or complex setup required!

### Prerequisites

- 🌐 **Web Browser** — Chrome, Firefox, Edge, or Safari (any modern version)
- 💻 **Text Editor** — Optional, for code modifications

### Installation & Running

#### **Step 1: Clone the Repository**

```bash
git clone https://github.com/ParthShikhare19/Car_path_find_automation.git
cd Car_path_find_automation
```

#### **Step 2: Open in Your Browser**

Simply open `index.html` in your web browser:
- **Option A**: Double-click the `index.html` file
- **Option B**: Right-click → "Open with..." → Select your browser
- **Option C**: Drag & drop onto an open browser window

#### **Step 3: Watch It Evolve!** 🎬

The simulation starts immediately. Watch as cars learn to drive across generations!

> 💡 **Tip**: Refresh the page (F5) to restart the simulation with new random networks.

---

## 🎮 Controls

| Key | Action | Description |
|-----|--------|-------------|
| **↑ Arrow Up** | Accelerate | Move forward |
| **↓ Arrow Down** | Brake/Reverse | Move backward |
| **← Arrow Left** | Steer Left | Turn toward left |
| **→ Arrow Right** | Steer Right | Turn toward right |

> 💡 **Tip**: Manual control allows you to test drive and understand how the car interacts with sensors!

---

## 📂 Project Structure

```
Car_path_find_automation/
│
├── � index.html       # HTML entry point
├── 🎨 style.css        # Canvas and UI styling
│
├── �🚗 car.js           # Car physics, sensors, neural network integration
├── 🛣️  road.js         # Road lanes, rendering, and traffic logic  
├── 🕹️  controls.js     # Keyboard input handling for manual control
├── 🧠 main.js          # Main animation loop, initialization, GA logic
├── 🔧 utils.js         # Helper functions (interpolation, etc.)
│
├── � README.md        # This file
├── 📋 CONTRIBUTING.md  # Contributing guidelines
└── � LICENSE          # MIT License
```

### File Responsibilities

| File | Purpose |
|------|---------|
| **index.html** | HTML entry point that loads all scripts |
| **style.css** | Canvas styling and UI layout |
| **car.js** | Car class with physics engine, sensor calculations, and neural network integration |
| **road.js** | Road class defining lanes, boundaries, and rendering traffic |
| **controls.js** | Keyboard input management for manual car control |
| **main.js** | Genetic algorithm logic, generation management, and animation loop |
| **utils.js** | Utility functions like linear interpolation |

---

## 🔬 How the Genetic Algorithm Works

```
┌─────────────────────────────────────────────────┐
│  GENERATION N                                   │
│  ├─ 100 cars with neural networks              │
│  ├─ Each drives until collision                │
│  └─ Best car travels distance: X meters        │
└────────────────┬────────────────────────────────┘
                 │
                 ▼
    ┌─────────────────────────────────┐
    │ Save best car's network weights │
    └────────────┬────────────────────┘
                 │
                 ▼
    ┌──────────────────────────────────────────┐
    │ Create 100 new cars                      │
    │ Each: copy of best car + small mutation  │
    └────────────┬─────────────────────────────┘
                 │
                 ▼
    ┌─────────────────────────────────────┐
    │ GENERATION N+1                      │
    │ (Slightly smarter than previous!)   │
    └─────────────────────────────────────┘
```

---

## 📚 Learning Resources

Want to understand the concepts better? Check out these excellent resources:

- **🎥 Neural Networks**: [3Blue1Brown - Neural Networks](https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi)
- **🔗 Genetic Algorithms**: [Introduction to Genetic Algorithms](https://en.wikipedia.org/wiki/Genetic_algorithm)
- **📖 Machine Learning Basics**: [Google's ML Crash Course](https://developers.google.com/machine-learning/crash-course)


---

## 💡 Tips & Tricks

### Experiment with the Code

Modify the code to experiment with different parameters:

- **Population Size**: Edit `main.js` to change from 100 cars to 50 or 200 cars for faster/slower evolution
- **Mutation Rate**: Adjust `car.js` mutation rate for faster or slower learning speed
- **Sensor Configuration**: Change the number of sensors to see how perception affects learning
- **Road Difficulty**: Modify `road.js` lanes and traffic patterns for different challenges

### Observations to Make

Think about these questions as you watch the simulation evolve:

- 🤔 How many generations does it take for cars to stop crashing?
- 📈 Does behavior improve linearly or exponentially?
- 🧬 What happens if you increase or decrease the mutation rate?
- 👁️ How do different sensor configurations affect learning speed and quality?
- 🚗 What driving patterns emerge in later generations?

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

See [CONTRIBUTING.md](./CONTRIBUTING.md) for detailed guidelines.

### Ideas for Enhancement

Have ideas? Here are some features we'd love to see:

- 🎨 **Visualization**: Add real-time neural network activation display
- 📊 **Statistics**: Show generation count, best distance, and average fitness
- 🎯 **Track Variety**: Different road layouts, curves, and difficulty levels
- 💾 **Persistence**: Save/load functionality for best-performing networks
- 🔊 **Polish**: Sound effects and UI improvements
- 🎮 **Multiplayer**: Compete networks against each other
- 📱 **Responsive**: Mobile-friendly interface

---

## �📝 License

This project is open-source and available under the **MIT License**. See the [LICENSE](./LICENSE) file for details.

---

## 📧 Contact & Support

Have questions or suggestions?

- 📌 **Issues**: Check [existing issues](../../issues) or [create a new one](../../issues/new)
- 💬 **Discussions**: Open a discussion for feature requests or general questions
- 🐛 **Bug Reports**: Found a bug? Create an issue with detailed information

---

## 🙏 Acknowledgments

- 🎓 **Educational Purpose**: Built to teach evolutionary algorithms and neural networks
- 🧬 **Inspiration**: Powered by genetic algorithms and neuro-evolution concepts
- 👥 **Community**: Thanks to the open-source community for inspiration and support

---

## ✨ Show Your Support

If you found this project interesting or educational, please consider:

- ⭐ **Starring** the repository (it motivates us!)
- 🍴 **Forking** to create your own version
- 🤝 **Contributing** with improvements
- 📢 **Sharing** with others interested in AI and evolution

---

*Last updated: October 2025*
