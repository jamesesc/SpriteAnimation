class Character {
    constructor(game) {
        this.game = game;

        // Starting Position for the character
        this.x = 400;
        this.y = 430;
        this.w = 65; 
        this.h = 65;

        // Var to keep track 
        this.faceDirection = "Right";
        this.action = "idle";
        this.character = "Mordecai";

        // Sprites address
        this.mordecaiSprite = ASSET_MANAGER.getAsset("./Mordecai.png");
        this.rigbySprite = ASSET_MANAGER.getAsset("./Rigby.png"); 

        // Method to create all animation for both character sprite
        this.createAnimations();
    }

    createAnimations() {
        // Mordecai Sprite Animations
        this.mordecaiAnimations = {
            "idle": new Animator(this.mordecaiSprite, 1, 80, 65, 63, 2, .50),
            "running": new Animator(this.mordecaiSprite, 4, 195, 65, 67, 6, .15),
            "walking": new Animator(this.mordecaiSprite, 1, 144, 65, 60, 3, .3),
            "woo": new Animator(this.mordecaiSprite, 0, 517, 63, 65, 6, .1)
        };

        // Rigby Sprite Animations
        this.rigbyAnimations = {
            "idle": new Animator(this.rigbySprite, 1, 80, 65, 63, 2, .50),
            "running": new Animator(this.rigbySprite,  4, 195, 62, 67, 3, .15),
            "walking": new Animator(this.rigbySprite, 1, 144, 65, 60, 3, .3),
            "woo": new Animator(this.rigbySprite, 0, 517, 65, 65, 6, .1)
        };
    }

    update() {
        // Constants for character speed
        const WALK_SPEED = 150;
        const RUN_SPEED = 300;

        // Functionality to switch charcters
        if(this.game.keys["g"] && !this.previousState) {
            if (this.character === "Mordecai") {
                this.character = "Rigby";
            } else {
                this.character = "Mordecai";
            }
            this.previousState = true;
        }
        
        // Preventing to switch if holding G
        if(!this.game.keys["g"]) {
            this.previousState = false;
        }

        this.action = "idle";

        // User inputs
        if(this.game.keys["w"]) {
            this.action = "woo";
        } else if(this.game.keys["a"]) {
            this.faceDirection = "Left";
            if (this.game.keys["Shift"]) {
                this.action = "running";
                this.x -= RUN_SPEED * this.game.clockTick;
            } else {
                this.action = "walking";
                this.x -= WALK_SPEED * this.game.clockTick;
            }
        } else if(this.game.keys["d"]) {
            this.faceDirection = "Right";
            if (this.game.keys["Shift"]) {
                this.action = "running";
                this.x += RUN_SPEED * this.game.clockTick;
            } else {
                this.action = "walking";
                this.x += WALK_SPEED * this.game.clockTick;
            }
        }

        // Prvent from leaving the map
        if (this.x < 0) this.x = 0;
        if (this.x > 1024 - this.w) this.x = 1000 - this.w;
    }

    draw(ctx) {
        // Knowing which animation array to use
        let currentAnimation;
        
        if (this.character === "Mordecai") {
            currentAnimation = this.mordecaiAnimations[this.action];
        } else {
            currentAnimation = this.rigbyAnimations[this.action];
        }
        
        // Help correct the woo drawing
        // Character & action specific vertical offset
            let heightOffset = 0;
            
            if (this.action === "woo") {
                if (this.character === "Mordecai") {
                    heightOffset = 30; // Woo animation is taller
                } else {
                    heightOffset = 25;
                }
            } else if (this.action === "running") {
                // Running frames are 67px tall vs 65px base - adjust by 2px
                heightOffset = 30;
            }
        let adjustedY = this.y - heightOffset;

        // Fliping the animation when fliping sides
        if (this.faceDirection === "Right") {
            currentAnimation.drawFrame(this.game.clockTick, ctx, this.x, adjustedY);
        } else {
            ctx.save();
            ctx.translate(this.x, adjustedY);
            ctx.scale(-1, 1);
            currentAnimation.drawFrame(this.game.clockTick, ctx, -this.w + -100, 0);
            ctx.restore();
        }
    }
}