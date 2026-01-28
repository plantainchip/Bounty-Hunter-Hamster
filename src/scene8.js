import "kaplay/global";
import { hamsterPlayer } from "./player-info";

export default function(STATE){
    add([ sprite("grid8"), ]);
    const player = hamsterPlayer(STATE.protag.location.x, STATE.protag.location.y)
    debug.inspect = true


    add([
        pos(200, 0),
        rect(40,160),
        body({isStatic:true}),
        area(),
        color(125,25,255),
        opacity(0),
    ])
    
    add([
        pos(0, 150),
        rect(210,10),
        body({isStatic:true}),
        area(),
        color(125,25,255),
        opacity(0),
    ])
    onUpdate(() => {

        // go left
        if(player.pos.x < 0){
            STATE.protag.location.x = 220;
            STATE.protag.location.y = player.pos.y
            go("scene7", STATE);
        }

        // go up 
        if(player.pos.y < 0 ){
            STATE.protag.location.x = player.pos.x;
            STATE.protag.location.y = 140
            go("scene3", STATE);
        }

    })

    
}