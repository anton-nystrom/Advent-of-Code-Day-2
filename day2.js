import { input } from "./puzzleInput.js";
let instructions = input;
instructions = instructions.split("\n");

console.log("Part One: " + partOne());
console.log("Part Two: " + partTwo());

function partOne() {
    let depth = 0;
    let horizontal = 0;
    let product = 0;

    for (let i = 0; i < instructions.length; i++) {
        const instruction = instructions[i];
        const amount = parseInt(instruction.slice(-1));
        const action = instruction.slice(0, -2);
        if(action === "forward") {
            horizontal += amount;
        }
        else if(action === "down") {
            depth += amount;
        }
        else if(action === "up") {
            depth -= amount;
        }
    };

    product = depth * horizontal;

    return (product);
};

function partTwo() {
    let depth = 0;
    let horizontal = 0;
    let product = 0;
    let aim = 0;
    
    for (let i = 0; i < instructions.length; i++) {
        const instruction = instructions[i];
        const amount = parseInt(instruction.slice(-1));
        const action = instruction.slice(0, -2);
        if(action === "forward") {
            horizontal += amount;
            depth += aim * amount;
        }
        else if(action === "down") {
            aim += amount;
        }
        else if(action === "up") {
            aim -= amount;
        }
    };

    product = depth * horizontal;

    return (product);
};