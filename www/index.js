//import * as wasm from "wasm-game-of-life";
import { get_total } from "wasm-game-of-life";

// wasm.greet();
// const { get_total } = wasm;

const getTotal = (num1, num2) => {
    let total = 0;
    for (let i = 0; i < num1; i++) {
        for (let j = 0; j < num2; j++) {
            total += j;
        }
    }
    return total;
}

/////////////////////////////////////////////////////////////
/// Load Time Comparison
/////////////////////////////////////////////////////////////
// console.time("wasm");
// console.log(get_total(50000));
// console.timeEnd("wasm");

// console.time("js");
// console.log(getTotal(50000));
// console.timeEnd("js");



/////////////////////////////////////////////////////////////
/// Execution Time Comparison
/////////////////////////////////////////////////////////////
const b1 = document.createElement("button");
b1.setAttribute("style", "margin-right: 10px");
var b1text = document.createTextNode("JS-TEST");
b1.appendChild(b1text);
b1.addEventListener("click", () => {
    console.time("js");
    console.log(getTotal(6000, 1000));
    console.timeEnd("js");
});


const b2 = document.createElement("button");
var b2text = document.createTextNode("WASM-TEST");
b2.appendChild(b2text);
b2.addEventListener("click", () => {
    console.time("wasm");
    console.log(get_total(6000, 1000));
    console.timeEnd("wasm");
});


document.body.appendChild(b1);
document.body.appendChild(b2);


/////////////////////////////////////////////////////////////