export function ToUpper(){
    let input = process.argv[3]
    return input.split("").map(char => {
        if(char !== char.toUpperCase()){
            return char.toUpperCase()
        }
    }).join("")
}

export function ToLower(){
    let input = process.argv[3]
    return input.split("").map(char => {
        if(char !== char.toLowerCase()){
            return char.toLowerCase()
        }
    }).join("")
}
