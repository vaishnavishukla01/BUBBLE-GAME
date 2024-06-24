function makeBubbles(){
    var clutter="";

for(var i=1 ;i<=168 ;i++){
    var random= Math.floor(Math.random()*10);
    clutter += ` <div class="bubble">${random}</div>`
}

document.querySelector(".gbBtm").innerHTML=clutter;
}

makeBubbles();

var randomhit;
function hit(){

    randomhit=Math.floor(Math.random()*10);

    document.querySelector("#hitvalue").textContent=randomhit;

}
hit();

var score=0;
function getscore(){
   
    score += 10;
    console.log(score);

    document.querySelector("#scorevalue").textContent=score;

}

var clockcount=60;
function clock(){
 var timerstop=   setInterval(function(){
        if(clockcount>0){
            clockcount--;
        document.querySelector('#clockvalue').textContent=clockcount;
        }
        else{
            clearInterval(timerstop);
            document.querySelector(".gbBtm").innerHTML=`<h1>Game over</h1>
            <a href="/"><button>Restart</button></a>`;
        }

    },1000)
}

clock();

function bubblekill(){
    document.querySelector('.gbBtm').addEventListener("click",function(data){

        if(Number(data.target.textContent)=== randomhit){
            getscore();
            makeBubbles();
            hit();
        }
        else{
            
            makeBubbles();
            hit();
        }

    })

}

bubblekill();