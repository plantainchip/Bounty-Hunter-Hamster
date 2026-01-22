import kaplay from "kaplay";
import "kaplay/global"; // uncomment if you want to use without the k. prefix

/* import all scenes here ---------------------------------*/

import scene1 from "./scene1";
import scene2 from "./scene2";

import {
    hamsterPlayer,
} from "./player-info";

/* begin kaplay project here ---------------------------------*/
kaplay({
    width: 240,
    height: 160,
    scale:3,
});

/* load all assets here ---------------------------------- */
loadRoot("./"); // A good idea for Itch.io publishing later
loadSprite("bean", "sprites/bean.png");
loadSprite("player", "./sprites/concept-player-idle.png");
loadSprite("home", "./sprites/concept-field00.png");
loadSprite("radio-field", "./sprites/concept-field01.png");
loadSprite("ants-field", "./sprites/concept-field02.png");

/* load all scenes here ----------------------------------*/
scene("scene1",scene1) // hi
scene("scene2",scene2) // hi


/* player info */
// to-do: put player info in another file
// and import player controls instead of copy pasting them

const STATE ={
    protag:{
        location:{
            x: 100,
            y: 96,
        }
    }
}

scene("start",(STATE)=>{
    onKeyPress((key) => {
        go("scene1", STATE);
    })
})

/* CHANGE SCENES HERE FOR DEBUGGING !!!!!!!!!!!*/
onLoad(() => go("scene1",STATE))
// go("start");






// onClick(() => addKaboom(mousePos()));