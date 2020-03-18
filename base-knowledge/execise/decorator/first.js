/* 	var Plane = function(){};

	Plane.prototype.fire = function(){
		console.log( '发射普通子弹' );
	}

	var MissileDecorator = function( plane ){
		this.plane = plane;
	}
	MissileDecorator.prototype.fire = function(){
		this.plane.fire();
		console.log( '发射导弹' );
	}
	var AtomDecorator = function( plane ){
		this.plane = plane;
	}
	AtomDecorator.prototype.fire = function(){
		this.plane.fire();
		console.log( '发射原子弹' );
	}

	var plane = new Plane();
	plane = new MissileDecorator( plane );
	plane = new AtomDecorator( plane );
	plane.fire(); */

	/* 
  var plane = {
		fire: function(){
			console.log( '发射普通子弹' );
		}
	}
	var missileDecorator = function(){
		console.log( '发射导弹' );
	}
	var atomDecorator = function(){
		console.log( '发射原子弹' );
	}
	var fire1 = plane.fire;
	plane.fire = function(){
		fire1();
		missileDecorator();
	}
	var fire2 = plane.fire;
	plane.fire = function(){
		fire2();
		atomDecorator();
	}
	plane.fire();
	// 分别输出： 发射普通子弹、发射导弹、发射原子弹
 */

/* Function.prototype.before = function( beforefn ){
  var __self = this; // 保存原函数的引用
  return function(){ // 返回包含了原函数和新函数的"代理"函数
    beforefn.apply( this, arguments ); // 执行新函数，且保证this 不被劫持，新函数接受的参数
  // 也会被原封不动地传入原函数，新函数在原函数之前执行
    return __self.apply( this, arguments ); // 执行原函数并返回原函数的执行结果，
  // 并且保证this 不被劫持
}
}

Function.prototype.after = function( afterfn ){
var __self = this;
return function(){
  var ret = __self.apply( this, arguments );
  afterfn.apply( this, arguments );
  return ret;
}
}; */

