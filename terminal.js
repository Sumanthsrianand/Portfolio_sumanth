const terminal = document.getElementById("terminal");

const commands = [
"$ whoami",
"Sumanthsrianand",
"$ nmap -sV target.com",
"Scanning open ports...",
"22/tcp open ssh",
"80/tcp open http",
"$ exploit testing",
"vulnerability detected"
];

let line = 0;
let charIndex = 0;

function typeLine(){

if(line >= commands.length) return;

if(charIndex < commands[line].length){

terminal.innerHTML += commands[line][charIndex];
charIndex++;

setTimeout(typeLine,40);

}

else{

terminal.innerHTML += "<br>";
line++;
charIndex = 0;

setTimeout(typeLine,300);

}

}

typeLine();
