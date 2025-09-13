export default  function ArrayToObject(){
    let input = JSON.parse(process.argv[3]) // agar bu yerda json.parse qilinmasa keladigon qiymat string bolib qoladi.
    const obj = Object.fromEntries(input)
    return obj
}
// test uchun node converts/main.js Array '[["name","Axrorbek"],["yosh",25]]'
