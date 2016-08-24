/**
 * GroupBox
 */
var GroupBox = (function (_super) {
    __extends(GroupBox, _super);
    function GroupBox() {
        _super.call(this);
        this.once(egret.Event.ADDED_TO_STAGE, this.onAddtoStage, this);
    }
    var d = __define,c=GroupBox,p=c.prototype;
    p.onAddtoStage = function () {
        //创建新容器
        this.group = new egret.DisplayObjectContainer();
        this.addChild(this.group);
        var bg = game.createBitmapByName("corner_2");
        var bg1 = game.createBitmapByName("corner_2");
        bg1.x = bg1.width + 50;
        var bg2 = game.createBitmapByName("corner_2");
        bg2.x = bg2.width * 2 + 100;
        this.group.addChild(bg);
        this.group.addChild(bg1);
        this.group.addChild(bg2);
        //创建 ScrollView
        this.scrollView = new egret.ScrollView();
        this.scrollView.verticalScrollPolicy = "off";
        //设置滚动内容
        this.scrollView.setContent(this.group);
        //设置滚动区域宽高
        this.scrollView.width = 640;
        this.scrollView.height = 800;
        this.addChild(this.scrollView);
        this.scrollView.addEventListener(egret.Event.CHANGE, this.onChange, this);
    };
    //滚动视图位置改变监听
    p.onChange = function (event) {
    };
    return GroupBox;
}(egret.DisplayObjectContainer));
egret.registerClass(GroupBox,'GroupBox');
//# sourceMappingURL=GroupBox.js.map