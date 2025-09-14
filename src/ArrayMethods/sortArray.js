export default function sortArray(){
    let input = JSON.parse(process.argv[3])
    if(Array.isArray(input)){
       return input.sort((a,b) => a-b)
    } 
}
