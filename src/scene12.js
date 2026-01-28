import "kaplay/global";
import { hamsterPlayer } from "./player-info";

export default function(STATE){
    add([ sprite("grid12"), ]);
    const player = hamsterPlayer(STATE.protag.location.x, STATE.protag.location.y)

    add([
        pos(70, 0),
        rect(200,160),
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
            go("scene11", STATE);
        }

        // go up 
        if(player.pos.y < 0 ){
            STATE.protag.location.x = player.pos.x;
            STATE.protag.location.y = 140
            go("scene7", STATE);
        }

        // go down
        if(player.pos.y > 160){
            STATE.protag.location.x = player.pos.x
            STATE.protag.location.y = 20
            go("scene17",STATE)
        }

    })

    
}