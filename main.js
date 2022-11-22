var canvas=new fabric.Canvas('myCanvas');
block_image_width=30;
block_image_height=30;

player_x=10;
player_y=10;

var player_object="" ;

function player_update(){
    fabric.Image.fromURL("player.png", function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,left:player_x
        });
        canvas.add(player_object);
    });
}
 function new_Image(get_image){
    fabric.Image.fromURL(get_image, function(Img){
        block_img_object=Img;
        block_img_object.scaleToWidth(block_image_width);
        block_img_object.scaleToHeight(block_image_height);
        block_img_object.set({
             top:player_y, left:player_x
        });
        canvas.add(block_img_object);
    });
  }

  window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keypressed=e.keyCode;
    console.log('keypressed');

    if(e.shiftKey==true && keypressed=='80'){
        console.log('shift and P are pressed together');
        block_image_width= block_image_width + 10;
        block_image_height= block_image_height + 10;
        document.getElementById('current_width').innerHTML=block_image_width;
        document.getElementById('current_height').innerHTML=block_image_height;
    }
    if(e.shiftKey==true && keypressed=='77'){
        console.log('shift and M are pressed together');
        block_image_width= block_image_width - 10;
        block_image_height= block_image_height - 10;
        document.getElementById('current_width').innerHTML=block_image_width;
        document.getElementById('current_height').innerHTML=block_image_height;
    }

    if(keypressed=='37'){
        console.log('Left');
        left();

    }
    if (keypressed=='38'){
        console.log('Up');
        up();
    }
    if(keypressed=='40'){
        console.log('Down');
        down();
    }
    if (keypressed=='39'){
        console.log('Right');
        right();
    }
    if(keypressed=='84'){
console.log('t is pressed');
new_Image('trunk.jpg');
    }
    if(keypressed=='68'){
        console.log('d is pressed');
        new_Image('dark_green.png');
        
    }
    if(keypressed=='76'){
        console.log('l is pressed');
        new_Image('light_green.png');

    }
    if(keypressed=='71'){
        console.log('g is pressed');
        new_Image('ground.png');
    }
    if(keypressed=='87'){
        console.log('w is pressed');
        new_Image('wall.jpg');
    }
    if(keypressed=='89'){
        console.log('y is pressed');
        new_Image('yellow_wall.png');
    }
    if(keypressed=='82'){
        console.log('r is pressed');
        new_Image('roof.jpg');
    }
    if(keypressed=='67'){
        console.log('c is pressed');
            new_Image('cloud.jpg');
    }
    if(keypressed=='85'){
        console.log('u is pressed');
        new_Image('unique.png');

    }
}
function up(){
    if(player_y>=0){
        player_y=player_y-block_image_height;
        console.log("When up arrow is presses player_y="+ player_y+" x="+ player_x);
        canvas.remove(player_object);
        player_update();
    }
}
function down(){
    if(player_y<=500){
        player_y=player_y+block_image_height;
        console.log("When down arrow is presses player_y="+ player_y+" x="+ player_x);
        canvas.remove(player_object);
        player_update();
}
}
function left(){
    if(player_x>=0){
        player_x=player_x-block_image_width;
        console.log("When left arrow is presses player_x="+ player_y+" x="+ player_x);
        canvas.remove(player_object);
        player_update();
}
}
function right(){
    if(player_x<=850){
        player_x=player_x+block_image_width;
        console.log("When right arrow is presses player_x="+ player_y+" x="+ player_x);
        canvas.remove(player_object);
        player_update();
}
}