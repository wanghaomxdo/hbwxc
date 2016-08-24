class GameContainer extends egret.DisplayObjectContainer{
    public constructor() {
        super();
        this.once(egret.Event.ADDED_TO_STAGE,this.onAddtoStage,this);
    }
    
    private onAddtoStage() {
        //var sound:SoundExample = new SoundExample();
        var bg:egret.Bitmap = game.createBitmapByName("index");
        var gil:egret.Bitmap = game.createBitmapByName("corner_mark_4");
        var textlow:TextLow = new TextLow();
        var musicui:MusicUI = new MusicUI();
        this.addChild(bg);
        this.addChild(gil);
        //this.addChild(sound);
        this.addChild(textlow);
        this.addChild(musicui);

        gil.x=100;
        gil.y=500;
        bg.touchEnabled = true;
        bg.addEventListener(egret.TouchEvent.TOUCH_TAP, ( evt:egret.TouchEvent )=>{
            musicui.onTouch();
        }, this);
    }
}