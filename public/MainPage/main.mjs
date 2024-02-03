let dropMenu = document.getElementById("dropMenu");
let dropDrag = document.getElementById("dropDrag");
let layer1 = document.getElementById("layer1");
let layer2 = document.getElementById("layer2");
let layer3 = document.getElementById("layer3");
let dragElement = document.getElementById("dragElement");

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

let draggedElement;

  function dragStart(event) {
    draggedElement = event.target;
    event.dataTransfer.setData('text/plain', ''); // Required for Firefox
  }

  function dragOver(event) {
    event.preventDefault();
  }

  function drop(event) {
    event.preventDefault();
    const targetElement = event.target;

    if (targetElement.classList.contains('draggable')) {
      const parent = targetElement.parentElement;
      const draggedIndex = Array.from(parent.children).indexOf(draggedElement);
      const targetIndex = Array.from(parent.children).indexOf(targetElement);

      if (draggedIndex < targetIndex) {
        parent.insertBefore(draggedElement, targetElement.nextSibling);
      } else {
        parent.insertBefore(draggedElement, targetElement);
      }
    }
  }