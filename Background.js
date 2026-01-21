class Background {
    constructor(game) {
        this.game = game;
        
        // Background positions: House, Sky, Trees
        this.house = { x: 0, y: 243, w: 433, h:238};
        this.sky = { x: 2, y: 2, w: 433, h: 238};
        this.trees = { x: 437, y: 3, w: 429, h: 240}

        // Scale use to scale up the background
        this.scale = 3
    }

    update() {

    }

    draw(ctx) {
        // Order matters: Drawing Sky -> Tree -> House
        ctx.drawImage(ASSET_MANAGER.getAsset("./Background.png"),
        this.sky.x, this.sky.y,
        this.sky.w, this.sky.h,
        -10, -5,
        this.sky.w * this.scale, this.sky.h * this.scale)

        ctx.drawImage(ASSET_MANAGER.getAsset("./Background.png"),
        this.trees.x, this.trees.y,
        this.trees.w, this.trees.h,
        -10, -5,
        this.trees.w * this.scale, this.trees.h * this.scale)

        ctx.drawImage(ASSET_MANAGER.getAsset("./Background.png"),
        this.house.x, this.house.y,
        this.house.w, this.house.h,
        -10, -5,
        this.house.w * this.scale, this.house.h * this.scale)
    };
}