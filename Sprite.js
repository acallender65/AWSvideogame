class Sprite {
    constructor(config) {
        //Set up the image
        this.image = new Image();
        this.image.src = config.src;
        this.image.onload = () => {
            this.isLoaded = true;
        }

        //Set up the shadow
        this.shadow = new Image();
        this.useShadow = true; // config.useShadow || false
        if (this.useShadow) {
            this.shadow.src = "/images/characters/shadow.png"
        }
        this.shadow.onload = () => {
            this.isShadowLoaded = true;
        }
        

        //Configure animations and intial state
        this.animations = config.animations || {
            idleDown: [
                [0,0]
            ]
        }
        this.currentAnimation = config.currentAnimation || "idleDown";
        this.currentAnimationFrame = 0;

        // Reference the game object
        this.gameObject = config.gameObject;
    }

    // Create a draw method
    draw(ctx) {
        const x = this.gameObject.x;
        const y = this.gameObject.y;

        this.isShadowLoaded && ctx.drawImage(this.shadow, x, y);

        this.isLoaded && ctx.drawImage(
            this.image, 
            0, // horizontal crop start
            0, // vertical crop start
            32, // horizontal crop end
            32, // vertical crop end
            x, // x position of character on map
            y, // y position of character on map
            32, // width of character
            32 // height of character
        )
    }
}
