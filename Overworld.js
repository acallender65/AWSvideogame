class Overworld {
    constructor(config) {
      this.element = config.element;
      this.canvas = this.element.querySelector(".game-canvas");
      this.ctx = this.canvas.getContext("2d");
    }
   
    init() {
      const map = new Image();
      map.onload = () => {
        this.ctx.drawImage(map,0,0)
      };
      map.src = "backgrounds-4.png.png";
   
      const character = new Image();
      character.onload = () => {
        this.ctx.drawImage(character, 0, 0)
      }
      character.src = "Actual Character.png";
   
   
    }
   
   }