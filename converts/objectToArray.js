export default function objectToArray(){
    let input = JSON.parse(process.argv[3])
    const arr = Object.entries(input)
    return arr;
}
// node converts/main.js Object '{"name":"Ali","age":30,"course":3,"Talim":"TATU"}