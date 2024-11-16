import * as readline from "node:readline";

export enum SNAKE_OBJECTS {
    AIR = "🟩",
    SNAKE_HEAD = "🐍",
    SNAKE_BODY = "🟫",
    APPLE = "🍎",
    GREEN_APPLE = "🍏",
    APPLE_JUICE = "🧃"
}

export class Snake {
    tableLength: number;
    middle: number;
    table: Array<Array<SNAKE_OBJECTS>>;
    snake: {
        direction: "UP" | "DOWN" | "LEFT" | "RIGHT" | "NONE";
        headPosition: { x: number; y: number };
        fps: number;
        bodyPosition: Array<{ x: number; y: number; }>;
        length: number;
    }
    score: number;
    options: {
        increaseFpsOnScoreUpdate: boolean;
        startingLength?: number;
        startingDirection?: "UP" | "DOWN" | "LEFT" | "RIGHT";
        startOnConstruction?: boolean;
    }
    constructor(options?: {
        tableLength?: number;
        fps?: number;
        increaseFpsOnScoreUpdate?: boolean;
        startingLength?: number;
        startingDirection?: "UP" | "DOWN" | "LEFT" | "RIGHT";
        startOnConstruction?: boolean;
    }) {
        this.tableLength = options?.tableLength ?? 5;
        this.middle = Math.ceil(this.tableLength / 2) - 1;
        this.table = Array.from({ length: this.tableLength }, () => Array(this.tableLength).fill(SNAKE_OBJECTS.AIR));
        this.table[this.middle][this.middle] = SNAKE_OBJECTS.SNAKE_HEAD;
        this.snake = {
            direction: options?.startingDirection ?? "RIGHT",
            headPosition: { x: this.middle, y: this.middle },
            fps: options?.fps ?? 2,
            bodyPosition: [],
            length: options?.startingLength ?? 0
        };
        this.score = 0;
        this.options = {
            increaseFpsOnScoreUpdate: options?.increaseFpsOnScoreUpdate ?? true,
            startingLength: options?.startingLength,
            startingDirection: options?.startingDirection,
            startOnConstruction: options?.startOnConstruction ?? true
        }

        if (this.options.startOnConstruction) this.start();
    }

    start(): void {
        this.listenInput();
        this.update();
        this.spawnObject(SNAKE_OBJECTS.APPLE);
    }

    spawnObject(item: SNAKE_OBJECTS, override = false, recursionCount = 0): void {
        const randomY = Math.floor(Math.random() * this.tableLength);
        const randomX = Math.floor(Math.random() * this.tableLength);
        if (
            this.table[randomY][randomX] !== SNAKE_OBJECTS.AIR
            && !override
            && recursionCount < 100 // damn! you must have bad luck (or that the table size is too small!)
        ) return this.spawnObject(item, override, recursionCount + 1); // retrying..
        this.table[randomY][randomX] = item;
    }

    displayTable(): void {
        console.clear();
        for (const row of this.table) {
            for (const element of row) {
                process.stdout.write(" " + element + " ");
            }
            process.stdout.write("\n");
        }
        console.log("SCORE:", this.score, "| PRESSED KEY:", this.snake.direction);
    }

    updateSnakePosition(x: number, y: number): void {
        if (
            x > this.tableLength - 1
            || y > this.tableLength - 1
            || x < 0
            || y < 0
            || this.table[y][x] === SNAKE_OBJECTS.SNAKE_BODY
        ) this.gameOverScreen();
        this.table[this.snake.headPosition.y][this.snake.headPosition.x] = SNAKE_OBJECTS.SNAKE_BODY;
        this.snake.bodyPosition.push({ x: this.snake.headPosition.x, y: this.snake.headPosition.y });

        if (this.snake.bodyPosition.length - 1 > this.snake.length) {
            const diff = (this.snake.bodyPosition.length - 1) - this.snake.length;
            for (let i = 0; i <= diff; i++) {
                const bodyPart = this.snake.bodyPosition[i];
                this.table[bodyPart.y][bodyPart.x] = SNAKE_OBJECTS.AIR;
                this.snake.bodyPosition.splice(i, i);
            }
        }

        if (this.table[y][x] === SNAKE_OBJECTS.APPLE) {
            this.score += 5;
            this.snake.length++;
            if (this.options.increaseFpsOnScoreUpdate) this.snake.fps += 0.10;
            this.spawnObject(SNAKE_OBJECTS.APPLE);

            const giveRandomLoot = Math.random() > 0.70;
            if (giveRandomLoot) {
                const loots = ["GREEN_APPLE", "APPLE_JUICE"];
                const randomLoot = loots[Math.floor(Math.random() * loots.length)];
                this.spawnObject(SNAKE_OBJECTS[randomLoot as keyof typeof SNAKE_OBJECTS]);
            }
        }

        if (this.table[y][x] === SNAKE_OBJECTS.GREEN_APPLE) {
            this.score += 10;
            this.snake.length += 2;
        }
        if (this.table[y][x] === SNAKE_OBJECTS.APPLE_JUICE) {
            this.score += 10;
            this.snake.length += 4;
        }

        this.table[y][x] = SNAKE_OBJECTS.SNAKE_HEAD;
        this.snake.headPosition = { x, y };
    }

    gameOverScreen(): void {
        console.clear();
        console.log("GAME OVER");
        console.log("⭐️ SCORE:", this.score);
        process.exit();
    }

    update(): void {
        setInterval(() => {
            if (this.snake.direction === "UP") {
                this.updateSnakePosition(this.snake.headPosition.x, this.snake.headPosition.y - 1);
            } else if (this.snake.direction === "DOWN") {
                this.updateSnakePosition(this.snake.headPosition.x, this.snake.headPosition.y + 1);
            } else if (this.snake.direction === "LEFT") {
                this.updateSnakePosition(this.snake.headPosition.x - 1, this.snake.headPosition.y);
            } else if (this.snake.direction === "RIGHT") {
                this.updateSnakePosition(this.snake.headPosition.x + 1, this.snake.headPosition.y);
            }

            this.displayTable()
        }, 1000 / this.snake.fps);
    }

    listenInput(): void {
        readline.emitKeypressEvents(process.stdin);
        process.stdin.setRawMode(true);

        process.stdin.on("keypress", (_, key) => {
            const allowedInputs = ["UP", "DOWN", "LEFT", "RIGHT"];
            const direction = key.name.toUpperCase();
            if (allowedInputs.includes(direction))
                this.snake.direction = direction;
        });
    }
}
