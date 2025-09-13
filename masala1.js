class CaesarCipher{
    constructor(shift){
        this.shift = shift % 26; 
    }
    encode(str){
        let string = ""
            for(let key of str){
                if(/[.,!?;: '"(){}\[\]\-\s]/.test(key)){
                    string += key;

                }else if(/[A-Z]/.test(key)){
                    let char = "A".charCodeAt(0);
                    let index = key.charCodeAt(0);
                    string += String.fromCharCode((index - char + this.shift)%26 + char);

                }else if(/[a-z]/.test(key)){
                    let char = "a".charCodeAt(0);
                    let index = key.charCodeAt(0);
                    string += String.fromCharCode((index - char + this.shift)%26 + char);

                }else{
                        string += key;
                }
            } 
            return `Encoding:>> ${str} ==> ${string}`;   
        }
    
        decode(str){
        let string = ""
            for(let key of str){
                if(/[.,!?;: '"(){}\[\]\-\s]/.test(key)){
                    string += key;

                }else if(/[A-Z]/.test(key)){
                    let char = "A".charCodeAt(0);
                    let index = key.charCodeAt(0);
                    string += String.fromCharCode(((index - char - this.shift + 26) % 26) + char);

                }else if(/[a-z]/.test(key)){
                    let char = "a".charCodeAt(0);
                    let index = key.charCodeAt(0);
                    string += String.fromCharCode(((index - char - this.shift + 26) % 26) + char);

                }else{
                        string += key;
                }
            } 
             return `Decoding:>> ${str} ==> ${string}`;   
        }
    }


const C =  new CaesarCipher(10);

console.log(C.encode("...Axrorbek..."))

console.log(C.decode("...Khbyblou..."))

