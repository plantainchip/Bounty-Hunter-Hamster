import kaplay from "kaplay";
import "kaplay/global"; // uncomment if you want to use without the k. prefix

/* import all scenes here ---------------------------------*/

import scene0 from "./scene0";
import scene1 from "./scene1";
import scene2 from "./scene2";
import scene3 from "./scene3";
import scene4 from "./scene4";
import scene5 from "./scene5";
import scene6 from "./scene6";
import scene7 from "./scene7";
import scene8 from "./scene8";
import scene9 from "./scene9";
import scene10 from "./scene10";
import scene11 from "./scene11";
import scene12 from "./scene12";
import scene13 from "./scene13";
import scene14 from "./scene14";
import scene15 from "./scene15";
import scene16 from "./scene16";
import scene17 from "./scene17";
import scene18 from "./scene18";
import scene19 from "./scene19";
import scene20 from "./scene20";
import scene21 from "./scene21";
import scene22 from "./scene22";
import scene23 from "./scene23";
import scene24 from "./scene24";


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

loadSprite("grid0","./sprites/worldmap25slices/output_0.png");
loadSprite("grid1","./sprites/worldmap25slices/output_1.png");
loadSprite("grid2","./sprites/worldmap25slices/output_2.png");
loadSprite("grid3","./sprites/worldmap25slices/output_3.png");
loadSprite("grid4","./sprites/worldmap25slices/output_4.png");
loadSprite("grid5","./sprites/worldmap25slices/output_5.png");
loadSprite("grid6","./sprites/worldmap25slices/output_6.png");
loadSprite("grid7","./sprites/worldmap25slices/output_7.png");
loadSprite("grid8","./sprites/worldmap25slices/output_8.png");
loadSprite("grid9","./sprites/worldmap25slices/output_9.png");
loadSprite("grid10","./sprites/worldmap25slices/output_10.png");
loadSprite("grid11","./sprites/worldmap25slices/output_11.png");
loadSprite("grid12","./sprites/worldmap25slices/output_12.png");
loadSprite("grid13","./sprites/worldmap25slices/output_13.png");
loadSprite("grid14","./sprites/worldmap25slices/output_14.png");
loadSprite("grid15","./sprites/worldmap25slices/output_15.png");
loadSprite("grid16","./sprites/worldmap25slices/output_16.png");
loadSprite("grid17","./sprites/worldmap25slices/output_17.png");
loadSprite("grid18","./sprites/worldmap25slices/output_18.png");
loadSprite("grid19","./sprites/worldmap25slices/output_19.png");
loadSprite("grid20","./sprites/worldmap25slices/output_20.png");
loadSprite("grid21","./sprites/worldmap25slices/output_21.png");
loadSprite("grid22","./sprites/worldmap25slices/output_22.png");
loadSprite("grid23","./sprites/worldmap25slices/output_23.png");
loadSprite("grid24","./sprites/worldmap25slices/output_24.png");


/* load all scenes here ----------------------------------*/


scene("scene0",scene0); 
scene("scene1",scene1); 
scene("scene2",scene2); 
scene("scene3",scene3);
scene("scene4",scene4); 
scene("scene5",scene5); 
scene("scene6",scene6); 
scene("scene7",scene7); 
scene("scene8",scene8); 
scene("scene9",scene9); 
scene("scene10",scene10);
scene("scene11",scene11); 
scene("scene12",scene12); 
scene("scene13",scene13); 
scene("scene14",scene14); 
scene("scene15",scene15); 
scene("scene16",scene16); 
scene("scene17",scene17); 
scene("scene18",scene18); 
scene("scene19",scene19);
scene("scene20",scene20);
scene("scene21",scene21);
scene("scene22",scene22);
scene("scene23",scene23);
scene("scene24",scene24);


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
        go("scene19", STATE);
    })
})

/* CHANGE SCENES HERE FOR DEBUGGING !!!!!!!!!!!*/
onLoad(() => go("scene19",STATE))
// go("start");



// onClick(() => addKaboom(mousePos()));