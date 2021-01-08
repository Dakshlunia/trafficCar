
var player, playerImg;
var backgroundImg;
var obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, obstacle6, obstacle7, obstacle8, obstacle9, obstacle10;
var obstaclesGroup;
var score=0;

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
}

function setup() {
    var canvas = createCanvas(800, 800);

    ground = createSprite(2000, 400, 4000, 800);
    ground.addImage(backgroundImg);
    player = createSprite(50, 200, 10, 40);
    player.addImage(playerImg);
    console.log(player);
    obstaclesGroup= new Group();
}

function draw() {
    background(0);
    if (keyDown(RIGHT_ARROW)) {
        ground.x = ground.x - 15

    }
    if (keyDown(UP_ARROW)) {
        player.y = player.y - 5

    }
    if (keyDown(DOWN_ARROW)) {
        player.y = player.y + 5

    }
    spawnObstacles();
    //camera.position.x=player.x;
    //camera.position.y=400;
    drawSprites();
}


function spawnObstacles() {
    if (frameCount % 60 === 0) {
        var obstacle = createSprite(700, 400, 10, 40);
        //obstacle.debug = true;
        obstacle.velocityX = -(6 + 3 * score / 100);
        obstacle.y=Math.round(random(200,600));
        obstacle.rotation = 90;
        obstacle.rotation = 90;
        //generate random obstacles
        var rand = Math.round(random(1, 10));
        switch (rand) {
            case 1: obstacle.addImage(obstacle1);
                break;
            case 2: obstacle.addImage(obstacle2);
                break;
            case 3: obstacle.addImage(obstacle3);
                break;
            case 4: obstacle.addImage(obstacle4);
                break;
            case 5: obstacle.addImage(obstacle5);
                break;
            case 6: obstacle.addImage(obstacle6);
                break;
            case 7: obstacle.addImage(obstacle7);
                break;
            case 8: obstacle.addImage(obstacle8);
                break;
            case 9: obstacle.addImage(obstacle9);
                break;
            case 10: obstacle.addImage(obstacle10);
                break;
            default: break;
        }

        //assign scale and lifetime to the obstacle           
        obstacle.scale = 0.5;
        obstacle.lifetime = 300;
        //add each obstacle to the group
        obstaclesGroup.add(obstacle);
    }
}
