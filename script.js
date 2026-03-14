/* BACKGROUND ANIMATION */

const canvas=document.getElementById("bg");
const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

let nodes=[];

for(let i=0;i<50;i++){
nodes.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
vx:(Math.random()-0.5)*0.7,
vy:(Math.random()-0.5)*0.7
});
}

function draw(){

ctx.fillStyle="rgba(0,0,0,0.3)";
ctx.fillRect(0,0,canvas.width,canvas.height);

for(let i=0;i<nodes.length;i++){
for(let j=i+1;j<nodes.length;j++){

let dx=nodes[i].x-nodes[j].x;
let dy=nodes[i].y-nodes[j].y;
let dist=Math.sqrt(dx*dx+dy*dy);

if(dist<120){

ctx.strokeStyle="rgba(56,189,248,0.2)";
ctx.beginPath();
ctx.moveTo(nodes[i].x,nodes[i].y);
ctx.lineTo(nodes[j].x,nodes[j].y);
ctx.stroke();

}

}
}

for(let n of nodes){

ctx.fillStyle="#38bdf8";
ctx.beginPath();
ctx.arc(n.x,n.y,2,0,Math.PI*2);
ctx.fill();

n.x+=n.vx;
n.y+=n.vy;

if(n.x<0||n.x>canvas.width)n.vx*=-1;
if(n.y<0||n.y>canvas.height)n.vy*=-1;

}

requestAnimationFrame(draw);

}

draw();

window.addEventListener("resize",()=>{
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
});


/* NAVBAR */
function toggleMenu(){
const menu = document.getElementById("nav-links");
menu.classList.toggle("show");
}


/* PROJECT POPUP */

function openProject(project){

const popup = document.getElementById("project-popup");
const title = document.getElementById("popup-title");
const desc = document.getElementById("popup-description");

if(project === "matrix"){

title.innerText = "MatrixOS File Sorter";

desc.innerHTML = `
<p>
MatrixOS File Sorter is a desktop utility designed to automatically organize files into categorized folders. 
The application scans directories and sorts files based on their type, reducing manual effort and improving file management.
</p>

<p><strong>Technology Used:</strong></p>

<ol>
<li>Java</li>
<li>File I/O</li>
<li>CSV Data Handling</li>
<li>Desktop Application Architecture</li>
</ol>

<p></p>

<p class="project-github">
<a href="https://github.com/Allen-SV/MatrixOS" target="_blank">View on GitHub →</a>
</p>

`;

}

if(project === "ai"){

title.innerText = "AI Road Safety System";

desc.innerHTML = `
<p>
An AI-powered traffic monitoring system that uses computer vision to detect traffic violations, road hazards, and accidents in real time using CCTV cameras. 
It identifies unsafe driving behavior and sends alerts with evidence to improve road safety.
</p>

<p><strong>Technology Used:</strong></p>

<ol>
<li>Python</li>
<li>YOLOv8</li>
<li>OpenCV</li>
<li>Computer Vision</li>
<li>Email SMTP Alerts</li>
</ol>

<p></p>

<p class="project-github">
<a href="https://github.com/Allen-SV/ai-road-safety-system" target="_blank">View on GitHub →</a>
</p>

`;

}

popup.style.display = "flex";

}

function closeProject(){
document.getElementById("project-popup").style.display = "none";
}

