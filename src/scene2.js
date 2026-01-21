import "kaplay/global";
import { hamsterPlayer } from "./player-info";

export default function(STATE){
    // you can start making your scene in this function.
    debug.log("scene 2 - the fields");
    add([ sprite("ants-field"), ]);
    const player = hamsterPlayer(STATE.ham_x, STATE.ham_y)

    
}