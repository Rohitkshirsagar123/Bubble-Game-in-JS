
var crebubble="";
var bubblern=0;
var timer=60;
var sethitnum;
var score=0;


// game start  function
function startgame(){
    document.querySelector("#startBtn").addEventListener("click",function(){
        document.querySelector("#gameSec").style.display="none";
        bubblecreat();
        settimer();
        sethit();

    });
}
// game start function call
startgame();

function bubblecreat(){
    var gbelowsec = document.querySelector(".gbelowsec");
    
    // Get the available width and height
    var availableWidth = gbelowsec.clientWidth;
    var availableHeight = gbelowsec.clientHeight;
    
    // Calculate the number of bubbles based on the available width and height
    var bubbleWidth = 45; // Width of each bubble
    var bubbleHeight = 45; // Height of each bubble
    var horizontalBubbles = Math.floor(availableWidth / (bubbleWidth + 10)); // 10px gap between bubbles
    var verticalBubbles = Math.floor(availableHeight / (bubbleHeight + 10)); // 10px gap between bubbles
    
    var numberOfBubbles = horizontalBubbles * verticalBubbles;


    for(var i=1;i<numberOfBubbles;i++){
        bubblern=Math.floor(Math.random()*10);
        crebubble+=`<div class="bubble">${bubblern}</div>`;
    }
    document.querySelector(".gbelowsec").innerHTML=crebubble;

}

// settimer function

function settimer(){
    var setintt=setInterval(function(){
       
        if(timer>0){
            timer=timer-1;
            // console.log("val",timer);
            document.querySelector("#timer").innerHTML=timer;
        }
        else{
            let d= document.querySelector('.gbelowsec');
           d.innerHTML=`<div id="gameSec">
                            <h1>Bubble Game</h1>
                            <h1>Highest Score is 320</h1>
                            <h1>Your score is ${score}</h1>  
                            <h1>You loose the game !!! &#128549;</h1> 
                            <button id="startBtn" onclick="startagain()">Start Again</button>
                            
                        </div>`;
                       
            clearInterval(setintt);
        }

    },1000);
}

// sethit function
function sethit(){
    // sethit
    sethitnum=Math.floor(Math.random()*10);
    document.querySelector("#sethit").innerHTML=sethitnum;
}

// score increase function
function increasescore(){
    score+=10;
    document.querySelector("#score").textContent=score;
}


//  start again function
function startagain() {
    console.log("yes");
    let d= document.querySelector('.gbelowsec');
    d.innerHTML=``;
    bubblecreat();
    timer=60;
    score=0;
    document.querySelector("#timer").innerHTML=timer;
    document.querySelector("#score").textContent=score;
    
    settimer()
    sethit();
    
  }
  

// event listener to select bubble
 document.querySelector("#belowsec").addEventListener("click",function(elem){
       var selbubbleval= elem.target.textContent;

       if(selbubbleval==sethitnum){
            increasescore();
            sethit();

       }
    });


// getbubbleElem();


// bubblecreat();

// settimer();
// sethit();