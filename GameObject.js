import { Sprite } from './Sprite.js'
import hi from "/images/characters/ActualCharacter.png"

export class GameObject {
    constructor(config) {
        this.x = config.x || 0;
        this.y = config.y || 0;
        this.sprite = new Sprite({
            gameObject: this,
            src: config.src || hi,

        });
    }
}