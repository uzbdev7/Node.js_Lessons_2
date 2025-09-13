import os from "os";
export default function memoryInfo() {
    const memory = os.freemem();
    return `Bo'sh xotira: ${(memory / 1024 / 1024/1024).toFixed(2)} GB`;
}
console.log(memoryInfo())
