import "kaplay/global";
import { hamsterPlayer } from "./player-info";

export default function(STATE){
    add([ sprite("grid21"), ]);
    const player = hamsterPlayer(STATE.protag.location.x, STATE.protag.location.y)

    onUpdate(() => {
        //go right
        if(player.pos.x > 240){
            console.log("change scene")
            STATE.protag.location.x = 20;
            STATE.protag.location.y = player.pos.y
            go("scene22", STATE);
        }

        // go up 
        if(player.pos.y < 0 ){
            STATE.protag.location.x = player.pos.x;
            STATE.protag.location.y = 140
            go("scene16", STATE);
        }
    })

    
}