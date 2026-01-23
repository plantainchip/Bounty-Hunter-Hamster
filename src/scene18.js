import "kaplay/global";
import { hamsterPlayer } from "./player-info";

export default function(STATE){
    add([ sprite("grid18"), ]);
    const player = hamsterPlayer(STATE.protag.location.x, STATE.protag.location.y)

    onUpdate(() => {
        // go left
        if(player.pos.x < 0){
            STATE.protag.location.x = 220;
            STATE.protag.location.y = player.pos.y
            go("scene17", STATE);
        }

        //go right
        if(player.pos.x > 240){
            STATE.protag.location.x = 20;
            STATE.protag.location.y = player.pos.y
            go("scene19", STATE);
        }

        // go up 
        if(player.pos.y < 0 ){
            STATE.protag.location.x = player.pos.x;
            STATE.protag.location.y = 140
            go("scene13", STATE);
        }

        // go down
        if(player.pos.y > 160){
            STATE.protag.location.x = player.pos.x
            STATE.protag.location.y = 20
            go("scene23",STATE)
        }


    })

    
}