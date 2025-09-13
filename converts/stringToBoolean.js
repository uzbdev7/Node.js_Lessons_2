export default function stringToBoolean(){
    let input = process.argv[3]
    if(input === "true" || input === "True"){
        return true
    }else if(input === "false" || input === "False"){
        return false
    }else{
        return "Faqat (true yoki false) yoki (True yoki False) kiriting!";
    }

}
// $ node converts/main.js String false
// $ node converts/main.js String False

// $ node converts/main.js String True
//  node converts/main.js String true

