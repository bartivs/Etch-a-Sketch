
function createGrid(drawingGridSize){
    
    drawingContainer.style.gridTemplateColumns=`repeat(${drawingGridSize},1fr)`;
    drawingContainer.style.gridTemplateRows=`repeat(${drawingGridSize},1fr)`;
    
    for(let i=0; i< drawingGridSize * drawingGridSize ;i++){
        const pixel=document.createElement('div');
        pixel.classList.add("pixel");
        pixel.id=i;
        drawingContainer.appendChild(pixel);
    }
    
    const pixels=drawingContainer.querySelectorAll("div"); 
    pixels.forEach( pixel  => pixel.addEventListener("mouseover",paintPixel));
   
}
function paintPixel(e){
    const pixel= document.getElementById(e.target.id);
    const currentColor  =document.getElementById("colorSelector");
    console.log(e)
    pixel.style.backgroundColor=currentColor.value
}

function pixelsClear(e){
    console.log(e);
    const pixels = document.querySelectorAll(".pixel");
    const currentColor  =document.getElementById("colorSelector");
    pixels.forEach( pixel => pixel.style.backgroundColor= currentColor.value )
}

function changeGridSize(e){
 const slider= document.getElementById("matrixSizeSlider");
 console.log(slider.value) 
 let gridSize=Number(slider.value);

 const pixels=document.querySelectorAll(".pixel"); 
 pixels.forEach(pixel=> pixel.remove());

 const drawingContainer=document.getElementById("drawingContainer"); 
 let drawingDimensionPx=getComputedStyle(drawingContainer);

 createGrid(gridSize)
}

function updateGridSizeIndicator(e){
    const gridSizeDiv= document.getElementById("gridSize"); 
    gridSizeDiv.textContent=e.target.value;
}






let drawingGridSize=24;





//grid generation 
createGrid(drawingGridSize);

//event listeners

const reset=document.getElementById("reset");
const matrixSizeSet=document.getElementById("setSize");
const matrixSlider= document.getElementById("matrixSizeSlider");
reset.addEventListener("click",pixelsClear);
matrixSizeSet.addEventListener("click",changeGridSize);
matrixSizeSet.addEventListener("change",updateGridSizeIndicator);