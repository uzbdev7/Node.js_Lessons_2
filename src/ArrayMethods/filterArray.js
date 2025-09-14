export default function filterArray(){
    let input = JSON.parse(process.argv[3]);
    let condition = process.argv[4];
    if(Array.isArray(input)){
        return input.filter((x) => eval(condition));
    }
}


