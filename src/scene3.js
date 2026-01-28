import "kaplay/global";
import { hamsterPlayer } from "./player-info";

export default function(STATE){
    add([ sprite("grid3"), ]);
    const player = hamsterPlayer(STATE.protag.location.x, STATE.protag.location.y)
    add([
        pos(0, 0),
        rect(240,10),
        body({isStatic:true}),
        area(),
        color(125,25,255),
        opacity(0),
    ])
    
    add([
        pos(200, 0),
        rect(40,160),
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