import os from "os"

const input = process.argv[2]

console.log("hostname" ,os.hostname())
console.log("arxitekturasi: ",os.arch())
console.log("jami hotira ",os.totalmem())
console.log("bosh hotira " ,os.freemem())
console.log("platform " ,os.platform())
console.log("turi " ,os.type())

if(input !== "check-memory"){
    console.log("Command not found.")
}else{
    let freeMem = os.freemem();
    let mb = (freeMem/1024/1024).toFixed(2);
    let gb = (freeMem/1024/1024/1024).toFixed(2);
    console.log(`Memory MB ==> ${mb} MB`)
    console.log(`Memory GB ==> ${gb} GB`)
}


