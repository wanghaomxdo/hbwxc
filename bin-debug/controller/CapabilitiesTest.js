/**
 * 获取系统信息类
 */
var CapabilitiesTest = (function (_super) {
    __extends(CapabilitiesTest, _super);
    function CapabilitiesTest() {
        _super.call(this);
        var capabilites = [
            { text: "移动设备: " + egret.Capabilities.isMobile + "\n", style: { size: 17, "fontFamily": "楷体" } },
            { text: "语言代码: " + egret.Capabilities.language + "\n", style: { size: 17, "fontFamily": "楷体" } },
            { text: "操作系统: " + egret.Capabilities.os + "\n", style: { size: 17, "fontFamily": "楷体" } },
            { text: "运行类型: " + egret.Capabilities.runtimeType + "\n", style: { size: 17, "fontFamily": "楷体" } }
        ];
        var showCapabilities = new egret.TextField();
        showCapabilities.textFlow = capabilites;
        this.addChild(showCapabilities);
    }
    var d = __define,c=CapabilitiesTest,p=c.prototype;
    return CapabilitiesTest;
}(egret.Sprite));
egret.registerClass(CapabilitiesTest,'CapabilitiesTest');
//# sourceMappingURL=CapabilitiesTest.js.map