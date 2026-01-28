import "kaplay/global";
import { hamsterPlayer } from "./player-info";
import { npc } from "./npc";

export default function(STATE){
    add([ sprite("grid24"), ]);
    const player = hamsterPlayer(STATE.protag.location.x, STATE.protag.location.y)
    npc(160,100)

    add([
        pos(200, 0),
        rect(40,120),
        body({isStatic:true}),
        area(),
        color(125,25,255),
        opacity(0),
    ])

    add([
        pos(0, 120),
        rect(240,40),
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
            go("scene23", STATE);
        }

        // go up 
        if(player.pos.y < 0 ){
            STATE.protag.location.x = player.pos.x;
            STATE.protag.location.y = 140
            go("scene19", STATE);
        }

        
    })

    onCollide("hammy","npc", () => {

        add([
            pos(0,100),
            rect(240,60),
            color(BLACK),
            lifespan(3,{ fade: 0.5}),
            opacity(1),

        ])

        add([
            pos(20,110),
            text("You ran into an old bean. The bean wants your money",{
                size: 8,
                width: 200,
                font: "happy",
            }),
            lifespan(3,{ fade: 0.5}),
            opacity(1),
        ])
        debug.log("ow")
    })

    
}