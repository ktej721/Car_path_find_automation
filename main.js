// Road

const canvas = document.getElementById("myCanvas");
canvas.width = 200;

// Car
const ctx = canvas.getContext("2d");
const car = new Car(100,100,30,50);
car.draw(ctx);

animate();

function animate(){
    car.update();
    canvas.height = window.innerHeight; // clears the canvas
    car.draw(ctx);
    requestAnimationFrame(animate);  
}