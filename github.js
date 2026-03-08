const username="sumanthsrianand";

const container=document.getElementById("repo-container");

fetch(`https://api.github.com/users/${username}/repos`)
.then(res=>res.json())
.then(data=>{

data.slice(0,6).forEach(repo=>{

let div=document.createElement("div");

div.className="repo";

div.innerHTML=`

<h3>${repo.name}</h3>

<p>${repo.description || "Cybersecurity project"}</p>

<a href="${repo.html_url}" target="_blank">
View Repository
</a>

`;

container.appendChild(div);

});

});
