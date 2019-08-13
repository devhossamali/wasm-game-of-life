import * as wasm from "wasm-game-of-life";

// wasm.greet();
const { get_total } = wasm;

console.time("wasm");
console.log(get_total(50000));
console.timeEnd("wasm");


console.time("js");
console.log(getTotal(50000));
console.timeEnd("js");

function getTotal(num) {
    let total = 0;
    for (let i = 0; i < num; i++) {
        total += i;
    }
    return total;
}