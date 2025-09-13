import { add } from "./add.js"
import { sub } from "./sub.js"
import { mul } from "./mul.js"
import { div } from "./div.js"

const input = process.argv[3]
console.log(process.argv);

const valueA = parseInt(process.argv[2])
const valueB = parseInt(process.argv[4])

if (input == "+") {
  console.log(add(valueA, valueB));
} else if (input == "-") {
  console.log(sub(valueA, valueB));
} else if (input == "*") {  // buni test qilish uchun "*" qilib berishi kerak yoqsa ishlamaydi papkani qoshvoradi.
  console.log(mul(valueA, valueB));
} else if (input == ":") {
  console.log(div(valueA, valueB));
} else {
  console.log("Xatolik.");
}



