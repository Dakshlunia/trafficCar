
var player, playerImg;
var backgroundImg;
var obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, obstacle6, obstacle7, obstacle8, obstacle9, obstacle10;
var obstaclesGroup;
var petrol=300,petrolPump,petrolGroup;
var score=0;
var PLAY=1,END=0;
var gameState=PLAY;


function preload() {
    backgroundImg = loadImage("images/track.jpg");
    playerImg = loadImage("images/car4.png");
    obstacle1 = loadImage("images/Carbrown.png");
    obstacle2 = loadImage("images/CarGrey.png");
    obstacle3 = loadImage("images/greencar.png");
    obstacle4 = loadImage("images/orangecar1.png");
    obstacle5 = loadImage("images/policeCar1.png");
    obstacle6 = loadImage("images/policeCar2.png");
    obstacle7 = loadImage("images/Redcar.png");
    obstacle8 = loadImage("images/redcar2.png");
    obstacle9 = loadImage("images/redTruck.png");
    obstacle10 = loadImage("images/BigTruck.png");
    petrolPump= loadImage("images/petrolPump.png");
}

function setup() {
    var canvas = createCanvas(1200, 800);

    ground = createSprite(2000, 400, 4000, 800);
    ground.addImage(backgroundImg);
    player = createSprite(50, 200, 10, 40);
    player.addImage(playerImg);
    player.rotation=90;
    console.log(player);
    obstaclesGroup= new Group();
    petrolGroup= new Group();
    
}

function draw() {
    background(0);
    if(gameState===PLAY){
        score=score+1;
        petrol-- 
    if (keyDown(RIGHT_ARROW)) {
        ground.x = ground.x - 15

    }
    if (keyDown(UP_ARROW)) {
        player.y = player.y - 5

    }
    if (keyDown(DOWN_ARROW)) {
        player.y = player.y + 5

    }
    if(ground.x<0){
        ground.x=width/2;
    }
    if(player.isTouching(petrolGroup)){
        petrol=petrol+200;
        petrolGroup.destroyEach();
    }
    if(player.isTouching(obstaclesGroup)|| petrol <= 0){
        gameState=END;
        obstaclesGroup.setVelocityXEach(0);
        obstaclesGroup.setLifetimeEach(-1);
    }
    spawnObstacles();
    spawnPolice();
    spawnPetrol();
}
drawSprites();
textSize(30);
fill('red');
strokeWeight(3);
 stroke(0);
textAlign(CENTER);
text('score: '+score,width-100,100)
text('Petrol Left: '+petrol,width-100,150)
    //camera.position.x=player.x;
    //camera.position.y=400;
    if(gameState===END){
        textSize(60);
        fill('red');
        strokeWeight(3);
        stroke(0);
     textAlign(CENTER);
     text('Game Over',width/2,height/2);
    }
    
}


function spawnObstacles() {
    if (frameCount % 60 === 0) {
        var obstacle = createSprite(width, 400, 10, 30);
        //obstacle.debug = true;
        
        obstacle.velocityX = -(6 + 3 * score / 100);
        obstacle.y=Math.round(random(200,600));
        obstacle.rotation = -90;
        //generate random obstacles
        var rand = Math.round(random(1, 8));
        switch (rand) {
            case 1: obstacle.addImage(obstacle1);
                break;
            case 2: obstacle.addImage(obstacle2);
                break;
            case 3: obstacle.addImage(obstacle3);
                break;
            case 4: obstacle.addImage(obstacle4);
                break;
            case 5: obstacle.addImage(obstacle7);
                break;
            case 6: obstacle.addImage(obstacle8);
                break;
            case 7: obstacle.addImage(obstacle9);
                break;
            case 8: obstacle.addImage(obstacle10);
                break;
            default: break;
        }
       // obstacle.scale=2.5;
        //assign scale and lifetime to the obstacle           
        obstacle.setCollider('rectangle',0,0,50,120);
        obstacle.lifetime = 300;
        
        //add each obstacle to the group
        obstaclesGroup.add(obstacle);

    }
}
function spawnPolice() {
    if (frameCount % 120 === 0) {
        var police = createSprite(width, 400, 10, 40);
        //obstacle.debug = true;
        
       police.velocityX = -(8 + 3 * score / 100);
       police.y=Math.round(random(200,600));
       police.rotation = -90;
        //generate random obstacles
        var rand = Math.round(random(5, 6));
        switch (rand) {
            case 5:police.addImage(obstacle5);
                break;
            case 6:police.addImage(obstacle6);
                break;
            default: break;
        }
       // obstacle.scale=2.5;
        //assign scale and lifetime to the obstacle           
        police.lifetime = 300;
        
        //add each obstacle to the group
        obstaclesGroup.add(police);
    }
}
    function spawnPetrol() {
        if (frameCount % 120 === 0) {
            var petrolP = createSprite(width, 400, 10, 40);
            //obstacle.debug = true;
            
            petrolP.velocityX = -(8 + 3 * score / 100);
           petrolP.y=Math.round(random(200,600));
           petrolP.rotation = -90;
           petrolP.addImage(petrolPump);
            //generate random obstacles
          
           // obstacle.scale=2.5;
            //assign scale and lifetime to the obstacle           
            petrolP.lifetime = 300;
           
            //add each obstacle to the group
            petrolGroup.add(petrolP);
        }
}
