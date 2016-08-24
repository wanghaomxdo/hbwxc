/**
 * MusicUI extends egret.Sprite
 */
class MusicUI extends egret.Sprite {

    constructor() {
        super();
        this.createView();
    }
    private _muBg:egret.Bitmap;   //背景
    private _sprcon:egret.Sprite; //容器
    private _touchY:number;  //点击时的Y轴坐标
    /**
     * @returns void
     * 创建音乐播放器界面
     */
    private createView():void{
        //创建容器
        this._sprcon = new egret.Sprite();
        this.addChild(this._sprcon);
        this._sprcon.y = 1136;
        //this._sprcon.y = 336;
        //背景
        this._muBg = game.createBitmapByName("corner_2");
        this._muBg.width = 640;
        this._muBg.height = 800;
        this._muBg.name = "muBg";
        this._sprcon.addChild( this._muBg );

        var topBg:egret.Bitmap = game.createBitmapByName("corner_1");
        topBg.width = 640;
        topBg.height = 570;
        this._sprcon.addChild(topBg);
        //添加音乐
        var sound:SoundExample = new SoundExample;
        this._sprcon.addChild(sound);

        this._sprcon.touchEnabled = true;
        this._sprcon.addEventListener(egret.TouchEvent.TOUCH_BEGIN, ( evt:egret.TouchEvent )=>{
            this._touchY = evt.stageY;
        }, this);
        this._sprcon.addEventListener(egret.TouchEvent.TOUCH_END, ( evt:egret.TouchEvent )=>{
            this._touchY = this._touchY - evt.stageY;
            if(this._touchY < 0){
                this.muOut();
                 this._touchY = 0;
            }
            this._touchY = 0;
        }, this);
    }
    /**
     * @returns void
     * 点击弹出
     */
    public onTouch():void{
        var tw = egret.Tween.get( this._sprcon );
        tw.to( {y:336}, 1000, egret.Ease.bounceOut);
    }

    private muOut():void{
        var tw = egret.Tween.get( this._sprcon );
        tw.to( {y:1136}, 1000, egret.Ease.quintOut);
    }
}