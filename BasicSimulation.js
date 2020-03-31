class Person {
    constructor(imgSrc, xPos, yPos, isMan){
        this.imgSrc = imgSrc;
        this.img = new Image();
        this.img.src = imgSrc;
        this.img.width = 40;
        this.img.height = 40;
        this.xPos = xPos;
        this.yPos = yPos;
        this.speed = 0.36;
        this.xVelocity = Math.random()*0.316;
        this.xVelocity=Math.random()<0.5?this.xVelocity:-this.xVelocity;
        this.yVelocity = Math.sqrt(Math.pow(this.speed, 2)-Math.pow(this.xVelocity, 2));
        this.yVelocity=Math.random()<0.5?this.yVelocity:-this.yVelocity;
        this.sick = false;
        this.timeSick = 0;
        this.healthy=true;
        this.recovered=false;
        this.man = isMan;
    }
    makeSick() {
        if(!this.recovered){
            this.healthy = false;
            this.sick = true;
            this.img.src = this.man?"images\\coronavirus\\sickMan.png":"images\\coronavirus\\sickWoman.png";
        }
    }
    makeRecovered(){
        this.healthy = false;
        this.sick = false;
        this.recovered = true;
        this.img.src = this.man?"images\\coronavirus\\recoveredMan.png":"images\\coronavirus\\recoveredWoman.png";
    }
    updateSpeed(speed){
        var ratio = speed/this.speed;
        this.xVelocity = this.xVelocity*ratio;
        this.yVelocity = this.yVelocity*ratio;
        this.speed = Math.sqrt(Math.pow(this.xVelocity, 2)+Math.pow(this.yVelocity, 2));
        ratio = this.xVelocity/this.yVelocity;
    }
    // img;
    // imgSrc;
    // xPos;
    // yPos;
    // xVelocity;
    // yVelocity;
    // speed;
    // man;
    // timeSick;
    // sick;
    // healthy;
    // recovered;
}
//Credit for isInViewPort to https://vanillajstoolkit.com/helpers/isinviewport/
function isInViewPort (elem) {
    var distance = elem.getBoundingClientRect();
    return (
        distance.top+elem.offsetHeight >= 0 &&
        distance.left+elem.offsetWidth >= 0 &&
        distance.bottom/2 <= (window.innerHeight || document.documentElement.clientHeight) &&
        distance.right/2 <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
window.addEventListener('load', function () {
    mainBasic();
  });
function mainBasic(){
    console.log("I HAVE RUN BASIC");
    var canvas = document.getElementById('basicCanvas');
    var context = canvas.getContext('2d');
    canvas.width = 24*40;
    canvas.height = 24*25;
    var population = new Array(60);
    var numSick = 1;
    var numHealthy = population.length-1;
    var numDead = 0;
    var numRecovered = 0;
    var mortalityRate = 2.5;
    var socialspeed = 0.36;
    var clock = 0;
    for(var i = 0; i<population.length; i++){
        var x = 50+(i%10)*92;
        var y = 50+Math.floor(i/10)*90;
        if(i%2==0){
            population[i] = new Person("images\\coronavirus\\man.png", x, y, true);
        }
        else{
            population[i] = new Person("images\\coronavirus\\woman.png", x, y, false);
        }
    }
    var randPerson = Math.floor(Math.random()*population.length)+1;
    population[randPerson].makeSick();
    var tempDisplay = setInterval(function(){
        context.clearRect(0, 0, canvas.width, canvas.height);
        for(var i = 0; i<population.length; i++){
            context.drawImage(population[i].img, population[i].xPos, population[i].yPos, 40, 40);
        }
    }, 10);
    var refresh;
    setTimeout(function(){
        clearInterval(tempDisplay);
        refresh = setInterval(frame, 10);
    }, 1500);
    document.getElementById("mortality").oninput = function(){
        document.getElementById("mortalityoutput").innerText = document.getElementById("mortality").value/10+"%";
        mortalityRate = document.getElementById("mortality").value/10;
    }
    document.getElementById("socialspeed").oninput = function(){
        document.getElementById("speedoutput").innerText = document.getElementById("socialspeed").value;
        socialspeed = document.getElementById("socialspeed").value/100;
        for(var i = 0; i<population.length; i++){
            population[i].updateSpeed(socialspeed);
        }
    }
    function frame(){
        document.getElementById("healthy").innerText = numHealthy;
        document.getElementById("sick").innerText = numSick;
        document.getElementById("recovered").innerText = numRecovered;
        document.getElementById("dead").innerText = numDead;
        document.getElementById("clock").innerText = parseFloat(Math.round(clock*10)/10).toFixed(1);
        if(isInViewPort(document.getElementById("basicCanvas"))){
            if(numSick!=0)
                clock+=0.01;
            if(numSick==0)
                clearInterval(refresh);
            for(var i = 0; i<population.length; i++){
                if(population[i].sick) population[i].timeSick+=1;
                if(population[i].timeSick==2000 && population[i].sick){
                    var willDie = Math.floor(Math.random()*100)+1<=mortalityRate?true:false;
                    if(willDie){
                        population.splice(i, 1);
                        numDead++;
                        numSick--;
                    }  
                    else {
                        population[i].makeRecovered();
                        numRecovered++;
                        numSick--;
                    }
                }
                population[i].xPos+=population[i].xVelocity;
                population[i].yPos+=population[i].yVelocity;
                if(population[i].xPos<=0-population[i].img.width/2+5)
                    population[i].xVelocity*=-1;
                if(population[i].xPos>=canvas.width-population[i].img.width/2-7)
                    population[i].xVelocity*=-1; 
                if(population[i].yPos<=0+population[i].img.height/2-20)
                    population[i].yVelocity*=-1;
                if(population[i].yPos>=canvas.height-population[i].img.height/2-15)
                    population[i].yVelocity*=-1;    
            }
            for(var i = 0; i<population.length; i++){
                var x1 = population[i].xPos;
                var y1 = population[i].yPos;
                //console.log("x1: "+x1+", y1: "+y1);
                for(var j = i+1; j<population.length; j++){
                    var x2 = population[j].xPos;
                    var y2 = population[j].yPos;
                    //console.log("x2: "+x2+", y2: "+y2);
                    //if (x2 > w1 + x1 || x1 > w2 + x2 || y2 > h1 + y1 || y1 > h2 + y2){  return false;
                    if(!(x2 > 20+x1 || x1 > x2 + 20 || y2 > y1 + 20|| y1 > 20+y2)){
                        if(population[i].sick && !population[j].sick && !population[j].recovered){
                            population[j].makeSick();
                            numSick++;
                            numHealthy--;
                        }
                        if(population[j].sick && !population[i].sick && !population[i].recovered){
                            population[i].makeSick();
                            numSick++;
                            numHealthy--;
                        }
                        if(x1<x2+15&&x1>x2-15){
                            population[i].yVelocity*=-1;
                            population[j].yVelocity*=-1;
                        }else{
                            population[i].xVelocity*=-1;
                            population[j].xVelocity*=-1;
                        }
                    }
                }
            }
            context.clearRect(0, 0, canvas.width, canvas.height);
            for(var i = 0; i<population.length; i++){
                context.drawImage(population[i].img, population[i].xPos, population[i].yPos, 40, 40);
            }
        }
    }
}