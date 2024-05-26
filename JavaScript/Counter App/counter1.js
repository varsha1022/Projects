let counterValue=document.getElementById("counterValue");
// console.log(counterValue);

function onIncrement(){
    let countValue=counterValue.textContent;
    // console.log(typeof countValue);
    // let updatedCounter=parseInt(countValue)+1//so convert to number datatype
    let updatedCounter=parseInt(countValue)+1
    //so convert to number datatype
    // console.log(typeof updatedCounter);
    // counterValue.textContent=updatedCounter+5
    counterValue.textContent=updatedCounter
    console.log(updatedCounter);
    // console.log(countValue+1);
    updateColor(countValue)  
}
// onIncrement()
function onDecrement(){
    let countValue=counterValue.textContent;
    let updatedCounter=parseInt(countValue)-1;
    counterValue.textContent=updatedCounter
    updateColor(countValue)
}
// onDecrement()
function onReset(){
    // let countValue=counterValue.textContent
    counterValue.textContent=0
    updateColor(0)
}
function updateColor(value){
if (value>0){
    counterValue.style.color="#10b50b"
}else if(value<0){
    counterValue.style.color="#cf1c08"
}else{
    counterValue.style.color="black"
}
}
// updateColor()