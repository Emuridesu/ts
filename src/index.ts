import { createInterface } from "readline";


const greeting ="hello,"
const target = "world"

console.log(greeting + target)

for(let i = 0; i < 10; i++){
console.log(i + "は10未満")
}

const bigint :bigint = (123n + 456n) * 2n
console.log(bigint)

console.log("hello \u20bb world")

const yes: boolean = true
const no: boolean = false

console.log(yes, no)

const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('数値を入力してください:', (line) => {
    const Num = Number(line);

    console.log(Num + 1000)
    rl.close();
}) 