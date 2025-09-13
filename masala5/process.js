export default function processInfo() {
    return `
    <<Process Info>>
    
        ID: ${process.pid},
        Version: ${process.version},
        Platform: ${process.platform}
        `
    };
console.log(processInfo())

