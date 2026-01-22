
export function hamsterPlayer(xPos,yPos){
    let SPEED = 75;

    const player = add([
        sprite("player"),
        pos(xPos,yPos),
        body(),
        // area({ shape: new Polygon([vec2(0), vec2(10), vec2(-10, 10)]) }),
        area({shape: new Circle(vec2(0),3)},anchor("center")),
        // area(),
        anchor("center"),
        "hammy"
    ]);

    onKeyDown("d", () => {
        player.move(SPEED, 0);
    });

    onKeyDown("a", () => {
        player.move(-SPEED, 0);
    });

    onKeyDown("s", () => {
        player.move(0, SPEED);
    });

    onKeyDown("w", () => {
        player.move(0, -SPEED);
    });

    return player
}

export const GRAVITY = 9.8;

export default {
    hamsterPlayer,
    GRAVITY: GRAVITY
}