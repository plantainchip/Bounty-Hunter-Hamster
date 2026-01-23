import "kaplay/global";
import { hamsterPlayer } from "./player-info";

export default function(STATE){
    add([ sprite("grid19"), ]);
    debug.inspect = true
    // debug.log(mousePos.pos.x.toFixed(0) + " " + mousePos.pos.y.toFixed(0));
    // const wall = add([
    //     pos(0, 0),
    //     polygon([
    //         vec2(0,0), 
    //         vec2(width(),0), 
    //         vec2(width(),40), 
    //         vec2(165,40), 
    //         vec2(163,52),
    //         vec2(60,65), 
    //         vec2(35,58), 
    //         vec2(0,60)
    //     ]),
    //     body({isStatic:true}),
    //     area(),
    //     // area({ shape: new Polygon([
    //     //     vec2(0,0), 
    //     //     vec2(width(),0), 
    //     //     vec2(width(),40), 
    //     //     vec2(165,40), 
    //     //     vec2(163,52),
    //     //     vec2(60,65), 
    //     //     vec2(35,58), 
    //     //     vec2(0,60)
    //     //     ])
    //     // }),
    //     color(125,25,255),
    //     opacity(0),
    //     "wall"
    // ])


    
    const player = hamsterPlayer(STATE.protag.location.x, STATE.protag.location.y)

    onUpdate(() => {
        // go left
        if(player.pos.x < 0){
            STATE.protag.location.x = 220;
            STATE.protag.location.y = player.pos.y
            go("scene18", STATE);
        }

        // go down
        if(player.pos.y > 160){
            STATE.protag.location.x = player.pos.x
            STATE.protag.location.y = 20
            go("scene24",STATE)
            // finsih this. make scene24 js
        }

    })
  

    player.onCollide("wall", (obj, col) => {
        console.log(col)
    });
}