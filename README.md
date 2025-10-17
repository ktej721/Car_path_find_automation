  # Self-Driving Car Simulation with Neuro-evolution

<div align="center">
 
A feature-rich, interactive simulation built from the ground up in plain JavaScript. This project showcases a car that learns to navigate through dynamic, procedurally generated traffic using a neural network and a genetic algorithm.

 
</div>

 

## 📋 Table of Contents

- [About The Project](#-about-the-project)
- [Key Features](#-key-features)
- [How It Learns: The Neuro-Evolution Cycle](#-how-it-learns-the-neuro-evolution-cycle)
- [Tech Stack](#️-tech-stack)
- [Getting Started](#-getting-started)
- [Controls](#-controls)
- [Contributing](#-contributing)
- [License](#-license)
- [Show Your Support](#-show-your-support)
- [Acknowledgments](#-acknowledgments)

---

## 📖 About The Project

This project provides a clear, real-time visualization of a **neuro-evolutionary algorithm** at work. A fleet of AI-controlled cars, each with its own neural network "brain," learns to navigate a dynamic multi-lane highway.

> Using a genetic algorithm, the simulation "evolves" the cars over generations, selecting the best-performing models to "reproduce." The result is a compelling demonstration of how intelligent, collision-avoiding behavior can emerge from simple rules, all without being explicitly programmed.

---

## ✨ Key Features

| Feature                 | Description                                                                                             |
| :---------------------- | :------------------------------------------------------------------------------------------------------ |
| **🧠 Neural Network** | A feed-forward network controls each car's actions based on real-time sensor data.                      |
| **🧬 Genetic Algorithm** | The "fittest" cars (those that travel farthest) pass their network weights to the next generation.      |
| **📡 Ray-Casting Sensors** | Cars perceive their environment using simulated sensors to detect road edges and other vehicles.         |
| **🚗 Dynamic Traffic** | A procedurally generated traffic system creates a challenging and unpredictable environment.            |
| **📊 Live Visualization** | The HTML5 canvas renders the cars, road, and sensor data, offering a real-time view into the AI's "mind." |
| **✅ Zero Dependencies** | Built entirely with **vanilla JavaScript, HTML, and CSS**. No frameworks or build tools required.       |

---

## 🤖 How It Learns: The Neuro-Evolution Cycle

The cars learn to drive through a process of simulated evolution, repeated over many generations.

<div align="center">

#### Generation `N`
`100 cars with unique neural networks drive until they crash.`
`The single best-performing car (farthest distance) is identified.`
⬇️
#### Selection & Reproduction
`The "brain" (network weights) of the best car is saved.`
`A new population of 100 cars is created.`
⬇️
#### Mutation
`Each new car receives a slightly mutated copy of the best car's brain.`
`This introduces random variations, allowing for new strategies to emerge.`
⬇️
#### Generation `N+1`
`The new generation is, on average, slightly better than the last.`
`The cycle repeats, leading to the evolution of complex driving skills.`

</div>

---

## 🛠️ Tech Stack

This project is intentionally kept simple to focus on the core algorithms.
* **Vanilla JavaScript (ES6+)**
* **HTML5 Canvas**
* **CSS3**

---

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites
You only need a modern web browser (e.g., Chrome, Firefox, Safari).

### Installation
1.  **Clone the repository:**
    ```sh
      git clone [https://github.com/YOUR_USERNAME/self-driving-car-js.git](https://github.com/YOUR_USERNAME/self-driving-car-js.git) 
    ```
2.  **Navigate to the project directory:**
    ```sh
    cd Car_path_find_automation
    ```
3.  **Launch the simulation:**
    Simply open the `index.html` file in your web browser. No web server or build step is required.

---

## 🎮 Controls

Manual control allows you to test the physics and sensor feedback yourself.

| Key            | Action          |
| :------------- | :-------------- |
| `↑` Arrow Up   | Accelerate      |
| `↓` Arrow Down | Brake / Reverse |
| `←` Arrow Left | Steer Left      |
| `→` Arrow Right| Steer Right     |

---

## 🤝 Contributing

Contributions are what make the open-source community an amazing place to learn and create. Any contributions you make are **greatly appreciated**.

Please see our **[CONTRIBUTING.md](CONTRIBUTING.md)** for detailed guidelines on the development process, coding standards, and how to submit pull requests.

### Ideas for Enhancement
* **📊 Statistics Panel**: Display generation count, best fitness, and average fitness in real-time.
* **💾 Persistence**: Add buttons to save and load the "brain" of the best-performing car.
* **🛣️ Track Variety**: Implement different road layouts, such as curves, intersections, or obstacles.

---

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.

---

## ✨ Show Your Support

If you found this project interesting or educational, please consider:
* ⭐ **Starring** the repository (it motivates us!)
* 🍴 **Forking** to create your own version
* 🤝 **Contributing** with improvements
* 📢 **Sharing** with others interested in AI and evolution

---

## 🙏 Acknowledgments

* 🎓 **Educational Purpose**: Built to teach evolutionary algorithms and neural networks.
* 🧬 **Inspiration**: Powered by genetic algorithms and neuro-evolution concepts.
* 👥 **Community**: Thanks to the open-source community for inspiration and support.
