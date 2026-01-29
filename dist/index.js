import { createInterface } from "readline";
const greeting = "hello,";
const target = "world";
console.log(greeting + target);
for (let i = 0; i < 10; i++) {
    console.log(i + "は10未満");
}
const bigint = (123n + 456n) * 2n;
console.log(bigint);
console.log("hello \u20bb world");
const yes = true;
const no = false;
console.log(yes, no);
const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.question('数値を入力してください:', (line) => {
    const Num = Number(line);
    console.log(Num + 1000);
    rl.close();
});
const x = 123;
const minusx = -x;
console.log(minusx);
const change = "12";
Number(change);
console.log(change);
const tasuchange = "123";
console.log(+tasuchange);
const left1 = -5, right1 = 0;
console.log(left1 < right1);
const left2 = -5, right2 = 0;
console.log(left2 > right2);
const left3 = 5, right3 = 0;
console.log(left3 < right3);
const left4 = 5, right4 = 0;
console.log(left4 > right4);
//# sourceMappingURL=index.js.map