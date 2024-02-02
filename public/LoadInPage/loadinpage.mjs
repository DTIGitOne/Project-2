const root = document.getElementById("root");
const loadBackground = document.getElementById("loadBackground");
const loadText = document.getElementById("loadText");
const sendButton = document.getElementById("sendButton");
const middle = document.getElementById("middle");
const inpFile = document.getElementById("inpFile");
const upload = document.getElementById("upload");

setInterval(() => {
   middle.style.display = "flex";
   loadText.style.left = "30px";
   loadText.style.top = "30px";
   loadText.style.fontSize = "50px";
   loadText.style.animationDuration = "1.5s";
   loadText.style.animationDelay = "0s";
}, 6500);

setInterval(() => {
   loadBackground.style.background = "rgba(0,0,0,0)";
}, 7000);

let roki = "roki";

sendButton.addEventListener('click' , function () {

   let colorRandom1 = '#' + parseInt(Math.random() * 0xffffff).toString(16);
   let colorRandom2 = '#' + parseInt(Math.random() * 0xffffff).toString(16);

   root.classList.add('animationEle');
   
   root.style.background = `linear-gradient(290deg, ${colorRandom1}, ${colorRandom2})`;
   root.style.backgroundSize = "300% 300%";
   
});

inpFile.addEventListener('change' , function(){
   if (inpFile.value !== "") {

      upload.style.transition = "opacity 1s";
      upload.style.opacity = "0";

      loadText.style.animationName = "moveing2";
      
      setInterval(() => {
         window.location.href = "../MainPage/main.html";
      }, 2200);
     
   } else {
      console.log('The condition is false.');
  }
});

export {roki};
/*
sendButton.addEventListener('submit' , e => {
   e.preventDefault();

   const endpoint = "upload.php";
   const formData = new FormData();

   formData.append("inpFile" , inpFile.files[0]);

   fetch(endpoint, {
      method: "post",
      body: formData
   }).catch(console.error);
});
*/