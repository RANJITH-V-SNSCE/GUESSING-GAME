function resul(){
    var boxvalue1 = document.getElementById("num1")
    var boxvalue2 =document.getElementById("num2")
    var op =document.getElementById("out")
    var box1 = Number(boxvalue1.value)
    var box2 =Number(boxvalue2.value)
    var total =(box1+box2)
console.log(total)
    
    op.textContent=total
}