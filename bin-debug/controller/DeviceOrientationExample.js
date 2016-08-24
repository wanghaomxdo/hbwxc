/**
 * DeviceOrientationExample
 */
var DeviceOrientationExample = (function (_super) {
    __extends(DeviceOrientationExample, _super);
    function DeviceOrientationExample() {
        _super.call(this);
        this.label = new egret.TextField();
        this.label.y = 50;
        this.label.x = 50;
        this.addChild(this.label);
        //创建 DeviceOrientation 类
        var orientation = new egret.DeviceOrientation();
        //添加事件监听器
        orientation.addEventListener(egret.Event.CHANGE, this.onOrientation, this);
        //开始监听设备方向变化
        orientation.start();
    }
    var d = __define,c=DeviceOrientationExample,p=c.prototype;
    /**
     * @param  {egret.OrientationEvent} e
     * 监听设备方向变化
     */
    p.onOrientation = function (e) {
        this.label.text =
            "方向: Z轴:" + e.alpha
                + "\n,X轴:" + e.beta
                + "\n,Y轴:" + e.gamma;
    };
    return DeviceOrientationExample;
}(egret.DisplayObjectContainer));
egret.registerClass(DeviceOrientationExample,'DeviceOrientationExample');
//# sourceMappingURL=DeviceOrientationExample.js.map