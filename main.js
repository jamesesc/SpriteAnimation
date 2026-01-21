const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./Background.png")

ASSET_MANAGER.queueDownload("./Mordecai.png");


ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");
	ctx.imageSmoothingEnabled = false;

	gameEngine.addEntity(new Background(gameEngine));
	gameEngine.addEntity(new Mordecai(gameEngine));

	gameEngine.init(ctx);

	gameEngine.start();
});
