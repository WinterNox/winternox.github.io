var bg_pos_x = 0;
var bg_pos_y = 0;
var move_angle = 0;

function increment_bg_pos() {
    move_angle += Math.PI / 3600;
    bg_pos_x += Math.cos(move_angle) / 2;
    bg_pos_y += Math.sin(move_angle) / 2;

    document.getElementById("body_element").style.backgroundPositionX = bg_pos_x + "px";
    document.getElementById("body_element").style.backgroundPositionY = bg_pos_y + "px";
}

setInterval(increment_bg_pos, 16);