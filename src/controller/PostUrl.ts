/**
 * PostUrl 
 */
class PostUrl extends egret.DisplayObjectContainer {

    private statusGetLabel:egret.TextField;
    private statusPostLabel:egret.TextField;

    constructor() {
        super();
        this.sendGetRequest();
    }

    private sendGetRequest():void {
        var statusGetLabel = new egret.TextField();
        this.statusGetLabel = statusGetLabel;
        statusGetLabel.size = 18;
        statusGetLabel.text = "GET request being sent to httpbin.org";
        this.addChild(statusGetLabel);
        statusGetLabel.x = 50;
        statusGetLabel.y = 140;
        var request = new egret.HttpRequest();
        request.responseType = egret.HttpResponseType.TEXT;
        var params = "?format=2&cityname=%E4%B8%8A%E6%B5%B7&key=fd64d3df562fd4c89c4fe0e95d08151a";
        //request.open("http://apis.juhe.cn/geo/?key=0d63889d8e31c4c6ff1c7d7b7d336904&lat="+jin+"&lng="+wei+"&type=1",egret.HttpMethod.GET);
        request.open("http://v.juhe.cn/weather/index"+params,egret.HttpMethod.GET);
        request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        request.send();
        request.addEventListener(egret.Event.COMPLETE,this.onGetComplete,this);
        request.addEventListener(egret.IOErrorEvent.IO_ERROR,this.onGetIOError,this);
        request.addEventListener(egret.ProgressEvent.PROGRESS,this.onGetProgress,this);
    }
    private onGetComplete(event:egret.Event):void {
        var request = <egret.HttpRequest>event.currentTarget;
        alert(request.response);
        console.log("get data : ",request.response);
        var responseLabel = new egret.TextField();
        responseLabel.size = 18;
        responseLabel.text = "GET response: \n" + request.response.substring(0, 50) + "...";
        this.addChild(responseLabel);
        responseLabel.x = 50;
        responseLabel.y = 70;
        this.statusGetLabel.text = "Get GET response!";
    }
    private onGetIOError(event:egret.IOErrorEvent):void {
        console.log("get error : " + event);
    }
    private onGetProgress(event:egret.ProgressEvent):void {
        console.log("get progress : " + Math.floor(100*event.bytesLoaded/event.bytesTotal) + "%");
    }
}