/**
 * GeolocationTest
 */
class GeolocationTest extends egret.DisplayObjectContainer{
    private label:egret.TextField;
    constructor() {
        super();
        //显示信息
        this.label = new egret.TextField;
        this.label.x = 320;
        this.addChild(this.label);
        this.label.size = 20;
        this.label.fontFamily = "楷体";
        this.label.text = "暂未获取到经纬度信息";
        this.label.anchorOffsetX = this.label.width;

        var gps = new egret.Geolocation();
        //监听经纬度变化事件
        gps.addEventListener(egret.Event.CHANGE,this.onGotLocation,this);
        //监听用户拒绝事件
        gps.once(egret.GeolocationEvent.PERMISSION_DENIED,this.userDenied,this);
        //监听失败事件
        gps.addEventListener(egret.GeolocationEvent.UNAVAILABLE,this.unAvailable,this);
        //开始监听变化
        gps.start();
    }
    /**
     * @param  {egret.GeolocationEvent} e
     * 监听经纬度变化事件
     */
    private onGotLocation(e:egret.GeolocationEvent){
        this.label.text = "纬度："+e.latitude.toFixed(4) + 
        "海拔：" + e.altitude +
        "n经度" + e.longitude.toFixed(4) +
        "速度" + e.speed;
        this.label.anchorOffsetX = this.label.width / 2;
        var post:PostUrl = new PostUrl();
        this.addChild(post);
    }
    /**
     * @param  {egret.GeolocationEvent} e
     * 监听用户拒绝事件
     */
    private userDenied(e:egret.GeolocationEvent){
        this.label.text = "用户拒绝访问位置信息，获取位置信息失败";
        this.label.anchorOffsetX = this.label.width / 2;
    }
    /**
     * @param  {egret.GeolocationEvent} e
     * 监听失败事件
     */
    private unAvailable (e:egret.GeolocationEvent) {
        this.label.text = "获取位置信息失败: " + e.errorMessage + "n"
            + "错误类型: " + e.errorType;
        this.label.anchorOffsetX = this.label.width / 2;
    }
}