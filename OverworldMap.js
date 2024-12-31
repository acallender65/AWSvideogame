import { GameObject } from "./GameObject.js";

export class OverworldMap {
    constructor(config) {
        this.gameObjects = config.gameObjects;

        this.lowerImage = new Image();
        this.lowerImage.src = config.lowerSrc;

        this.upperImage = new Image();
        this.upperImage.src = config.upperSrc;
    }

    drawLowerImage(ctx) {
        ctx.drawImage(this.lowerImage, 0, 0)
    }

    drawUpperImage(ctx) {
        ctx.drawImage(this.upperImage, 0, 0)
    }


}

window.OverworldMaps = {
    Library: {
        lowerSrc: "/images/maps/backgrounds-4.png.png",
        upperSrc: "/images/maps/transparent.png",
        gameObjects: {
            mc: new GameObject({
                x: 50, 
                y: 150
            }),
            npc: new GameObject({
                x: 50, 
                y: 200,
                src: "/images/characters/filler.png"
            })
        }
    }
}