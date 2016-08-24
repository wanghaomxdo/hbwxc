class SoundExample extends egret.DisplayObjectContainer {
    public constructor() {
        super();
        this.once(egret.Event.ADDED_TO_STAGE,this.onAddtoStage,this);
    }
    private onAddtoStage() {
        this.startLoad();
    }
    private startLoad():void {
        //创建 URLLoader 对象
        var loader:egret.URLLoader = new egret.URLLoader();
        //设置加载方式为声音
        loader.dataFormat = egret.URLLoaderDataFormat.SOUND;
        //添加加载完成侦听
        loader.addEventListener(egret.Event.COMPLETE, this.onLoadComplete, this);
        //音频资源放在resource文件夹下
        var url:string = RES.getRes("mp3").url;
        
        var request:egret.URLRequest = new egret.URLRequest(url);
        //开始加载
        loader.load(request);
    }

    private _btn;
    private _muBtn;
    private onLoadComplete(event:egret.Event):void {
        var loader:egret.URLLoader = <egret.URLLoader>event.target;
        //获取加载到的 Sound 对象
        var sound:egret.Sound = <egret.Sound>loader.data;
        this.sound = sound;
        //一个简单的播放按钮
        this._btn = game.createBitmapByName("disc");
        this._btn.touchEnabled = true;
        this._btn.anchorOffsetX = this._btn.width / 2;
        this._btn.x = this.stage.stageWidth / 2;
        this._btn.anchorOffsetY = this._btn.height / 2;
        this._btn.y = 350;
        //监听按钮的触摸事件
        this._btn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouch,this);
        this.addChild(this._btn);

        //按钮
        this._muBtn = game.createBitmapByName("needle");
        this._muBtn.anchorOffsetX = this._muBtn.width / 4;
        this._muBtn.anchorOffsetY = 0;
        this._muBtn.x = 450;
        //this._muBtn.rotation = 15;
        this.addChild(this._muBtn);
    }

    private round():void{
        this._btn.rotation += 3;
    }

    private sound:egret.Sound;
    private soundChannel:egret.SoundChannel;
    private onTouch(event:egret.Event):void{
        var sound = this.sound;
        var channel:egret.SoundChannel = this.soundChannel;
        var tw = egret.Tween.get( this._muBtn );
        if(channel){
            //调用soundChannel对象的stop方法停止播放音频
            console.log(channel);
            channel.stop();
            this.soundChannel = null;
            this._muBtn.rotation = 0;
            this.removeEventListener(egret.Event.ENTER_FRAME, this.round, this);
            return;
        }
        //旋转
        this._muBtn.rotation = 15;
        this.addEventListener( egret.Event.ENTER_FRAME, this.round, this );
        //使用SoundChannel播放音频
        channel = sound.play(0,-1);
        //Egret 3.0.4 新增获取音频长度 length 属性。
        console.log(sound.length);
        channel.addEventListener(egret.Event.SOUND_COMPLETE, this.onSoundComplete, this);
        //保存soundChannel对象
        this.soundChannel = channel;
    }
    private onSoundComplete(event:egret.Event):void {
        console.log("onSoundComplete");
    }
}