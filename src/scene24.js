import "kaplay/global";
import { hamsterPlayer } from "./player-info";

export default function(STATE){
    add([ sprite("grid24"), ]);
    const player = hamsterPlayer(STATE.protag.location.x, STATE.protag.location.y)

    onUpdate(() => {
        // go left
        if(player.pos.x < 0){
            STATE.protag.location.x = 220;
            STATE.protag.location.y = player.pos.y
            go("scene23", STATE);
        }

        // go up 
        if(player.pos.y < 0 ){
            STATE.protag.location.x = player.pos.x;
            STATE.protag.location.y = 140
            go("scene19", STATE);
        }
    })

    
}