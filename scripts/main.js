const drawingContainer=document.getElementById("drawingContainer"); 
const pixel= document.createElement("div");
const pixel2= document.createElement("div");


let drawingDimensionPx=getComputedStyle(drawingContainer);
drawingDimensionPx=drawingDimensionPx.height;
drawingDimensionPx=drawingDimensionPx.replace("px","");
console.log(drawingDimensionPx);

let drawingGrid=24;





//grid generation 
fillGrid(drawingGrid,drawingDimensionPx);

//event listeners
const pixels=document.querySelectorAll(".pixel"); 
const reset=document.getElementById("reset");
const matrixSizeSlider=document.getElementById("matrixSizeSlider");


pixels.forEach( pixel  => pixel.addEventListener("mouseover",paintPixel));
reset.addEventListener("click",pixelsClear);
matrixSizeSlider.addEventListener("change",changeGridSize);

function fillGrid(drawingGrid,drawingDimensionPx){
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
    pixel.style.backgroundColor=currentColor.value
}

function pixelsClear(e){
    console.log(e);
    const pixels = document.querySelectorAll(".pixel");
    const currentColor  =document.getElementById("colorSelector");
    pixels.forEach( pixel => pixel.style.backgroundColor= currentColor.value )
}






