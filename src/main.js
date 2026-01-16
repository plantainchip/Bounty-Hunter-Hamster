import kaplay from "kaplay";
// import "kaplay/global"; // uncomment if you want to use without the k. prefix

kaplay({
    width: 240,
    height: 160,
    scale:3,
});

let SPEED = 75;


loadRoot("./"); // A good idea for Itch.io publishing later
loadSprite("bean", "sprites/bean.png");
loadSprite("player", "./sprites/concept-player-idle.png");
loadSprite("home", "./sprites/concept-field00.png");
loadSprite("radio-field", "./sprites/concept-field01.png");
loadSprite("ants-field", "./sprites/concept-field02.png");



add([ sprite("radio-field"), ]);

const player = add([
    sprite("player"),
    pos(100, 96),
    body(),
    area(),
    doubleJump(2),
    z(10),
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


// onClick(() => addKaboom(mousePos()));