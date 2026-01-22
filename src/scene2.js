import "kaplay/global";
import { hamsterPlayer } from "./player-info";

export default function(STATE){
    // you can start making your scene in this function.
    debug.log("scene 2 - the fields");
    add([ sprite("ants-field"), ]);
    const player = hamsterPlayer(STATE.protag.location.x, STATE.protag.location.y)

    onUpdate(() => {
        if(player.pos.x < 0){
            console.log("change scene")
            STATE.protag.location.x = 220;
            STATE.protag.location.y = player.pos.y
            go("scene1", STATE);
        }

    })

    
}