# Self-Driving Car Simulation with Reinforcement Learning

A feature-rich, interactive simulation built from the ground up in plain JavaScript. This project showcases a car that learns to navigate through dynamic, procedurally generated traffic using a neural network and a genetic algorithm.

### ► Abstract

This project provides a clear and interactive visualization of a neuro-evolutionary algorithm at work. A fleet of "smart" cars, each equipped with its own neural network "brain," attempts to navigate a multi-lane highway. The simulation uses a genetic algorithm to "evolve" the cars over generations, selecting the best-performing models and creating new offspring from their neural networks. The result is a compelling demonstration of how a simple set of rules can lead to the emergence of intelligent, lane-following, and collision-avoiding behavior.

### ✨ Key Features

 - **Neural Network Brain**: Each car is controlled by a feed-forward neural network.

 - **Genetic Algorithm**: The simulation implements a genetic algorithm where the "fittest" cars (those that travel the farthest) are selected to "reproduce" and pass their network weights to the next generation, with slight mutations.

 - **Sensor Simulation**: Cars use ray-casting sensors to detect the road borders and other vehicles, feeding this information into their neural network.

 - **Dynamic Traffic**: The environment is populated with other cars that move at varying speeds, creating a realistic and challenging environment for the AI to navigate.

 - **Real-Time Visualization**: The canvas displays the cars, road, traffic, and the AI's sensors in real-time. You can see what the car "sees."

 - **No Dependencies**: The entire project is written in vanilla JavaScript with no external libraries, making it lightweight and easy to run.

### 🧠 How It Works

The core of the project is the interaction between the car, its sensors, and its neural network.

 - Sensing the World: The car is equipped with several sensors that act like laser beams. These sensors detect the distance to the edge of the road and to any nearby traffic.

 - Making Decisions: The sensor readings are fed as inputs into the car's neural network. The network processes this information and produces four output values, which correspond to the four possible actions: move forward, backward, left, or right.

 - Learning to Drive (The Genetic Algorithm):

 - Generation 0: The simulation starts with a population of 100 cars, each with a randomly initialized neural network. Most of them will crash immediately.

 - Survival of the Fittest: We let the cars drive until they all crash. The car that travels the farthest down the road is deemed the "fittest."

 - Reproduction & Mutation: The neural network of the fittest car is saved. A new generation of 100 cars is then created, where each new car's network is a slightly mutated version of the best-performing car's network from the previous generation.

 - Evolution: By repeating this process over many generations, the cars' driving behavior gradually improves. They evolve from randomly crashing to adeptly navigating through dense traffic.

### 🚀 Getting Started

Running this simulation on your local machine is simple, as it requires no build tools or dependencies.

Prerequisites:

A modern web browser (like Chrome, Firefox, or Edge).

Installation & Usage:

Clone the repository:

``` git clone [https://github.com/YOUR_USERNAME/self-driving-car-js.git](https://github.com/YOUR_USERNAME/self-driving-car-js.git) ```


Navigate to the project directory:

``` cd self-driving-car-js ```


### Run the simulation:

Simply open the index.html file in your web browser. You can do this by double-clicking the file or right-clicking and selecting "Open with..." your browser of choice.

That's it! The simulation will start running immediately.

### 📂 Project Structure

The project is organized into several key JavaScript files to maintain a clean and understandable codebase:

 - 🚗 car.js           # Defines the Car class, its physics, sensors, and neural network.
 - 🛣️ road.js           # Defines the Road class, including lanes and drawing logic.
 - 🕹️ controls.js       # Handles user keyboard input for manual control.
 - 🧠 network.js        # Implements the neural network (levels, layers, weights).
 - 🔧 utils.js          # Contains helper functions like linear interpolation.
 - 📜 main.js           # The main script that initializes the canvas, cars, and runs the animation loop.
 - 📄 index.html        # The main HTML file that ties everything together.


### 📝 License

This project is open-source and available under the MIT License.
