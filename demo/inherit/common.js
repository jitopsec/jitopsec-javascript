/*
function Rectangle(w,h){
	this.width= w;
	this.hight = h;

}

Rectangle.prototype.area = function(){
	return this.width * this.hight;
}

function PositionRectangle(w,h,x,y){

	Rectangle.call(this,w,h);
	this.x = x;
	this.y = y;
}
PositionRectangle.prototype = new Rectangle();

delete PositionRectangle.prototype.width;
delete PositionRectangle.prototype.hight;

PositionRectangle.prototype.constructor = PositionRectangle;

PositionRectangle.prototype.draw = function(){alert("draw Rectangle.");}

*/
function getType(x){

	if(x == null){
		return "null";
	}

	var aType = typeof x;
	if(aType != "object"){
		return aType;
	}

	var klass = Object.prototype.toString.apply(x);
	klass = klass.substring(8,klass.length-1);
	
	if( klass != "Object"){
		return klass;
	}

	if(x.constructor == Object){
		return "Object";
	}

	if("classname" in x.constructor.prototype 
		&& (typeof x.constructor.prototype.classname)=="string"){
		return x.constructor.prototype.classname;
	}
	return "<unknown type>";
}
function test(){
	alert("common.js test function.");
}
