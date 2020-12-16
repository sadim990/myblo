var canvas = new fabric.Canvas('myCanvas');
hero_x=10;
hero_y=10;

hero_image_height=30;
hero_image_width=30;

var hero_object="";
var hero_image_object="";

function player_update(){
    fabric.Image.fromURL("player.jpg",function(Img){
       hero_object=Img;

       hero_object.scaleToWidth(150);
       hero_object.scaleToHeight(150);
       hero_object.set({
       top:hero_y,
       left:hero_x
       });
       canvas.add(hero_object);
    });
}
function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img){
       hero_image_object=Img;
       hero_image_object.scaleToWidth(hero_image_width);
       hero_image_object.scaleToHeight(hero_image_height);
      hero_image_object.set({
       top:hero_y,
       left:hero_x
       });
       canvas.add(hero_image_object);
    });
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if (e.shiftKey == true && keyPressed == '80')
    {
        console.log("P and Shift pressed together");
        hero_image_width = hero_image_width + 10;
        hero_image_height = hero_image_height + 10;
        document.getElementById("current_width").innerHTML = hero_image_width;
        document.getElementById("current_height").innerHTML = hero_image_height;
    }
    if (e.shiftKey == true && keyPressed == '77')
    {
        console.log("M and Shift pressed together");
        hero_image_width = hero_image_width - 10;
        hero_image_height = hero_image_height - 10;
        document.getElementById("current_width").innerHTML = hero_image_width;
        document.getElementById("current_height").innerHTML = hero_image_height;
    }
    if (keyPressed == '70'){
        new_image("ironman_face.png");
        console.log("f");
    }
    if (keyPressed == '66'){
        new_image("hulkd_body.png");
        console.log("b");
    }
    if (keyPressed == '76'){
        newimage("hulk_legs.png");
        console.log(l);
    }
    if (keyPressed == '82'){
        newimage("thor_right_hand.png");
        console.log("r");
    }
    if (keyPressed == '72'){
        new_image('captain_america_left_hand');
        console.log("h");
    }
    if (keyPressed == '38'){
        up();
        console.log("up");
    }
    if (keyPressed == '40'){
        down();
        console.log("down");
    }
    if (keyPressed == '37'){
        left();
        console.log("left");
    }
    if (keyPressed == '39'){
        right();
        console.log("right");
    }

}

function up(){
    if(hero_y>=0){
        hero_y = hero_y - hero_image_height;
        console.log("hero image height = " + hero_image_height);
        console.log("when up arrow is pressed, x="+ hero_x + " , Y = " + hero_y);
        canvas.remove(hero_object);
        hero_update();

    }

}
function down(){
    if(hero_y<=500){
        hero_y = hero_y + hero_image_height;
        console.log("hero image height = " + hero_image_height);
        console.log("when down arrow is pressed, x="+ hero_x + " , Y = " + hero_y);
        canvas.remove(hero_object);
        hero_update();

    }

}
function right(){
    if(hero_x<=900){
        hero_x = hero_x + hero_image_width;
        console.log("hero image width = " + hero_image_width);
        console.log("when right arrow is pressed, x="+ hero_x + " , Y = " + hero_y);
        canvas.remove(hero_object);
        hero_update();

    }

}
function left(){
    if(hero_x>=0){
        hero_x = hero_x - hero_image_width;
        console.log("hero image width = " + hero_image_width);
        console.log("when left arrow is pressed, x="+ hero_x + " , Y = " + hero_y);
        canvas.remove(player_object);
        hero_update();

    }

}