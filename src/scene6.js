import "kaplay/global";
import { hamsterPlayer } from "./player-info";
import { antENEMY } from "./ant-info";


export default function(STATE){
    add([ sprite("grid6"), ]);
    const player = hamsterPlayer(STATE.protag.location.x, STATE.protag.location.y);
    const ant1 = antENEMY(20,40);
    const ant2 = antENEMY(80,80);


    onUpdate(() => {

        //go right
        if(player.pos.x > 240){
            STATE.protag.location.x = 20;
            STATE.protag.location.y = player.pos.y
            go("scene7", STATE);
        }

        // go left
        if(player.pos.x < 0){
            STATE.protag.location.x = 220;
            STATE.protag.location.y = player.pos.y
            go("scene5", STATE);
        }

        // go up 
        if(player.pos.y < 0 ){
            STATE.protag.location.x = player.pos.x;
            STATE.protag.location.y = 140
            go("scene1", STATE);
        }

        // go down
        if(player.pos.y > 160){
            STATE.protag.location.x = player.pos.x
            STATE.protag.location.y = 20
            go("scene11",STATE)
        }


    })

    
}