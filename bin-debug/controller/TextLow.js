/**
 * TextLow打字机效果
 */
var TextLow = (function (_super) {
    __extends(TextLow, _super);
    function TextLow() {
        _super.call(this);
        this.once(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    var d = __define,c=TextLow,p=c.prototype;
    p.onAddToStage = function (event) {
        /// 提示信息
        this._txInfo = new egret.TextField;
        this._txInfo.size = 24;
        this._txInfo.textColor = 0x000000;
        this._txInfo.lineSpacing = 10;
        this._txInfo.multiline = true;
        this._txInfo.x = 30;
        this._txInfo.y = 30;
        this._txInfo.textColor = 0x000000;
        this.addChild(this._txInfo);
        var self = this;
        self.isComplete = true;
        var backFun = function () {
            self.isComplete = true;
        };
        /*** 点击舞台的时候会调用延迟方法 ***/
        // this.stage.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
        //     /*** 本示例关键代码段开始 ***/
        //     if (self.isComplete){
        self.isComplete = false;
        this.typerEffect(this._txInfo, "每个字符延迟150毫秒调用，实现打字机效果\n", 150, backFun);
        //     }
        //     /*** 本示例关键代码段结束 ***/
        // }, this); 
    };
    /**
    * 文字打字机效果
    * obj           文本对象
    * content       文字
    * interval      打字间隔 毫秒
    */
    p.typerEffect = function (obj, content, interval, backFun) {
        if (content === void 0) { content = ""; }
        if (interval === void 0) { interval = 200; }
        if (backFun === void 0) { backFun = null; }
        var strArr = content.split("");
        var len = strArr.length;
        for (var i = 0; i < len; i++) {
            egret.setTimeout(function () {
                obj.appendText(strArr[Number(this)]);
                if ((Number(this) >= len - 1) && (backFun != null)) {
                    backFun();
                }
            }, i, interval * i);
        }
    };
    return TextLow;
}(egret.DisplayObjectContainer));
egret.registerClass(TextLow,'TextLow');
//# sourceMappingURL=TextLow.js.map