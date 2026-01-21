const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

// Adding all the sprite assest 
ASSET_MANAGER.queueDownload("./Background.png")
ASSET_MANAGER.queueDownload("./Rigby.png");
ASSET_MANAGER.queueDownload("./Mordecai.png");


ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");
	ctx.imageSmoothingEnabled = false;

	// Adding the Character and Background Entity
	gameEngine.addEntity(new Character(gameEngine));
	gameEngine.addEntity(new Background(gameEngine));
	
	gameEngine.init(ctx);
	gameEngine.start();
});
