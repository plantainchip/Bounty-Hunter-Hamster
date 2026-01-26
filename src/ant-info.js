
export function antENEMY(posX,posY){
    let SPEED = 40;

    const ant = add([
        sprite("ant"),
        pos(posX,posY),
        body(),
        area(),
        health(3),
        anchor("center"),
        animate(),
        "ant"
    ]);

    ant.animate("pos", [vec2(posX, posY), vec2(posX+rand(10,40), posY+rand(10,50))],{
        duration: 4,
        direction: "ping-pong",
    });

    // ant.onCollide("hammy", () => {
    //     onUpdate(()=>{
    //         if(isKeyPressed("space")){
    //             debug.log("bite")
    //             ant.hp--;
    //         }
    //     }) 
    // })

    const antHPText = ant.add([ 
        text(
            `${ant.hp}/${ant.maxHP}`, 
            {size:5}, 
            pos(posX,posY))
    ]);

    antHPText.onUpdate(()=> {
        antHPText.text = `${ant.hp}/${ant.maxHP}`;
    })


    ant.onDeath(()=>{
        destroy(ant)
    })

    return ant
}

export const GRAVITY = 9.8;

export default {
    antENEMY,
}