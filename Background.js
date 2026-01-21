class Background {
    constructor(game) {
        this.game = game;


        this.house = { x: 0, y: 243, w: 433, h:238};

        this.sky = { x: 2, y: 2, w: 433, h: 238};
        
        this.scale = 3


    }

    update() {

    }


    draw(ctx) {
        ctx.drawImage(ASSET_MANAGER.getAsset("./Background.png"),
        this.sky.x, this.sky.y,
        this.sky.w, this.sky.h,
        0, 0,
        this.sky.w * this.scale, this.sky.h * this.scale)


        

    };



}