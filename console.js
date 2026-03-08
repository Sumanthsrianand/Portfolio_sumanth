const term = document.getElementById("terminal");

const cmd = {
help:"commands: help, whoami, skills, contact",
whoami:"Sumanthsrianand - Ethical Hacker",
skills:"Penetration Testing | Reverse Engineering | SOC Analysis",
contact:"Email: yourmail@email.com"
};

term.addEventListener("keydown",function(e){

if(e.key==="Enter"){

let text = term.innerText.split("$ ").pop().trim();

term.innerHTML += "<br>";

if(cmd[text]){
term.innerHTML += cmd[text];
}
else{
term.innerHTML += "command not found";
}

term.innerHTML += "<br>$ ";

}

});
