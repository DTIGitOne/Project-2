let root = document.getElementById("root");
let dropMenu = document.getElementById("dropMenu");
let dropDrag = document.getElementById("dropDrag");
let layer1 = document.getElementById("layer1");
let layer2 = document.getElementById("layer2");
let layer3 = document.getElementById("layer3");
let dragElement = document.getElementById("dragElement");
let canvas = document.getElementById("canvas");
let crop = document.getElementById("crop");
let iconsSize1 = document.querySelector('.iconsSize1');
let brightness = document.getElementById("brightness");
let iconsSize2 = document.querySelector('.iconsSize2');
let cropWindow = document.getElementById("cropWindow");
let topMenu = document.getElementById("topMenu");
let bottom = document.getElementById("bottom");
let top1 = document.getElementById("top");
let cancelButton = document.getElementById("cancelButton");

let image = document.createElement('img');
image.setAttribute('src' , '../../uploads/dog2.jpeg');
image.className = "image";
canvas.append(image);
1
function getAverageColor(element) {
   return new Promise((resolve, reject) => {
      let canvas1 = document.createElement("canvas");
      let context = canvas1.getContext("2d");

      canvas1.width = element.clientWidth;
      canvas1.height = element.clientHeight;

      element.onload = function () {
          context.drawImage(element, 0, 0, canvas1.width, canvas1.height);

          let imageData = context.getImageData(0, 0, canvas1.width, canvas1.height).data;

          let sumRed = 0,
              sumGreen = 0,
              sumBlue = 0;

          for (let i = 0; i < imageData.length; i += 4) {
              sumRed += imageData[i];
              sumGreen += imageData[i + 1];
              sumBlue += imageData[i + 2];
          }

          let averageRed = Math.round(sumRed / (imageData.length / 4));
          let averageGreen = Math.round(sumGreen / (imageData.length / 4));
          let averageBlue = Math.round(sumBlue / (imageData.length / 4));

          resolve(`rgb(${averageRed}, ${averageGreen}, ${averageBlue})`);
      };

      element.onerror = reject; 

      element.src = "../../uploads/dog2.jpeg";
  });
}

let colorIcon;

getAverageColor(image)
    .then((color) => {
        colorIcon = color;
    })
    .catch((error) => {
        console.error(error);
    });


let menuCounter = 0;

dropDrag.addEventListener("click" , function() {

   menuCounter++

   if (menuCounter === 1) {
      dropMenu.style.display = "none";
   } else if (menuCounter === 2) {
      dropMenu.style.display = "flex";
      menuCounter = 0;
   }
   
});

function removeChildren() {
   while (layer2.firstChild) {
      layer2.removeChild(layer2.firstChild);
  }
}

let Counter1 = 0;

crop.addEventListener("click" , function(){
   //remove selected color on all other elements
   iconsSize2.style.color = "white";
   
   //remove other selected elements
   if (layer2.childElementCount > 0) {
      removeChildren();
      layer2.style.opacity = "1";
      Counter2 = 0;
   } 

   Counter1++

   //create elements 
   if (Counter1 === 1) {
   
   layer2.style.opacity = "1";
   
   iconsSize1.style.color = colorIcon;
   iconsSize1.style.opacity = "0.85";

   let box1 = document.createElement("div");
   box1.className = "IconsBox";
   layer2.append(box1);

   let crop1 = document.createElement("div");
   crop1.className = "material-icons iconsSize2";
   crop1.innerHTML = "crop";
   box1.append(crop1);
   
   //crop elements
   crop1.addEventListener('click' , function(){
      crop1.style.color = colorIcon;

      setInterval(() => {
   
      layer1.style.opacity = "1";

      topMenu.style.display = "none";
      bottom.style.display = "none";
      root.style.justifyContent = "center";
      top1.style.opacity = "0";
      
      }, 40);
      
      setInterval(() => {
         cropWindow.style.transition = "0.5s";
         top1.style.transition = "0.5s";
      }, 70);

      setInterval(() => {
         cropWindow.style.display = "flex";
         top1.style.opacity = "1";
         root.style.backgroundColor = "rgba(0,0,0,0.2)";

         let cropSelectDiv = document.createElement("div");
         cropSelectDiv.className = "cropSelectDiv";
         canvas.append(cropSelectDiv);

      }, 100);
   });

   
   //remove elements
   } else if (Counter1 === 2) {
      removeChildren();
      iconsSize1.style.color = "white";
      iconsSize2.style.color = "white";
      Counter1 = 0;
      Counter2 = 0;
      layer2.style.opacity = "1";
   }
});

let Counter2 = 0;

brightness.addEventListener("click" , function(){
   //remove selected color on all other elements
   iconsSize1.style.color = "white";
   
   //remove other selected elements
   if (layer2.childElementCount > 0) {
      removeChildren();
      layer2.style.opacity = "1";
      Counter1 = 0;
   } 

   Counter2++

   //create elements 
   if (Counter2 === 1) {
   
   layer2.style.opacity = "1";
   
   iconsSize2.style.color = colorIcon;
   iconsSize2.style.opacity = "0.85";

   let box1 = document.createElement("div");
   box1.className = "IconsBox";
   layer2.append(box1);

   let brightness1 = document.createElement("div");
   brightness1.className = "material-icons iconsSize2";
   brightness1.innerHTML = "brightness_4";
   box1.append(brightness1);
   
   //remove elements
   } else if (Counter2 === 2) {
      removeChildren();
      iconsSize1.style.color = "white";
      iconsSize2.style.color = "white";
      Counter1 = 0;
      Counter2 = 0;
      layer2.style.opacity = "1";
   }
});

