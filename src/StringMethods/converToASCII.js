export function convertASCII(){
    let input = process.argv[3]
    return input.split("").map(char =>{
        return char.charCodeAt(0)}).join("")
}

