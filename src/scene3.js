import "kaplay/global";
import { hamsterPlayer } from "./player-info";

export default function(STATE){
    add([ sprite("grid3"), ]);
    const player = hamsterPlayer(STATE.protag.location.x, STATE.protag.location.y)

    onUpdate(() => {

        // go left
        if(player.pos.x < 0){
            STATE.protag.location.x = 220;
            STATE.protag.location.y = player.pos.y
            go("scene2", STATE);
        }

        // go down
        if(player.pos.y > 160){
            STATE.protag.location.x = player.pos.x
            STATE.protag.location.y = 20
            go("scene8",STATE)
        }

    })

    
}