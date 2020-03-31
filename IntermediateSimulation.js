class NormPerson {
    constructor(xPos, yPos, isMan, age){
        this.age = age;

        this.xPos = xPos;
        this.yPos = yPos;
        this.homeX = xPos;
        this.homeY = yPos;
        this.speed = 0.36;
        this.xVelocity = 5;
        this.yVelocity = 5;
        this.travelTime = 0;
        this.isTravelling = false;
        this.goLeft = false;
        this.sick = false;
        //Where to move
        this.instructions = new Array();
        this.instructionsCopy = new Array();
        this.colorString = "rgb(130, 64, 255)";
        this.timeSick = 0;
        this.healthy=true;
        this.recovered=false;
        this.man = isMan;
        this.familyNum=-1;

        if(this.age<=9) this.mortality = 0;
        else if(this.age<=39) this.mortality = 0.002;
        else if(this.age<=49) this.mortality = 0.004;
        else if(this.age<=59) this.mortality = 0.013;
        else if(this.age<=69) this.mortality = 0.036;
        else if(this.age<=79) this.mortality = 0.08;
        else this.mortality = 0.148;
    }
    makeSick() {
        if(!this.recovered){
            this.healthy = false;
            this.sick = true;
            this.colorString = "rgb(254, 68, 69)";
        }
    }
    makeRecovered(){
        this.healthy = false;
        this.sick = false;
        this.recovered = true;
        this.colorString = "rgb(61, 190, 139)";
    }
    updateSpeed(speed){
        var ratio = speed/this.speed;
        this.xVelocity = this.xVelocity*ratio;
        this.yVelocity = this.yVelocity*ratio;
        this.speed = Math.sqrt(Math.pow(this.xVelocity, 2)+Math.pow(this.yVelocity, 2));
        ratio = this.xVelocity/this.yVelocity;
    }
    move(){
        if(this.travelTime>this.instructions[0]){
            if(this.travelTime<this.instructions[0]+this.instructions[1]){
                this.yPos+=this.yVelocity;
            } else if(this.travelTime<this.instructions[0]+this.instructions[1]+this.instructions[2]){
                if(this.goLeft) this.xPos-=this.xVelocity;
                else this.xPos+=this.xVelocity;
            } else if(this.travelTime<this.instructions[0]+this.instructions[1]+this.instructions[2]+this.instructions[3]){
                this.yPos+=this.yVelocity;
            } else if(this.travelTime<this.instructions[0]+this.instructions[1]+this.instructions[2]+this.instructions[3]+this.instructions[4]){
                if(this.goLeft) this.xPos+=this.xVelocity;
                else this.xPos-=this.xVelocity;
            }
            else{
                this.isTravelling = false;
                this.travelTime = 0;
            }
        }
        this.travelTime++;
    }
    // travelTime
    // isTravelling
    // goLeft
    // instructions
    // familyNum
    // Mortality
    // homeX
    // homeY
    // xPos;
    // yPos;
    // xVelocity;
    // yVelocity;
    // speed;
    // man;
    // timeSick;
    // sick;
    //colorString
    // healthy;
    // recovered;
}
class Family {
    constructor(){
        this.isTravelling = false;
        this.members = new Array();
    }
    addMember(person){
        this.members.push(person);
    }
    
}
window.addEventListener('load', function () {
    mainInter();
});
function mainInter(){
    console.log("I HAVE RUN INTERMEDIATE");

    var canvasInter = document.getElementById('intermediateCanvas');
    var contextInter = canvasInter.getContext('2d');
    canvasInter.width = 24*60;
    canvasInter.height = 24*40;
    var population = new Array(2200);
    var families = new Array();

    //Loading images here
    var shop = new Image();
    shop.src = "images\\coronavirus\\shop.png";
    var office = new Image();
    office.src = "images\\coronavirus\\officeBuilding.png";
    var shopX = canvasInter.width/2-shop.width;
    var storeY = canvasInter.height-shop.height;

    function generatePerson(oldX, oldY, i, j){
        var x;
        var y;
        if(i == 0){
            x = 25+j*10;
            y = 25; //(j%2)*10
        } else{
            x = (oldX+j*10+20)%(canvasInter.offsetWidth-40)+10;
            if(oldX>x) x = 25+j*10;
            y = Math.floor((oldX+j*10+20)/(canvasInter.offsetWidth-40))*30+oldY;
        }
        var age = 100*Math.random();
        var tempPerson;
        //AGE DISTRIBUTION
        if(age<=18.46) age = Math.floor(Math.random()*15);
        else if(age <= 31.37) age = Math.floor(Math.random()*10)+15;
        else if(age <= 70.29) age = Math.floor(Math.random()*30)+25;
        else if(age<=83.15) age = Math.floor(Math.random()*10)+55;
        else age = Math.floor(Math.random()*25)+65;
        if(i%2==0) tempPerson = new NormPerson(x, y, true, age);
        else tempPerson = new NormPerson(x, y, false, age);
        return tempPerson;
    }
    
    var peopleAvailable = population.length;
    var numPushed = 0;
    while(peopleAvailable>0){
        var famSize = Math.random()*100;
        if(famSize<=28.37) famSize = 1;
        else if(famSize<=62.88) famSize = 2;
        else if(famSize<=77.95) famSize = 3;
        else if(famSize<=90.71) famSize = 4;
        else if(famSize<=96.49) famSize = 5;
        else if(famSize<=98.75) famSize = 6;
        else famSize = 7;
        if(famSize>peopleAvailable){
            while(famSize>peopleAvailable) famSize--;
        }
        peopleAvailable-=famSize;
        var fam = new Family();
        for(var i = 0; i<famSize; i++){
            if(numPushed == 0) fam.addMember(generatePerson(25, 25, numPushed, i));
            else fam.addMember(generatePerson(families[families.length-1].members[families[families.length-1].members.length-1].xPos, families[families.length-1].members[families[families.length-1].members.length-1].yPos,numPushed, i));
        }
        families.push(fam);
        numPushed++;
    }
    //MAKE SOME PEOPLE SICK
    var numSick = 25;
    while(numSick>0){
        var personNum = Math.floor(Math.random()*population.length);
        var index = 0;
        for(var i = 0; i<families.length; i++){
            for(var j = 0; j<families[i].members.length; j++){
                if(index==personNum && families[i].members[j].sick == false) families[i].members[j].makeSick();
                index++;
            }
        }
        numSick--;
    }
    
    //DRAW ALL
    function drawAll(){
        contextInter.clearRect(0, 0, canvasInter.width, canvasInter.height);
        
        for(var i = 0; i<families.length; i++){
            for(var j = 0; j<families[i].members.length; j++){
                contextInter.beginPath();
                contextInter.arc(families[i].members[j].xPos, families[i].members[j].yPos, 5, 0, 2*Math.PI);
                contextInter.fillStyle = families[i].members[j].colorString;
                contextInter.fill();
            }
        }
        shop.onload=function(){
            shop.width *= 0.15;
            shop.height *= 0.15;
            contextInter.drawImage(shop, canvasInter.width/2-shop.width, canvasInter.height-shop.height, shop.width, shop.height);
        };
        office.onload=function(){
            office.width *= 0.125;
            office.height *= 0.125;
            contextInter.drawImage(office, canvasInter.width/2+shop.width, canvasInter.height-office.height*1.1, office.width, office.height);
        };

    }
    drawAll();
    var bufferDisplay = setInterval(function(){
        drawAll();
    }, 50);
    var refresh;
    setTimeout(function(){
        clearInterval(bufferDisplay);
        refresh = setInterval(frame, 40);
    }, 1500);
    //TIME
    var counter = 0;
    function frame(){
        
        if(isInViewPort(document.getElementById("intermediateCanvas"))){
            if(counter%200 == 0){
                choosePeople(5);
            }
            for(var i = 0; i<families.length; i++){
                for(var j = 0; j<families[i].members.length; j++){
                    if(families[i].members[j].isTravelling){
                        families[i].members[j].move();
                    }
                }
            }
            drawAll();
            counter++;
        }
    }
    function someoneSafe(fam){
        for(var i = 0; i<families[fam].members.length; i++){
            if(families[fam].members[i].age < 65 && families[fam].members[i].age > 12)
                return i;
        }
        return -1;
    }
    function choosePeople(num){
        var xVelocity = 5;
        var yVelocity = -5;
        while(num>0){
            var rand = Math.floor(Math.random()*families.length);
            while(families[rand].isTravelling==true) rand = Math.floor(Math.random()*families.length);
            var personRand = Math.floor(Math.random()*families[rand].members.length);
            while((families[rand].members[personRand].age<12 || families[rand].members[personRand].age>65)&&someoneSafe(rand)!=-1) personRand = Math.floor(Math.random()*families[rand].members.length);
            var location = Math.floor(Math.random()*2);
            var instructions = new Array();
            var timeDelay = Math.floor(Math.random()*11);
            instructions.push(timeDelay);
            //Telling it to go down
            instructions.push(17.5/-yVelocity);
            var timeXFirst;
            var goneLeft = false;
            if(families[rand].members[personRand].xPos>canvasInter.width/2) {
                timeXFirst = (canvasInter.width-families[rand].members[personRand].xPos-15)/xVelocity;
            } else{
                timeXFirst = (families[rand].members[personRand].xPos-15)/xVelocity;
                goneLeft = true;
            }
            instructions.push(timeXFirst);
            storeY = canvasInter.height-shop.height;
            var timeYFirst = (canvasInter.height-17.5-families[rand].members[personRand].homeY)/-yVelocity;
            instructions.push(timeYFirst);
            var timeXSecond;
            if(goneLeft){
                timeXSecond = (shopX-15)/xVelocity;
            }else{
                shopX = canvasInter.width/2-shop.width;
                timeXSecond = (canvasInter.width-15-shopX)/xVelocity;
            }
            instructions.push(timeXSecond);
            families[rand].members[personRand].instructions = instructions;
            families[rand].members[personRand].isTravelling = true;
            families[rand].members[personRand].goLeft = goneLeft;
            num--;
        }
    }
}
