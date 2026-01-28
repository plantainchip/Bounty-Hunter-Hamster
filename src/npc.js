
export function npc(posX,posY){
    let SPEED = 40;

    const npc = add([
        sprite("bean"),
        pos(posX,posY),
        body({isStatic: true}),
        area(),
        health(3),
        anchor("center"),
        animate(),
        scale(0.5),
        "npc"
    ]);

    return npc
}


export default {
    npc,
}