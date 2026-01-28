import "kaplay/global";
import { hamsterPlayer } from "./player-info";

export default function(STATE){
    add([ sprite("grid20"), ]);
    const player = hamsterPlayer(STATE.protag.location.x, STATE.protag.location.y)

    add([
        pos(0, 140),
        rect(240,20),
        body({isStatic:true}),
        area(),
        color(125,25,255),
        opacity(0),
    ])

    add([
        pos(220, 0),
        rect(20,160),
        body({isStatic:true}),
        area(),
        color(125,25,255),
        opacity(0),
    ])

    add([
        pos(0, 0),
        rect(10,160),
        body({isStatic:true}),
        area(),
        color(125,25,255),
        opacity(0),
    ])

    onUpdate(() => {
        // go up 
        if(player.pos.y < 0 ){
            STATE.protag.location.x = player.pos.x;
            STATE.protag.location.y = 140
            go("scene15", STATE);
        }
    })

    
}