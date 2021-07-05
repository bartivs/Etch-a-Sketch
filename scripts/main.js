const drawingContainer=document.getElementById("drawingContainer"); 
const pixel= document.createElement("div");
const pixel2= document.createElement("div");


let drawingDimensionPx=getComputedStyle(drawingContainer);
drawingDimensionPx=drawingDimensionPx.height;
drawingDimensionPx=drawingDimensionPx.replace("px","");
console.log(drawingDimensionPx);

let drawingGrid=24;
let pixelSize=Math.floor(drawingDimensionPx/drawingGrid);


drawingContainer.style.gridTemplateColumns=`repeat(${drawingGrid},${pixelSize}px)`;
drawingContainer.style.gridTemplateRows=`repeat(${drawingGrid},${pixelSize}px)`;

//grid generation 
fillGrid(drawingGrid,pixelSize);

//event listeners
const pixels=document.querySelectorAll(".pixel"); 
const reset=document.getElementById("reset");

reset.addEventListener("click",pixelsClear);
pixels.forEach( pixel  => pixel.addEventListener("mouseover",paintPixel));



function fillGrid(drawingGrid,pixelSize){
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
    pixel.classList.add("painted")
}

function pixelsClear(e){
    console.log(e);
    const pixels = document.querySelectorAll(".pixel");
    pixels.forEach( pixel => pixel.classList.remove("painted"))
}





