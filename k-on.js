(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 375,
	height: 667,
	fps: 24,
	color: "#00BBFF",
	opacity: 1.00,
	manifest: [
		{src:"images/btn_menu.png?1472464808221", id:"btn_menu"}
	]
};



lib.ssMetadata = [];


// symbols:



(lib.btn_menu = function() {
	this.initialize(img.btn_menu);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,49,30);


(lib.画面 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D64A85").s().p("EgVVAl0QhYAAgBhUMAAAhI+QABhUBYgBMAqrAAAQBYABABBUMAAABI+QgBBUhYAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-145.5,-242,291,484);


(lib.button = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.btn_menu();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,49,30);


// stage content:
(lib.kon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* クリックして Web ページに移動
		特定のシンボルインスタンス上でクリックすると、新しいブラウザーウィンドウに URL がロードされます。
		
		手順 :
		1. http://www.adobe.com を目的の URL アドレスに置き換えます。
		   二重引用符 ("") は付けたままにします。
		*/
		
		this.button01.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open("http://www.adobe.com", "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(47));

	// ボタン
	this.button01 = new lib.button();
	this.button01.parent = this;
	this.button01.setTransform(193.4,564.5,1,1,0,0,0,24.5,15);
	new cjs.ButtonHelper(this.button01, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.button01).wait(1).to({y:565.1},0).wait(1).to({y:565.7},0).wait(1).to({y:566.3},0).wait(1).to({y:567},0).wait(1).to({y:567.6},0).wait(1).to({y:568.2},0).wait(1).to({y:568.8},0).wait(1).to({y:569.5},0).wait(1).to({y:570.1},0).wait(1).to({y:570.7},0).wait(1).to({y:571.4},0).wait(1).to({y:572},0).wait(1).to({y:572.6},0).wait(1).to({y:573.2},0).wait(1).to({y:573.9},0).wait(1).to({y:574.5},0).wait(1).to({y:575.1},0).wait(1).to({y:575.8},0).wait(1).to({y:576.4},0).wait(1).to({y:577},0).wait(1).to({y:577.6},0).wait(1).to({y:578.3},0).wait(1).to({y:578.9},0).wait(1).to({y:578.4},0).wait(1).to({y:577.8},0).wait(1).to({y:577.3},0).wait(1).to({y:576.8},0).wait(1).to({y:576.2},0).wait(1).to({y:575.7},0).wait(1).to({y:575.2},0).wait(1).to({y:574.7},0).wait(1).to({y:574.1},0).wait(1).to({y:573.6},0).wait(1).to({y:573.1},0).wait(1).to({y:572.5},0).wait(1).to({y:572},0).wait(1).to({y:571.5},0).wait(1).to({y:570.9},0).wait(1).to({y:570.4},0).wait(1).to({y:569.9},0).wait(1).to({y:569.4},0).wait(1).to({y:568.8},0).wait(1).to({y:568.3},0).wait(1).to({y:567.8},0).wait(1).to({y:567.2},0).wait(1).to({y:566.7},0).wait(1));

	// 画面
	this.instance = new lib.画面();
	this.instance.parent = this;
	this.instance.setTransform(190.1,268.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(47));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(232.1,360.4,291,552.6);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;