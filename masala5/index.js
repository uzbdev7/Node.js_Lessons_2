import proccessInfo from "./process.js";
import memoryInfo from "./memory.js";
import uptimeInfo from "./uptime.js";

export function showAll(){
    return {
         ishVaqti : uptimeInfo(),
         xotira : memoryInfo(),
         ProcessInfo : proccessInfo(),
         
    }
}