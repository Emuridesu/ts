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

//&&は値が入っていれば右側を返す。||は値が入っていれば左側を返す
rl.question('数値を入力してください:', (line) => {
    const Num = line && "名前なし"

    console.log(Num)
    rl.close();
});

// const change = "12"
// Number(change);

// console.log(change);

// const tasuchange= "123"

// console.log(+tasuchange)

// const left1 = -5, right1 = 0

// console.log(left1 < right1)

// const left2 = -5, right2 = 0

// console.log(left2 > right2)

// const left3 = 5, right3 = 0

// console.log(left3 < right3)

// const left4 = 5, right4 = 0

// console.log(left4 > right4)

// rl.question("パスワードを入力してください", (password) => {
//     if(password === "hogehoge"){
//         console.log("いらっしゃい。レミリア・スカーレットよ。")
//     }else{
//         console.log("誰？あなた？")
//     }
//     rl.close();
// })

//const a_name = "a" || nameのような式は使えない使うならnameとaを反対する
const a_name = "a" 
const b_name = "b"

const a = !!a_name;
const b = !!b_name;

console.log(!!a_name && !!b_name);
