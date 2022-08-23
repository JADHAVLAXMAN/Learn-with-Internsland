let counts=setInterval(updated,800);
let upto=0;
function updated(){
    var count= document.getElementById("counter");
    count.innerHTML=++upto;
    if(upto===5)
    {
        clearInterval(counts);
    }
}