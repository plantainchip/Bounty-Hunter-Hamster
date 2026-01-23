import "kaplay/global";
import { hamsterPlayer } from "./player-info";

export default function(STATE){
    add([ sprite("grid9"), ]);
    const player = hamsterPlayer(STATE.protag.location.x, STATE.protag.location.y)

    onUpdate(() => {

        // go up 
        if(player.pos.y < 0 ){
            STATE.protag.location.x = player.pos.x;
            STATE.protag.location.y = 140
            go("scene4", STATE);
        }

        // go down
        if(player.pos.y > 160){
            STATE.protag.location.x = player.pos.x
            STATE.protag.location.y = 20
            go("scene15",STATE)
        }

    })

    
}