const root = document.getElementById("root");
const loadBackground = document.getElementById("loadBackground");
const loadText = document.getElementById("loadText");
const fileButton = document.getElementById("fileButton");


setInterval(() => {
   root.style.display = "flex";
}, 6500);

setInterval(() => {
   loadBackground.style.background = "rgba(0,0,0,0)";
}, 7000);

fileButton.addEventListener('click' , function () {

   let colorRandom1 = '#' + parseInt(Math.random() * 0xffffff).toString(16);
   let colorRandom2 = '#' + parseInt(Math.random() * 0xffffff).toString(16);
   
   root.classList.add('animationEle');

   root.style.background = `linear-gradient(290deg, ${colorRandom1}, ${colorRandom2})`;
});


