/**
 * MusicUI extends egret.Sprite
 */
var MusicUI = (function (_super) {
    __extends(MusicUI, _super);
    function MusicUI() {
        _super.call(this);
        this.createView();
    }
    var d = __define,c=MusicUI,p=c.prototype;
    /**
     * @returns void
     * 创建音乐播放器界面
     */
    p.createView = function () {
        var _this = this;
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
        this._sprcon.addChild(this._muBg);
        var topBg = game.createBitmapByName("corner_1");
        topBg.width = 640;
        topBg.height = 570;
        this._sprcon.addChild(topBg);
        //添加音乐
        var sound = new SoundExample;
        this._sprcon.addChild(sound);
        this._sprcon.touchEnabled = true;
        this._sprcon.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function (evt) {
            _this._touchY = evt.stageY;
        }, this);
        this._sprcon.addEventListener(egret.TouchEvent.TOUCH_END, function (evt) {
            _this._touchY = _this._touchY - evt.stageY;
            if (_this._touchY < 0) {
                _this.muOut();
                _this._touchY = 0;
            }
            _this._touchY = 0;
        }, this);
    };
    /**
     * @returns void
     * 点击弹出
     */
    p.onTouch = function () {
        var tw = egret.Tween.get(this._sprcon);
        tw.to({ y: 336 }, 1000, egret.Ease.bounceOut);
    };
    p.muOut = function () {
        var tw = egret.Tween.get(this._sprcon);
        tw.to({ y: 1136 }, 1000, egret.Ease.quintOut);
    };
    return MusicUI;
}(egret.Sprite));
egret.registerClass(MusicUI,'MusicUI');
//# sourceMappingURL=MusicUI.js.map