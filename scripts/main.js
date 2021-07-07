

function fillGrid(drawingGrid){
    const drawingContainer=document.getElementById("drawingContainer"); 
    let drawingDimensionPx=getComputedStyle(drawingContainer);
   
    drawingContainer.innerHTML=""
    
    
    drawingDimensionPx=drawingDimensionPx.height;
    drawingDimensionPx=drawingDimensionPx.replace("px","");
    console.log(drawingDimensionPx);
    
    let pixelSize=Math.floor(drawingDimensionPx/drawingGrid);
   
    drawingContainer.style.gridTemplateColumns=`repeat(${drawingGrid},${pixelSize}px)`;
    drawingContainer.style.gridTemplateRows=`repeat(${drawingGrid},${pixelSize}px)`;
    
    for(let i=0; i< drawingGrid * drawingGrid ;i++){
        const pixel=document.createElement('div');
        pixel.classList.add("pixel");
        pixel.id=i;
        drawingContainer.appendChild(pixel);
    }
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
 console.log(e.target.value);
 let gridSize=Number(e.target.value); 
 fillGrid(gridSize);
}


const pixel= document.createElement("div");
const pixel2= document.createElement("div");




let drawingGrid=24;





//grid generation 
fillGrid(drawingGrid);

//event listeners
const pixels=document.querySelectorAll(".pixel"); 
const reset=document.getElementById("reset");
const matrixSizeSlider=document.getElementById("matrixSizeSlider");


pixels.forEach( pixel  => pixel.addEventListener("mouseover",paintPixel));
reset.addEventListener("click",pixelsClear);
matrixSizeSlider.addEventListener("change",changeGridSize);