
var player, playerImg;
var backgroundImg;

function preload() {
    backgroundImg = loadImage("images/track.jpg");
    playerImg = loadImage("images/car4.png");
}

function setup() {
    var canvas = createCanvas(800, 800);
    
    ground=createSprite(2000,400,4000,800);
    ground.addImage(backgroundImg);
    player = createSprite(50, 200, 10, 40);
    player.addImage(playerImg);
    console.log(player);
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
    //camera.position.x=player.x;
    //camera.position.y=400;
    drawSprites();
}

