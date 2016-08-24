/**
 * GroupBox
 */
class GroupBox extends egret.DisplayObjectContainer{
    constructor() {
        super();
        this.once(egret.Event.ADDED_TO_STAGE,this.onAddtoStage,this);
    }

    private group; //滚动容器
    //创建 ScrollView
    private scrollView:egret.ScrollView;
    private onAddtoStage():void{
        //创建新容器
        this.group = new egret.DisplayObjectContainer();
        this.addChild(this.group);

        var bg:egret.Bitmap = game.createBitmapByName("corner_2");
        var bg1:egret.Bitmap = game.createBitmapByName("corner_2");
        bg1.x = bg1.width + 50; 
        var bg2:egret.Bitmap = game.createBitmapByName("corner_2");
        bg2.x = bg2.width*2 + 100;
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
        this.scrollView.addEventListener(egret.Event.CHANGE,this.onChange,this);
    }
    //滚动视图位置改变监听
    private onChange(event:egret.Event){
        
    }
}