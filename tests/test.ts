import { Snake } from "../lib/Snake";

const snake = new Snake({
    tableLength: 10,
    startingLength: 10,
    startOnConstruction: false
});

snake.start();
