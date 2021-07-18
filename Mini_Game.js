(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Mini_Game_atlas_1", frames: [[0,133,403,105],[0,240,297,101],[0,0,432,131],[0,343,261,68]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_4 = function() {
	this.initialize(ss["Mini_Game_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["Mini_Game_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["Mini_Game_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["Mini_Game_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Winner = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("Winner", "50px 'Wide Latin'", "#000033");
	this.text.lineHeight = 64;
	this.text.lineWidth = 369;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Winner, new cjs.Rectangle(0,0,372.8,65.6), null);


(lib.TryAgain = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("Try Again", "20px 'Wide Latin'", "#99FFCC");
	this.text.lineHeight = 27;
	this.text.parent = this;
	this.text.setTransform(16.95,10);

	this.instance = new lib.CachedBmp_4();
	this.instance.setTransform(-1.5,-1.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.TryAgain, new cjs.Rectangle(-1.5,-1.5,201.5,52.5), null);


(lib.Start = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("Start", "15px 'Wide Latin'");
	this.text.lineHeight = 20;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(376.8,-72.45,1.2077,2.223);

	this.instance = new lib.CachedBmp_3();
	this.instance.setTransform(351.85,-76.75,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Start, new cjs.Rectangle(351.9,-76.9,148.5,50.7), null);


(lib.Sky = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#279DAF").ss(1,1,1).p("EAoggBMIAAH7MhQ/AAAIAAnrEgofgEUIAAia");
	this.shape.setTransform(-120.775,-116.925);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3496D4").s().p("EgofAGvIAAnrIBcAAQAjgEAOgaQAFgJAIgIQAXAPAOAWQAYAoA+gPIAPh7IB7AAIgPiaIiLAPIgPgPQgqAEgEgWQgJgxgWgZQgmgBgmgGQg+gIgQAuIAfBrIguAAIAAiaMBQ/AAAIAABMIiKgOIhNBNIi5gQIgYAfQgJgLgNgEIgPA9IAlguQAJANAEAUQALA1AAA1QAaAJAeAZQAPAMAWAAQAegIANgUQAegsAiAaQgHAaAIAMQAIALAWgDICaAAIAPAPIAAH7gASpFOIgFAEQgvAhBSAdIDYAAIA9hcIBNAfIBNABQEoAFC1iBIg+hsIhrAAIg+BNIg9hdIliAQQgIAUgXAbQgRAUgOApIjXAAgA6SCRQAUAtAZAaICKAAIBdhdQAtABAuAHQBgACA7gZIAAjHQgngBghAOQizBKiGhXQALgxgWgSQgMgKgIgPIjXAAQAAAHgEACQhlBEiMBMIgBgPIAAAPIABAAIAODHIBNAAQBaAGAxgkQAPgXAfgFQAXgDAXAAQAWAOAKAXgABHAfQgCAHAAAIQAJAtA2gFQApgFAjgTQAHgiAbgYQAMgKAPgIIBNBMICLAAIA9h6IDIgQIAAhcQgPgXgKgZQgXg+gsgNQgogBgiAJQg9ATgyAiQgmAAgmgHQhEgIgZAuQgiAGgXgcQgggmgiggIhsAAIhqA9IgFANQgKACgHAEQgZANgPAPIAQC3IB6gOIAJgBQAiAAgLAug");
	this.shape_1.setTransform(-120.775,-116.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Sky, new cjs.Rectangle(-381,-161,520.5,88.2), null);


(lib.ScoreT = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("Score", "25px 'Wide Latin'", "#330000");
	this.text.lineHeight = 33;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ScoreT, new cjs.Rectangle(0,0,125.2,34.8), null);


(lib.Lost = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_2();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Lost, new cjs.Rectangle(0,0,216,65.5), null);


(lib.Home = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("A5qREQgTiRAAibQAAsMHnonQHnooKvAAQKwAAHnIoQHnInAAMMQAACbgUCRAIqnNIH8AAIAACLIn8AAgAionNIIZAAIAACpIoZAAgAuqm9IHtAAIAADIIntAAgAjHBcII4AAIAAPoIo4AAg");
	this.shape.setTransform(166.15,109.225);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#663300").s().p("AkEMJIAAvnII3AAIAAPngAvnoxIAAjHIHtAAIAADHgAjmpfIAAipIIZAAIAACpgAHtp+IAAiKIH7AAIAACKg");
	this.shape_1.setTransform(172.3,140.75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AFxREIAAvoIo4AAIAAPoI2jAAQgSiRgBibQABsMHmonQHnooKvAAQKwAAHmIoQHnInAAMMQAACbgTCRgAuqj1IHtAAIAAjIIntAAgAiokkIIZAAIAAipIoZAAgAIqlCIH8AAIAAiLIn8AAg");
	this.shape_2.setTransform(166.15,109.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Home, new cjs.Rectangle(-1.5,-1.5,335.3,221.5), null);


(lib.Ground = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#663300").ss(1,1,1).p("Egn5gFwMBPzAAAIAALhMhPzAAAg");
	this.shape.setTransform(184.625,84.575);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#663300").s().p("Egn5AFxIAArhMBPzAAAIAALhg");
	this.shape_1.setTransform(184.625,84.575);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Ground, new cjs.Rectangle(-71.7,46.7,512.7,75.8), null);


(lib.fruits = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#990000").ss(1,1,1).p("ACxAAQAAB5g0BWQgzBWhKAAQhJAAgzhWQg0hWAAh5QAAh4A0hWQAzhWBJAAQBKAAAzBWQA0BWAAB4g");
	this.shape.setTransform(17.7,29.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("Ah9DOQgzhVAAh5QAAh4AzhWQA0hVBJgBQBJABA0BVQA0BWAAB4QAAB5g0BVQg0BXhJAAQhJAAg0hXg");
	this.shape_1.setTransform(17.7,29.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.fruits, new cjs.Rectangle(-1,-1,37.4,60.5), null);


(lib.End = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("END", "20px 'Wide Latin'");
	this.text.lineHeight = 27;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(16.35,2);

	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(-0.5,-0.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.End, new cjs.Rectangle(-0.5,-0.5,130.5,34), null);


(lib.BirdFl = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Armature_75
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AmmgbQgHiRA8h4QBMiYCKgYQCMgWB3B4QB5B5AgDDQANBTgGBLIGlDKInTBMIgugWIm7jUIHShNIBFAhAj+hpQACAMgHAJQgGAKgNACQgMACgJgHQgKgHgCgMQgCgLAHgLQAHgJAMgCQAMgCAJAHQAKAHACAMgAjdhyQADAUgMAQQgLARgVADQgUADgRgMQgQgMgDgTQgDgUALgRQAMgRAUgDQAVgDAQAMQAQALAEAVgAlaEBQgeg4gThAQgLgogIgrQgGgqgCgnACsFoQhFBbhoARQiMAYh4h6Qgygzgjg+IjChbIiQAdIEGjeAocCmICRgd");
	this.shape.setTransform(68.5,38.8134);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999933").s().p("AgYAzICQgdQATBAAeA4gABdiNQACAoAGAqQAIArALAmIiQAdIiQAdgAB4AWIAAAAg");
	this.shape_1.setTransform(16.925,50.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgQAXQgJgGgDgNQgBgKAHgKQAHgJALgDQALgCAKAHQAKAHACAMQABALgGAKQgHAKgMABIgFABQgJAAgHgGg");
	this.shape_2.setTransform(40.1758,28.659);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgcAoQgQgMgDgUQgDgTALgRQAMgQAUgDQAUgDAQALQAQAMAEAUQADAUgMAQQgLAQgVAEIgIAAQgOAAgOgJgAgQgWQgMADgHAJQgHAKACAKQACANAKAGQAJAIAMgDQAMgBAGgKQAHgKgCgMQgCgLgKgHQgGgFgJAAIgFAAg");
	this.shape_3.setTransform(41.449,28.099);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#660000").s().p("AmIFyQgxgzgjg+Qgfg4gThAQgLgogHgrQgHgqgBgnQgIiRA8h4QBMiYCLgYQCLgWB5B4QB4B5AfDDQAOBTgGBLIGkDKInTBMIgugWIm7jUIHThNIBFAhIhFghInTBNIG7DUQhEBbhpARQgWAEgXAAQhyAAhlhmgAmYibQgVADgLARQgMARADAUQADATARAMQARAMAUgDQAUgDALgRQAMgQgDgUQgDgVgRgLQgNgJgPAAIgIAAg");
	this.shape_4.setTransform(81.5833,38.8134);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(1,1,1).p("AmMg3QAGiSBFhyQBYiSCNgMQCLgJBuCBQBuCDAPDEQAHBUgNBLIGRDsInXAkIgsgZImnj5IHXglIBCAnACiF8QhNBVhpAIQiMALhuiDQgtg2gehBQgZg6gNhCQgIgpgEgrQgDgpACgoAi9h+QACAVgOAPQgMAQgVABQgUACgQgOQgPgMgCgVQgBgUANgQQANgPAVgCQATgBAQANQAQANABAUgAjeh4QABAMgIAKQgIAIgMACQgMABgJgIQgJgIgBgMQAAgMAHgJQAIgJAMgBQAMgBAJAIQAJAHABAMgAoSB+ICTgQAlZDqIi5hsIiSARIEYjG");
	this.shape_5.setTransform(81.575,47.7566);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#999933").s().p("AgSAlICRgQQANBDAaA5gAByiQQgBAoADAqQADArAIAoIiRAQIiTARgAgSAlg");
	this.shape_6.setTransform(30.425,56.65);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgSAWQgJgIgBgMQAAgLAHgJQAIgJAMgBQALgBAJAIQAJAHABAMQABALgIAKQgIAIgMACIgCAAQgKAAgIgHg");
	this.shape_7.setTransform(56.3853,35.954);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgfAlQgQgMgBgVQgBgTAMgQQAOgPAVgCQASgBAQANQAPANACAUQACAUgOAPQgMAQgVABIgFAAQgQAAgOgMgAgOgXQgMABgIAJQgHAJAAALQABAMAJAIQAJAIAMgBQALgCAIgIQAIgKgCgMQAAgLgJgHQgIgHgLAAIgBAAg");
	this.shape_8.setTransform(57.6997,35.4862);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#660000").s().p("AmZFhQgug2gehBQgZg6gNhCQgIgpgDgrQgEgpACgoQAGiSBFhyQBYiSCNgMQCMgJBtCBQBuCDAPDEQAHBUgNBLIGSDsInYAkIgrgZImnj5IHWglIBCAnIhCgnInWAlIGnD5QhNBVhqAIIgUABQiAAAhlh5gAl9irQgVACgNAPQgNAQACAUQABAVAQAMQAQAOATgCQAVgBAMgQQAOgPgBgVQgCgUgQgNQgOgMgRAAIgEAAg");
	this.shape_9.setTransform(95.55,47.7566);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(1,1,1).p("AmigfQgEiRA8h3QBOiYCLgWQCMgUB1B6QB4B6AdDDQAMBTgGBLIGhDOInUBHIgugWIm3jaIHShGIBGAhACqFrQhGBahoAQQiMAVh2h6Qgygzghg/Qgeg4gShBQgLgngGgsQgGgqgCgnAj5hrQACALgHAKQgHAJgMADQgLABgLgHQgJgGgCgNQgCgMAHgJQAIgKALgCQAMgBAKAHQAKAHABAMgAjYh0QADAUgMAQQgMARgUADQgUADgRgMQgQgMgDgUQgDgUAMgRQAMgQAUgDQAVgDAPAMQARAMADAUgAoaCgICRgbAlZD+IjBheIiRAcIEJjb");
	this.shape_10.setTransform(83.4,47.8123);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#999933").s().p("AgXAxICQgbQASBBAeA4gABgiOQACAoAGAqQAGAsALAmIiQAbIiRAcgAgXAxg");
	this.shape_11.setTransform(31.925,58.925);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgQAXQgJgGgCgNQgCgLAHgJQAHgKAMgCQALgBAJAHQAKAHACAMQABAKgHAKQgGAJgNADIgEAAQgIAAgIgGg");
	this.shape_12.setTransform(55.591,37.425);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgcAoQgRgNgCgUQgDgSALgRQAMgRAVgCQATgDAQAMQAQALADAVQADASgMARQgMAQgUAEIgHAAQgPAAgNgJgAgQgWQgMACgHAKQgHAJACALQACAMAJAHQAKAHALgCQAMgCAGgJQAHgKgBgMQgCgLgKgHQgHgFgJAAIgEAAg");
	this.shape_13.setTransform(56.874,36.85);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#660000").s().p("AmKFwQgygzghg/Qgeg4gShBQgLgngGgsQgGgqgCgnQgEiRA8h3QBOiYCLgWQCMgUB2B6QB3B6AcDDQANBTgHBLIGhDOInTBHIgugWIm3jaIHShGIBFAhIhFghInSBGIG3DaQhFBahpAQQgVADgUAAQh0AAhlhogAmUidQgUADgMAQQgMARADAUQADAUAQAMQARAMAUgDQAUgDAMgRQAMgQgDgUQgDgUgRgMQgMgKgQAAIgIABg");
	this.shape_14.setTransform(96.6344,47.8123);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(1,1,1).p("Al8hIQANiQBKhvQBgiOCNgEQCMgFBnCJQBnCIAFDEQADBUgQBKIGFD/InZAOIgqgcImakNIHYgOIBAAqACcGGQhRBRhpAEQiOAEhniIQgqg4gahDQgXg7gKhDQgGgpAAgrQgCgpAEgpAipiEQAAAVgOAOQgOAPgVABQgUABgPgPQgPgNAAgVQAAgUAOgPQANgOAVgBQAVgBAOAOQAOAOACAUgAjLh/QAAAMgIAJQgIAIgMABQgMAAgJgIQgIgIgBgMQAAgMAIgJQAJgIALgBQAMgBAJAJQAIAHABANgAoLBoIiTAJIEii5AoLBoICTgKAlXDcIi0h0");
	this.shape_15.setTransform(80.3,47.7485);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#999933").s().p("AgPAeICSgKQAKBDAWA7gAB+iRQgEAoACAqQABAsAGAnIiSAKIiTAKg");
	this.shape_16.setTransform(29.575,55.075);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgTAVQgIgIgBgMQAAgLAIgJQAJgIALgBQALAAAJAIQAIAIABAMQAAALgIAJQgIAJgMAAQgLAAgJgIg");
	this.shape_17.setTransform(57,34.9986);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AghAjQgPgNAAgVQAAgTANgPQAOgOAVgBQATgBAPAOQAOAOABAUQAAAUgNAOQgOAPgVABIgCAAQgSAAgOgOgAgNgYQgMABgIAIQgIAJAAALQABAMAIAIQAJAIAMAAQALgBAIgIQAIgJAAgMQgBgMgIgHQgIgIgLAAIgBAAg");
	this.shape_18.setTransform(58.3491,34.6023);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#660000").s().p("AmiFXQgqg4gahDQgXg7gKhDQgGgpgBgrQgBgpAEgpQANiQBKhvQBgiOCNgEQCNgFBmCJQBnCIAFDEQACBUgQBKIGFD/InYAOIgrgcImakNIHYgOIBAAqIhAgqInYAOIGaENQhQBRhqAEIgIAAQiIAAhkiEgAlrizQgVABgOAOQgNAPAAAUQAAAVAPANQAPAPAUgBQAVgBAOgPQANgOAAgVQgBgUgOgOQgOgOgUAAIgBABg");
	this.shape_19.setTransform(94.6295,47.7485);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(1,1,1).p("Aj9hpQACAMgHAKQgHAJgMACQgMADgJgIQgKgGgCgMQgCgMAHgKQAHgJAMgDQAMgCAJAHQAKAHACAMgAjdhyQAEAUgMARQgMAQgUADQgUAEgRgMQgQgLgDgVQgDgUALgRQAMgQAUgDQAVgDAQALQAQAMADAUgAmlgaQgGiRA7h4QBMiZCKgYQCLgVB3B3QB5B5AfDCQAPBTgHBLIGkDJInTBNIgtgWIm6jTIHRhNIBFAgAmKCJQgMgngGgrQgHgqgCgnAlZECQgeg4gThBACsFnQhFBbhoASQiLAXh4h5Qgygygjg+IjBhbIiRAdIEGjeAoaCnICQge");
	this.shape_20.setTransform(83.725,47.8022);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#999933").s().p("AgYA0ICQgeQATBBAeA3gABdiOQACApAGAqQAHArAMAmIiQAeIiQAdgAgYA0g");
	this.shape_21.setTransform(32.25,59.35);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#660000").s().p("AmHFyQgygygig+Qgfg4gShBQgMgngHgrQgGgqgCgnQgHiRA7h4QBMiZCLgYQCLgVB4B3QB4B5AfDCQAOBTgGBLIGjDJInSBNIgugWIm6jTIHShNIBFAgIhFggInSBNIG6DTQhEBbhpASQgWAEgXAAQhxAAhlhmgAmXiaQgVADgLAQQgMARADAUQADAVARALQARAMAUgEQATgDAMgQQANgRgEgUQgEgUgQgMQgNgJgPAAIgIABgAApFng");
	this.shape_22.setTransform(96.7927,47.8022);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgQAXQgJgGgDgMQgBgLAHgKQAHgJALgDQALgCAKAHQAKAHACAMQABALgHAKQgGAJgMACIgFABQgJAAgHgGg");
	this.shape_23.setTransform(55.475,37.709);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgcAoQgQgLgDgVQgDgTALgRQAMgQAUgDQAUgDAQALQAQAMADAUQAEATgMARQgMAQgUADIgIABQgPAAgNgJgAgQgWQgMADgHAJQgHAKACALQACAMAKAGQAJAIAMgDQALgCAHgJQAHgKgCgMQgCgLgKgHQgGgFgJAAIgFAAg");
	this.shape_24.setTransform(56.7425,37.1413);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(1,1,1).p("Ai0iAQABAUgNAPQgOAPgUABQgUACgQgOQgPgOAAgUQgCgUAOgPQANgPAVgBQAUgCAPAOQAPANABAVgAmEg/QAJiQBIhyQBciQCMgIQCMgHBrCFQBqCFAKDEQAFBUgOBLIGLD0InYAaIgrgaQhPBThpAGQiMAIhriFQgsg4gchBQgYg7gLhDQgIgngCgsQgCgpADgpgACfGBImhkCIHYgaIBBAoAjVh7QABAMgIAJQgIAJgMABQgMABgJgJQgIgHgCgNQAAgMAIgJQAHgIANgBQAMgBAJAIQAIAIABAMgAoOB0ICTgOAlYDkIi2hwIiTAOIEdjB");
	this.shape_25.setTransform(93.95,55.2304);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#999933").s().p("AgRAiICSgOQAMBDAXA7gAB4iRQgDApACAqQACAsAIAmIiSAOIiSAOgAgRAig");
	this.shape_26.setTransform(43.05,63.425);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgTAVQgIgHgBgNQgBgLAIgJQAIgIAMgBQALgBAJAIQAJAIABAMQABALgJAJQgIAJgMABIgBAAQgKAAgJgIg");
	this.shape_27.setTransform(69.7038,43.0038);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AggAkQgPgNgBgUQgBgTANgQQAOgPAUgBQAUgBAPANQAOAOACAUQABAUgOAPQgNAPgUABIgDAAQgSAAgOgNgAgOgYQgMACgIAIQgIAJABALQABAMAIAIQAJAIAMgBQALgBAIgIQAJgJgBgMQgBgMgJgHQgHgIgLAAIgCAAg");
	this.shape_28.setTransform(71.0209,42.5748);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#660000").s().p("AmeFdQgsg4gbhBQgYg7gMhDQgHgngCgsQgCgpACgpQAJiQBIhyQBdiQCMgIQCMgHBqCFQBqCFAKDEQAFBUgOBLIhBgoInXAaIGgECImgkCIHXgaIBBAoIGLD0InYAaIgrgaQhNBThrAGIgQAAQiCAAhlh9gAl1iuQgUABgOAPQgNAPABAUQABAUAPAOQAQAOAUgCQAUgBANgPQAOgPgBgUQgCgVgOgNQgOgMgSAAIgEAAg");
	this.shape_29.setTransform(108.1056,55.2304);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(1,1,1).p("AmfgfQgFiSA+h3QBPiXCKgVQCLgUB1B6QB3B6AcDDQAMBTgIBMIGgDPInTBFIgtgWIm2jbIHShFIBEAiACqFsQhHBahoAPQiLAVh2h7Qgxgzgig/Qgdg4gShBQgKgngGgrQgHgqAAgnAj2hrQABALgHAKQgHAJgMADQgMABgJgHQgKgHgCgMQgBgMAHgJQAHgKAMgCQAMgBAJAHQAJAHADAMgAjWh0QADAVgMAPQgMARgUADQgUADgRgMQgQgMgDgUQgCgUALgRQAMgQAVgDQAUgCAQALQAQAMADAUgAoYCfICQgbAlZD9Ii/heIiRAbIEKjZ");
	this.shape_30.setTransform(83.275,47.7873);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#999933").s().p("AgWAxICPgbQASBBAdA4gABiiOQAAAoAHAqQAGAsAKAmIiPAbIiRAbgAgWAxg");
	this.shape_31.setTransform(31.875,58.825);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgQAXQgKgHgCgMQgBgLAHgJQAHgKAMgCQALgBAJAHQAJAHADAMQABAKgHAKQgHAJgMADIgEAAQgIAAgIgGg");
	this.shape_32.setTransform(55.675,37.375);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgdAnQgQgMgDgUQgCgTALgRQAMgPAVgEQATgCAQALQAQAMADAVQADATgMAQQgMAQgUADIgHABQgPAAgOgKgAgQgWQgMACgHAJQgHAKABALQACALAKAIQAJAHAMgCQALgCAHgJQAHgKgBgMQgDgLgJgHQgGgFgKAAIgEAAg");
	this.shape_33.setTransform(56.9636,36.8146);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#660000").s().p("AmLFvQgxgzgig/Qgdg4gShBQgKgngGgrQgHgqAAgnQgFiSA+h3QBPiXCKgVQCLgUB2B6QB2B6AcDDQAMBTgIBMIGgDPInTBFIgtgWIm2jbIHShFIBEAiIhEgiInSBFIG2DbQhGBahpAPQgUADgUAAQh0AAhlhpgAmSidQgVADgMAQQgLARACAUQADAUAQAMQARAMAUgDQAUgDAMgRQAMgPgDgVQgDgUgQgMQgNgKgRAAIgGABg");
	this.shape_34.setTransform(96.5597,47.7873);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(1,1,1).p("AmOgzQAEiSBEhzQBXiTCMgNQCLgMBvCBQBvCBAQDEQAIBUgMBLIGTDmInWArIgsgZImpj0IHWgqIBCAmACjF5QhMBVhpAKQiMANhviBQgtg2gehBQgag5gOhDQgIgngEgsQgEgpACgoAjAh8QABAVgNAPQgMAQgVABQgUACgQgNQgPgNgCgUQgBgUAMgQQANgPAVgCQAUgCAPANQAPANADAUgAjhh1QABAMgIAJQgIAJgMABQgMABgJgIQgJgHgBgMQgBgMAIgJQAHgJAMgCQAMAAAJAHQAJAHACANgAoSCEICSgTAlYDtIi6hpIiSATIEWjK");
	this.shape_35.setTransform(81.8,47.7582);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#999933").s().p("AgTAoICRgTQAOBCAaA6gABwiQQgCApAEAqQAEArAIAnIiRATIiSASgAgTAog");
	this.shape_36.setTransform(30.7,57.025);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgSAWQgJgIgBgMQgBgLAIgJQAHgJAMgBQALgBAJAHQAJAIACAMQABALgIAJQgIAJgMACIgCAAQgKAAgIgHg");
	this.shape_37.setTransform(56.3187,36.2039);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgfAlQgPgMgCgVQgBgTAMgQQANgPAVgCQATgBAPAMQAPANADAVQABATgNAPQgMAQgVACIgEAAQgQAAgPgMgAgPgXQgMABgHAJQgIAJABALQABAMAJAIQAJAIAMgBQALgCAIgJQAIgJgBgMQgCgLgJgIQgHgGgLAAIgCAAg");
	this.shape_38.setTransform(57.6247,35.7247);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#660000").s().p("AmXFkQgug2gehBQgag5gOhDQgIgngEgsQgDgpABgoQAEiSBEhzQBXiTCMgNQCNgMBtCBQBvCBARDEQAHBUgMBLIGTDmInWArIgsgZImoj0IHVgqIBCAmIhCgmInVAqIGoD0QhKBVhqAKIgaACQh8AAhlh2gAmAioQgUACgNAPQgNAQACAUQABAUAQANQAQANAUgCQAUgBANgQQANgPgCgVQgCgUgPgNQgOgLgRAAIgFAAg");
	this.shape_39.setTransform(95.6775,47.7582);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(1,1,1).p("AmbgkQgCiRA+h2QBRiXCLgTQCKgSB1B7QB0B8AaDDQAKBTgIBMIGdDUInUBAIgtgXImyjgIHShAIBEAjACoFvQhIBYhoAPQiLATh1h8Qgwg0ggg/Qgdg4gRhCQgKgngFgrQgGgrAAgnAjxhuQABAMgHAKQgHAKgMABQgMACgKgIQgJgGgCgNQgBgMAHgJQAHgJAMgCQAMgCAKAHQAJAHACAMgAjRh2QADAVgNAQQgMAQgUADQgUACgQgMQgQgMgDgUQgCgUAMgRQAMgQAVgCQATgDAQAMQARAMACAUgAoXCZICRgZAlYD6Ii/hhIiRAaIENjX");
	this.shape_40.setTransform(82.925,47.7863);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#999933").s().p("AgWAvICQgZQARBBAdA4gABliOQAAAoAGAqQAFArAKAnIiQAZIiRAZgAgWAvg");
	this.shape_41.setTransform(31.625,58.425);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgRAXQgJgHgCgMQgBgLAHgKQAHgJAMgCQALgBAKAHQAJAHACAMQABALgHAJQgHAKgMACIgEAAQgJAAgIgGg");
	this.shape_42.setTransform(55.825,37.1243);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgdAnQgQgMgDgUQgCgTAMgRQAMgQAVgCQASgDAQAMQARAMACAUQADAUgNAQQgMAQgUADIgGAAQgPAAgOgKgAgQgWQgMACgHAJQgHAJABALQACANAJAGQAKAIAMgCQALgBAHgKQAHgKgBgMQgCgLgJgHQgHgGgJAAIgFABg");
	this.shape_43.setTransform(57.1133,36.5908);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#660000").s().p("AmOFtQgwg0ggg/Qgdg4gRhCQgKgngFgrQgGgrAAgnQgCiRA+h2QBRiXCLgTQCLgSB1B7QBzB8AaDDQAKBTgIBMIGdDUInUBAIgtgXImyjgIHShAIBEAjIhEgjInSBAIGyDgQhHBYhpAPQgSADgSAAQh3AAhlhsgAmNifQgVACgMAQQgMARACAUQADAUAQAMQAQAMAUgCQAUgDAMgQQANgQgDgVQgCgUgRgMQgNgKgPAAIgHABg");
	this.shape_44.setTransform(96.3469,47.7863);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(1,1,1).p("AmKg3QAHiSBFhyQBZiSCMgKQCMgLBsCCQBtCCAODEQAGBUgMBLIGPDrInWAlIgsgaImlj4IHWglIBCAnAChF7QhMBVhpAJQiNAKhtiCQgtg2gdhBQgZg7gNhCQgIgngCgsQgDgpABgoAjch3QABAMgIAJQgHAJgMABQgNABgJgIQgIgIgCgMQAAgMAHgJQAIgJAMgBQAMgBAJAIQAJAHABANgAi7h9QABATgMAQQgOAQgUABQgUACgQgOQgPgMgBgVQgCgUANgQQANgPAVgBQAUgCAPANQAQANABAVgAoQB+IiSARIEYjGAoQB+ICSgRAlYDqIi4hs");
	this.shape_45.setTransform(72.95,42.2962);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#999933").s().p("AgSAlICRgRQANBCAZA7gABziQQgCAoADAqQADAsAIAmIiRARIiSARg");
	this.shape_46.setTransform(21.975,51.15);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgSAWQgJgIgBgMQAAgLAHgJQAIgJAMgBQALgBAJAIQAJAHABANQABALgIAJQgIAJgMABIgCAAQgKAAgIgHg");
	this.shape_47.setTransform(47.979,30.454);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgfAlQgPgNgBgUQgCgTANgQQANgPAVgCQATgBAPAMQAQAOABAUQABATgNAPQgNAQgUACIgEAAQgRAAgOgMgAgOgYQgMACgIAJQgHAJAAALQABAMAJAHQAJAIAMgBQALgBAIgJQAIgJgBgMQgBgLgJgIQgIgHgLAAIgBAAg");
	this.shape_48.setTransform(49.2997,30.0245);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#660000").s().p("AmZFhQgtg2gdhBQgag7gMhCQgIgngDgsQgDgpACgoQAGiSBFhyQBaiSCLgKQCNgLBrCCQBtCCAODEQAGBUgMBLIGPDrInWAlIgsgaImkj4IHVglIBCAnIhCgnInVAlIGkD4QhLBVhqAJIgVAAQh/AAhlh4gAl7iqQgUABgOAPQgMAQABAUQABAVAPAMQAQAOAUgCQAUgBAOgQQANgQgCgTQgBgVgQgNQgNgMgSAAIgEABg");
	this.shape_49.setTransform(86.935,42.2962);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},1).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]},1).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30}]},1).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40}]},1).to({state:[{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-9.4,163.3,113.10000000000001);


(lib.Home1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.End = new lib.End();
	this.End.name = "End";
	this.End.setTransform(160.1,16.4,1,1,0,0,0,64.7,16.4);

	this.fruite = new lib.Home();
	this.fruite.name = "fruite";
	this.fruite.setTransform(166.2,145.65,1,1,0,0,0,166.2,109.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.fruite},{t:this.End}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Home1, new cjs.Rectangle(-1.5,-0.5,335.3,256.9), null);


// stage content:
(lib.Mini_Game = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var buttonClickSound;
		var root=this;
		var score=0;
		this.score.text=score;
		
		var grFr=[this.Fruite1,this.Fruite2,this.Fruite5,this.Fruite6];
		
		var skFr=[this.Fruite3,this.Fruite4,this.Fruite7,this.Fruite8];
		
		var fruits=[this.Fruite1,this.Fruite2,this.Fruite3,this.Fruite4,
		this.Fruite5,this.Fruite6,this.Fruite7,this.Fruite8];
		
		
		//Initial Stage----------------------------------------------------------------------
		function init(){
		stage.enableMouseOver();	
			
			var preload=new createjs.LoadQueue();
		root.home.visible=false;
			root.bird.visible=false;
			root.bird2.visible=false;
			root.winner.visible=false;
			root.lost.visible=false;
			root.btnAgain.visible=false;
			//btnAgain.cursor="pointer";
			root.btnStart.visible=true;
			//btnStart.cursor="pointer";
			root.home.visible=false;
			}
			init()
		//Initial Stage*******************************************************************
			
			
		//fruitReset-------------------------------------------------------------------------------
		function fruitReset(){
		var myY1=500;	
		var myY2=350;
			
			fruits[0].y=myY1;
			fruits[0].x=-95;
			
			fruits[1].y=myY1;
			fruits[1].x=-295;
			
			fruits[2].y=myY2;
			fruits[2].x=-595;
			
			fruits[3].y=myY2;
			fruits[3].x=-795;
			
			fruits[4].y=myY1;
			fruits[4].x=-995;
			
			fruits[5].y=myY1;
			fruits[5].x=-1175;
			
			fruits[6].y=myY2;
			fruits[6].x=-1375;
			
			fruits[7].y=myY2;
			fruits[7].x=-1575;
			
			}
			fruitReset()
		//fruitReset***************************************************************************
		
			
			
		//click & hide Startbtn------------------------------------------------------------------
		this.btnStart.cursor="pointer";	
			this.btnStart.addEventListener("click", start);
			function start(){
				root.btnStart.visible=false;
				root.bird.visible=true;
				fruitReset()
				
				}
		//click & hide Startbtn******************************************************************
		
				
		//moving fruits--------------------------------------------------------------------
		this.addEventListener("tick", Fru.bind(this));
		function Fru()
		{
			for(var i=0; i<fruits.length; i++){
				fruits[i].x+=10;
				
				}
				winOrLost();
		}
		//moving fruits***********************************************************************
		
		
		//  catching fruits---------------------------------------------------------------
		/*for(let i=0;i<fruits.length;i++){
			
		fruits[i].addEventListener("mouseover", function (){
		fruits[i].visible=false;	
			
			score++
		root.score.text=score;
			})	
			
			}*/
		//catching fruits************************************************************
		
			
		//bird fly---------------------------------------------------------------------
		this.bird.addEventListener("dblclick", fly);
		function fly(){
			
		root.bird2.visible=true;
			root.bird.visible=false;
			
			}
		this.bird2.addEventListener("dblclick", fly2);
		function fly2(){
		root.bird2.visible=false;
			root.bird.visible=true;
			
			}	
		//bird fly**********************************************************************
		
		//bird eat-----------------------------------------------------------------------
		this.bird.addEventListener("click", et1);
			function et1(){
				
			 for(let i=0;i<grFr.length;i++){
		   if(grFr[i].x>170 && grFr[i].x<300){
			   grFr[i].visible=false;
		score++
		root.score.text=score;	   
			   }		 
				 }
				
				}
				
				this.bird2.addEventListener("click", et2);
			function et2(){
				
			 for(let i=0;i<skFr.length;i++){
		   if(skFr[i].x>170 && skFr[i].x<300){
			   skFr[i].visible=false;
		score++
		root.score.text=score;	   
			   }		 
				 }
				
				}
		//bird eat***********************************************************************	
			
				
		//winOrLost---------------------------------------------------------------------	
		function winOrLost(){
			if(fruits[7].x>330){
		if(score>=7){
			root.winner.visible=true;
			root.btnAgain.cursor="pointer";
			root.btnAgain.visible=true;
			root.home.visible=true;
			root.bird.visible=true;
				root.bird2.visible=false;
			}else{
		root.lost.visible=true;	
				root.btnAgain.cursor="pointer";
		root.btnAgain.visible=true;
				root.bird.visible=true;
				root.bird2.visible=false;
			
				}	
			}
			}	
		//winOrLost*******************************************************************
		
			
			
		//Tyr Again-------------------------------------------------------------------------
		this.btnAgain.addEventListener("click", playAgain);
			
			function playAgain(){
				
		score=0;
				root.score.text=score;
				init()
				fruitReset()
				fruits[0].visible=true;
		        fruits[1].visible=true;
				fruits[2].visible=true;
				fruits[3].visible=true;
				fruits[4].visible=true;
				fruits[5].visible=true;
				fruits[6].visible=true;
				fruits[7].visible=true;		
				}
		//Tyr Again***************************************************************************
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Background
	this.bird = new lib.BirdFl();
	this.bird.name = "bird";
	this.bird.setTransform(299.95,480.4,1,1,0,0,0,68.5,38.8);

	this.bird2 = new lib.BirdFl();
	this.bird2.name = "bird2";
	this.bird2.setTransform(292.75,336.5,1,1,0,0,0,68.5,38.8);

	this.score = new cjs.Text("0", "20px 'Wide Latin'", "#330000");
	this.score.name = "score";
	this.score.lineHeight = 27;
	this.score.lineWidth = 100;
	this.score.parent = this;
	this.score.setTransform(147.45,573.35);

	this.text = new cjs.Text("", "20px 'LatinWide'");
	this.text.lineHeight = 27;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(-412.3,37.6);

	this.instance = new lib.ScoreT();
	this.instance.setTransform(69.3,582.65,1,1,0,0,0,62.6,17.4);

	this.lost = new lib.Lost();
	this.lost.name = "lost";
	this.lost.setTransform(253.35,256.55,1,1,0,0,0,107.9,32.8);

	this.winner = new lib.Winner();
	this.winner.name = "winner";
	this.winner.setTransform(267.7,126.2,1,1,0,0,0,186.3,32.8);

	this.btnAgain = new lib.TryAgain();
	this.btnAgain.name = "btnAgain";
	this.btnAgain.setTransform(244.65,192.55,1,1,0,0,0,99.2,24.6);

	this.home = new lib.Home1();
	this.home.name = "home";
	this.home.setTransform(104.7,456.15,0.6479,0.6609,0,0,0,166.2,128);

	this.Fruite8 = new lib.fruits();
	this.Fruite8.name = "Fruite8";
	this.Fruite8.setTransform(-303.8,349.3,1,1,0,0,0,17.7,29.3);

	this.Fruite7 = new lib.fruits();
	this.Fruite7.name = "Fruite7";
	this.Fruite7.setTransform(-517.65,368.5,1,1,0,0,0,17.7,29.3);

	this.btnStart = new lib.Start();
	this.btnStart.name = "btnStart";
	this.btnStart.setTransform(-113.4,391.4,1,1,0,0,0,73.8,25.2);

	this.Fruite6 = new lib.fruits();
	this.Fruite6.name = "Fruite6";
	this.Fruite6.setTransform(-579.25,439.95,1,1,0,0,0,17.7,29.3);

	this.instance_1 = new lib.Sky();
	this.instance_1.setTransform(248.5,43,1,1,0,0,0,-120.8,-117);

	this.instance_2 = new lib.Ground();
	this.instance_2.setTransform(323.05,516.9,1,1,0,0,0,255.3,36.9);

	this.Fruite5 = new lib.fruits();
	this.Fruite5.name = "Fruite5";
	this.Fruite5.setTransform(-430.05,439.95,1,1,0,0,0,17.7,29.3);

	this.Fruite4 = new lib.fruits();
	this.Fruite4.name = "Fruite4";
	this.Fruite4.setTransform(-339.2,461.55,1,1,0,0,0,17.7,29.3);

	this.Fruite3 = new lib.fruits();
	this.Fruite3.name = "Fruite3";
	this.Fruite3.setTransform(-254.65,461.55,1,1,0,0,0,17.7,29.3);

	this.Fruite2 = new lib.fruits();
	this.Fruite2.name = "Fruite2";
	this.Fruite2.setTransform(-203.8,498.45,1,1,0,0,0,17.7,29.3);

	this.Fruite1 = new lib.fruits();
	this.Fruite1.name = "Fruite1";
	this.Fruite1.setTransform(-94.55,498.45,1,1,0,0,0,17.7,29.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.Fruite1},{t:this.Fruite2},{t:this.Fruite3},{t:this.Fruite4},{t:this.Fruite5},{t:this.instance_2},{t:this.instance_1},{t:this.Fruite6},{t:this.btnStart},{t:this.Fruite7},{t:this.Fruite8},{t:this.home},{t:this.btnAgain},{t:this.winner},{t:this.lost},{t:this.instance},{t:this.text},{t:this.score},{t:this.bird2},{t:this.bird}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-347.5,299.5,855.8,302.5);
// library properties:
lib.properties = {
	id: '7E32E470DCCD24498FC90410E51C6291',
	width: 500,
	height: 600,
	fps: 5,
	color: "#8BFEFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Mini_Game_atlas_1.png?1626594058132", id:"Mini_Game_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['7E32E470DCCD24498FC90410E51C6291'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;