# 🚗 Self-Driving Car Simulation

> An interactive, fully-featured self-driving car simulation built with vanilla JavaScript, featuring AI cars that learn to navigate through traffic using neural networks and genetic algorithms.

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

This project demonstrates the power of **neuro-evolutionary algorithms** through an interactive visualization. A fleet of AI-controlled cars, each equipped with its own neural network "brain," learns to navigate a dynamic multi-lane highway populated with traffic. Using a genetic algorithm, the best-performing cars are selected to "reproduce," passing their optimized neural networks to the next generation with slight mutations. Watch as simple AI agents evolve into intelligent drivers capable of lane-following, obstacle avoidance, and collision prevention—all without any explicit programming of driving rules!

### Key Concepts
- **Neural Networks**: Feed-forward networks control each car's behavior
- **Genetic Algorithm**: "Survival of the fittest" drives evolution across generations
- **Ray-Casting Sensors**: Cars perceive their environment through simulated laser sensors
- **Real-Time Learning**: Visualize evolution happening in real-time

---

## ✨ Key Features

- 🧠 **Neural Network Brain**: Each car is controlled by its own feed-forward neural network
- 🧬 **Genetic Algorithm**: Fittest cars reproduce and pass optimized networks to the next generation with mutations
- 📡 **Ray-Casting Sensors**: Cars use simulated sensors to detect road edges and other vehicles
- 🚗 **Dynamic Traffic**: Realistic multi-lane environment with varying vehicle speeds
- 👁️ **Real-Time Visualization**: Watch sensors, roads, cars, and AI decisions rendered live on canvas
- ⚡ **Zero Dependencies**: Pure vanilla JavaScript—no frameworks, libraries, or build tools required
- 🎮 **Manual Control Option**: Take the wheel and test the road yourself

---

## 🧠 How It Works

The simulation combines three key technologies working in harmony:

### 1️⃣ **Sensing the World** 📡
Each car is equipped with multiple ray-casting sensors that act like laser beams. These sensors measure:
- Distance to the left road edge
- Distance to the right road edge  
- Distance to vehicles ahead
- Distance to obstacles in different directions

### 2️⃣ **Making Decisions** 🤖
Sensor readings are fed as **inputs** into the car's neural network. The network processes this information and produces **four output values**, controlling:
- Forward acceleration
- Backward acceleration
- Left steering
- Right steering

### 3️⃣ **Learning Through Evolution** 🧬

#### **Generation 0** - Random Chaos
- Population of 100 cars with randomly initialized neural networks
- Most crash immediately—there's no intelligence yet!

#### **Survival of the Fittest** 🏆
- All cars drive until they crash
- The car that travels the **farthest** is deemed "fittest"

#### **Reproduction & Mutation** 👶
- The fittest car's neural network weights are saved
- A new generation of 100 cars is created
- Each new car gets a **slightly mutated copy** of the best network
- Mutations introduce variation for natural selection

#### **Continuous Evolution** 📈
- Process repeats across many generations
- Behavior gradually improves:
  - **Early generations**: Random crashing
  - **Later generations**: Intelligent lane-following & collision avoidance
  - **Final generations**: Expert-level driving!

---

## 🚀 Getting Started

Get this simulation running in minutes—no build tools, dependencies, or complex setup required!

### Prerequisites
- 🌐 A modern web browser (Chrome, Firefox, Edge, Safari)
- 💻 A text editor (for optional code modifications)

### Installation & Running

**1. Clone the Repository**
```bash
git clone https://github.com/ParthShikhare19/Car_path_find_automation.git
cd Car_path_find_automation
```

**2. Open in Browser**
Simply open `index.html` in your web browser:
- **Double-click** the `index.html` file, OR
- **Right-click** → "Open with..." → Select your browser

**3. Watch It Evolve!** 🎬
The simulation starts immediately. Watch as cars learn to drive!

---

## 🎮 Controls

| Key | Action |
|-----|--------|
| **↑ Arrow Up** | Accelerate |
| **↓ Arrow Down** | Brake/Reverse |
| **← Arrow Left** | Steer Left |
| **→ Arrow Right** | Steer Right |

*Manual control allows you to test drive and understand how the car interacts with sensors!*

---

## 📂 Project Structure

```
Car_path_find_automation/
├── 🚗 car.js           # Car physics, sensors, neural network integration
├── 🛣️  road.js          # Road lanes, rendering, and traffic logic  
├── 🕹️  controls.js      # Keyboard input handling for manual control
├── 🧠 main.js          # Main animation loop, initialization, GA logic
├── 🔧 utils.js         # Helper functions (interpolation, etc.)
├── 📄 index.html       # HTML entry point
├── 🎨 style.css        # Canvas and UI styling
└── 📖 README.md        # This file
```

### File Responsibilities

| File | Purpose |
|------|---------|
| **car.js** | Car class with physics engine, sensor calculations, and neural network integration |
| **road.js** | Road class defining lanes, boundaries, and rendering traffic |
| **controls.js** | Keyboard input management for manual car control |
| **main.js** | Genetic algorithm, generation management, animation loop |
| **utils.js** | Utility functions like linear interpolation |
| **index.html** | Entry point that loads all scripts |
| **style.css** | Visual styling for the canvas |

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

## � Learning Resources

Want to understand the concepts better?

- **Neural Networks**: [3Blue1Brown - Neural Networks](https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi)
- **Genetic Algorithms**: [Introduction to Genetic Algorithms](https://en.wikipedia.org/wiki/Genetic_algorithm)
- **Machine Learning Basics**: [Google's ML Crash Course](https://developers.google.com/machine-learning/crash-course)


---

## 💡 Tips & Tricks

### Experiment with the Code
- Modify `main.js` to change the population size (try 50 or 200 cars)
- Adjust mutation rate in `car.js` for faster/slower evolution
- Change the number of sensors to see how it affects learning
- Modify road lanes in `road.js` for different difficulty levels

### Observations to Make
- How many generations does it take for cars to stop crashing?
- Does behavior improve linearly or exponentially?
- What happens if you increase the mutation rate?
- How do different sensor configurations affect learning?

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
- 🎨 Add visualization for neural network activations
- � Display statistics (generation, best distance, average fitness)
- 🎯 Add different track layouts and difficulty levels
- 💾 Implement save/load functionality for best networks
- 🔊 Add sound effects and UI improvements

---

## �📝 License

This project is open-source and available under the **MIT License**. See the [LICENSE](./LICENSE) file for details.

---

## 📧 Contact & Support

Have questions or suggestions?
- 📌 Check existing [issues](../../issues)
- 🆕 [Create a new issue](../../issues/new)
- 💬 Open a discussion

---

## 🙏 Acknowledgments

- Inspired by the power of genetic algorithms and evolutionary computation
- Built with educational purposes in mind
- Thanks to the open-source community

---

**⭐ If you found this project helpful, please consider giving it a star! It motivates us to keep improving.**

---

*Last updated: October 2025*
