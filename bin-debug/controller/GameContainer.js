var GameContainer = (function (_super) {
    __extends(GameContainer, _super);
    function GameContainer() {
        _super.call(this);
        this.once(egret.Event.ADDED_TO_STAGE, this.onAddtoStage, this);
    }
    var d = __define,c=GameContainer,p=c.prototype;
    p.onAddtoStage = function () {
        //var sound:SoundExample = new SoundExample();
        var bg = game.createBitmapByName("index");
        var gil = game.createBitmapByName("corner_mark_4");
        var textlow = new TextLow();
        var musicui = new MusicUI();
        this.addChild(bg);
        this.addChild(gil);
        //this.addChild(sound);
        this.addChild(textlow);
        this.addChild(musicui);
        gil.x = 100;
        gil.y = 500;
        bg.touchEnabled = true;
        bg.addEventListener(egret.TouchEvent.TOUCH_TAP, function (evt) {
            musicui.onTouch();
        }, this);
    };
    return GameContainer;
}(egret.DisplayObjectContainer));
egret.registerClass(GameContainer,'GameContainer');
//# sourceMappingURL=GameContainer.js.map