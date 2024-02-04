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

let image = document.createElement('img');
image.setAttribute('src' , '../../uploads/dog2.jpeg');
image.className = "image";
canvas.append(image);

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

   if (layer2.childElementCount > 0) {
      removeChildren();
      
   } else {
      
   }

   Counter1++

   if (Counter1 === 1) {
   let colorRandom1 = '#' + parseInt(Math.random() * 0xffffff).toString(16);


   layer2.style.display = "flex";
   dropMenu.style.height = "400px";

   let box1 = document.createElement("div");
   box1.className = "IconsBox";
   layer2.append(box1);

   let imageCrop = document.createElement("div");
   imageCrop.innerHTML = "crop_original";
   imageCrop.className = "material-icons iconsSize1";
   box1.append(imageCrop);

   iconsSize1.style.color = colorRandom1;
   iconsSize1.style.opacity = "0.85";

   } else if (Counter1 === 2) {
      removeChildren();
      iconsSize1.style.color = "white";
      Counter1 = 0;
      layer2.style.display = "none";
      dropMenu.style.height = "200px";
   }
});

let Counter2 = 0

brightness.addEventListener("click" , function(){
   
   if (layer2.childElementCount > 0) {
      removeChildren();
      dropMenu.style.height = "200px";
      layer2.style.display = "none";
   } else {
      
   }

});