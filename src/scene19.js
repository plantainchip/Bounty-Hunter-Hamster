import "kaplay/global";
import { hamsterPlayer } from "./player-info";

export default function(STATE){
    add([ sprite("grid19"), ]);
    debug.inspect = true
    // debug.log(mousePos.pos.x.toFixed(0) + " " + mousePos.pos.y.toFixed(0));
    add([
        pos(0, 0),
        rect(240,40),
        body({isStatic:true}),
        area(),
        color(125,25,255),
        opacity(0),
    ])
    add([
        pos(200, 41),
        rect(40,120),
        body({isStatic:true}),
        area(),
        color(125,25,255),
        opacity(0),
    ])


    const player = hamsterPlayer(STATE.protag.location.x, STATE.protag.location.y)

    onUpdate(() => {
        // go left
        if(player.pos.x < 0){
            STATE.protag.location.x = 220;
            STATE.protag.location.y = player.pos.y
            go("scene18", STATE);
        }

        // go down
        if(player.pos.y > 160){
            STATE.protag.location.x = player.pos.x
            STATE.protag.location.y = 20
            go("scene24",STATE)
            // finsih this. make scene24 js
        }

    })



    player.onCollide("wall", (obj, col) => {
        console.log(col)
    });
}