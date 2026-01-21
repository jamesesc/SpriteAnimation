class Mordecai {
    constructor(game) {
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./Mordecai.png"), 4, 195, 65, 70, 4, .15);
    }

    update() {

    }

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, 25, 300);
        //ctx.drawImage(ASSET_MANAGER.getAsset("./Mordecai.png"), 0, 0);
        
        

    }

}