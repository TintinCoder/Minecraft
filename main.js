// Variables (Canvas 1)
var canvas = new fabric.Canvas('myCanvas');
// Variables (Other)
// Variables (Height And Width)
var block_width = 30;
var block_height = 30;
// Variables (Positions)
var player_x = 50;
var player_y = 50;
// Variables (Objects)
var player_obj = "";
// Done Variables
// Functions
function updateImg() {
    fabric.Image.fromURL("player.png", function(Img){
        player_obj = Img;
        player_obj.scaleToWidth(70);
        player_obj.scaleToHeight(100);
        player_obj.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_obj);
    });
}
// Function For Block
function AddBlock(get_Image) {
    fabric.Image.fromURL(get_Image, function(Img){
        block_obj = Img;
        block_obj.scaleToWidth(block_width);
        block_obj.scaleToHeight(block_height);
        block_obj.set({
            top:player_y, 
            left:player_x
        });
        canvas.add(block_obj);
    });
}
// NOW ADDING THE KEYPRESS && KEYDOWN EVENTS
window.addEventListener('keydown', my_keydowns);

function my_keydowns(e) {
    var keyPressed = e.keyCode;
    console.log(keyPressed);
    if (e.shiftKey == true && keyPressed == '80') {
        block_width = block_width + 10;
        block_height = block_height + 10;
        document.getElementById('current_width').innerHTML = block_width;
        document.getElementById('current_height').innerHTML = block_height;
        console.log(block_height);
        console.log(block_width);
        console.log('L AND SHIFT Keys Are Pressed Together');
    }
    if (e.shiftKey && keyPressed == '83') {
        block_width = block_width - 10;
        block_height = block_height - 10;
        document.getElementById('current_width').innerHTML = block_width;
        document.getElementById('current_height').innerHTML = block_height;
        console.log(block_height);
        console.log(block_width);
        console.log('S AND SHIFT Keys Are Pressed Together');
    }
    if (block_height == '0' && block_width == '0') {
        block_height = 10;
        block_width = 10;
        document.getElementById('current_width').innerHTML = block_width;
        document.getElementById('current_height').innerHTML = block_height;
        console.log("Can't Go More Low");
    }
    if (block_height == '200' && block_width == '200') {
        block_height = 180;
        block_width = 180;
        document.getElementById('current_width').innerHTML = block_width;
        document.getElementById('current_height').innerHTML = block_height;
        console.log("Can't Go More High");
    }
    if (keyPressed == '38') {
        up();
        console.log('UP');
    }
    if (keyPressed == '40') {
        down();
        console.log('DOWN');
    }
    if (keyPressed == '37') {
        left();
        console.log('LEFT');
    }
    if (keyPressed == '39') {
        right();
        console.log('Right');
    }
    if (keyPressed == '67') {
        AddBlock('cloud.jpg');
        console.log('Cloud Image');
        console.log('C');
    }
    if (keyPressed == '68') {
        AddBlock('dark_green.png');
        console.log('Dark Green Image');
        console.log('D');
    }
    if (keyPressed == '71') {
        AddBlock('ground.png');
        console.log('G');
    }
    if (keyPressed == '76') {
        AddBlock('light_green.png');
        console.log('L');
    }
    if (keyPressed == '82') {
        AddBlock('roof.jpg');
        console.log('R');
    }
    if (keyPressed == '84') {
        AddBlock('trunk.jpg');
        console.log('G');
    }
    if (keyPressed == '85') {
        AddBlock('unique.png');
        console.log('U');
    }
    if (keyPressed == '87') {
        AddBlock('wall.jpg');
        console.log('W');
    }
    if (keyPressed == '89') {
        AddBlock('yellow_wall.png');
        console.log('Y');
    }
}
function up() {
    if (player_y >= 0) {
        player_y = player_y - block_height;
        console.log(player_y, block_height);
        canvas.remove(player_obj);
        updateImg();
    }
}
function down() {
    if (player_y <= 700) {
        player_y = player_y + block_height;
        console.log(player_y, block_height);
        canvas.remove(player_obj);
        updateImg();
    }
}
function left() {
    if (player_x >= 0) {
        player_x =  player_x - block_width;
        console.log(player_x);
        canvas.remove(player_obj);
        updateImg();
    }
}
function right() {
    if (player_x <= 900) {
        player_x = player_x + block_width;
        console.log(player_x);
        canvas.remove(player_obj);
        updateImg();
    }
}