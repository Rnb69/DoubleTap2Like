var bigheart =   document.getElementById('bigheart');
var smallheart = document.getElementById('smallheart');
var con =  document.querySelector("#container");

con.addEventListener("dblclick", function(){
    bigheart.style.transform = 'translate(-50%,-50%) scale(1)'
    setTimeout(heartTimeout, 1000);
})

function heartTimeout(){
    bigheart.style.transform = 'translate(-50%,-50%) scale(0)';
}

smallheart.addEventListener("click", function(){
    if(smallheart.style.color == 'black'){
        smallheart.style.color = 'red';
    } else {
        smallheart.style.color = 'black';
    }
})
