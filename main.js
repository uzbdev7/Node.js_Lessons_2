import * as obj1 from "./src/ArrayMethods/index.js"
import * as obj2 from "./src/StringMethods/index.js"

let choice = process.argv[2]
if(choice === "filter"){
    console.log(obj1.filterArray())
}else if(choice === "sort"){
    console.log(obj1.sortArray())
}else if(choice === "ASCII"){
    console.log(obj2.convertASCII())
}else if(choice === "uppercase"){
    console.log(obj2.ToUpper())
}else if(choice === "lowercase"){
    console.log(obj2.ToLower())
}else{
    console.log("Command not found..")
}




