import os from "os";
export default function uptimeInfo() {
    let uptime = os.uptime(); 
    let hours = Math.floor(uptime / 3600);
    let minutes = Math.floor((uptime % 3600) / 60);
    let seconds = Math.floor(uptime % 60);

    let node = process.uptime();
    let nodeHours = Math.floor(node/3600);
    let nodeMinutes = Math.floor((node%3600)/60);
    let nodeSeconds = Math.floor(node%60);

    return `
    << Tizimni ishlab turgan vaqti>>

    Tizim ${hours} soat ${minutes} daqiqa ${seconds} sekunddan beri ishlayapti.
    Node.js umumiy: ${node} ==>  ${nodeHours} soat ${nodeMinutes} daqiqa ${nodeSeconds} sekunddan beri ishlayatti.`;
}
console.log(uptimeInfo())
