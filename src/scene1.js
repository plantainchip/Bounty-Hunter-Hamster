import "kaplay/global";
import { hamsterPlayer } from "./player-info";

export default function(){
    // make your level 2
    debug.log("scene 1 - the ham radio");
    add([ sprite("radio-field"), ]);

    const wall = add([
        pos(0, 0),
        polygon([
            vec2(0,0), 
            vec2(width(),0), 
            vec2(width(),40), 
            vec2(165,40), 
            vec2(163,52),
            vec2(60,65), 
            vec2(35,58), 
            vec2(0,60)
        ]),
        body({isStatic:true}),
        area(),
        // area({ shape: new Polygon([
        //     vec2(0,0), 
        //     vec2(width(),0), 
        //     vec2(width(),40), 
        //     vec2(165,40), 
        //     vec2(163,52),
        //     vec2(60,65), 
        //     vec2(35,58), 
        //     vec2(0,60)
        //     ])
        // }),
        color(125,25,255),
        opacity(0.7),
        "wall"
    ])
    // debug.log(mousePos.pos.x.toFixed(0) + " " + mousePos.pos.y.toFixed(0));


    
    const player = hamsterPlayer()
    console.log(player)


    player.onCollide("wall", (obj, col) => {
        console.log(col)
    });
}