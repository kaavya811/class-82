var mouseEvent="empty";
var last_position_of_x , last_position_of_y ;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="aqua";
width_of_the_line=1;
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    color=document.getElementById("color").value;
    width_of_the_line=document.getElementById("width_of_the_line").value;
    mouseEvent="mouseDown";
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouseEvent="mouseUP";
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouseEvent="mouseleave";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    Current_position_of_mouse_x=e.clientX-canvas.offsetLeft;
    Current_position_of_mouse_y=e.clientY-canvas.offsetTop;
    if (mouseEvent=="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_of_the_line;
        console.log("last position of x and y cordinates =");
        console.log("x= "+last_position_of_x+"y = "+last_position_of_y);
        ctx.moveTo(last_position_of_x,last_position_of_y);

        console.log("corent position of x and y cordinates =");
        console.log("x= "+Current_position_of_mouse_x+"y = "+Current_position_of_mouse_y);
        ctx.lineTo(Current_position_of_mouse_x,Current_position_of_mouse_y);
        ctx.stroke();
        
    }
    last_position_of_x= Current_position_of_mouse_x;
    last_position_of_y= Current_position_of_mouse_y;
    
}
function cleararea(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height)
}