import objectToArray from "./objectToArray.js";
import ArrayToObject from "./ArrayToObject.js";
import stringToBoolean from "./stringToBoolean.js";

let tanlov = process.argv[2]

if(tanlov === "Object"){
    console.log(objectToArray())
}else if(tanlov === "Array"){
    console.log(ArrayToObject())
}else if(tanlov === "String"){       
    console.log(stringToBoolean())
}

// node converts/main.js Object '{"name":"Ali","age":30,"course":3,"Talim":"TATU"}'

// test uchun  node converts/main.js Array '[["name","Axrorbek"],["yosh",25]]'

// $ node converts/main.js String false
// $ node converts/main.js String False

// $ node converts/main.js String True
//  node converts/main.js String true
