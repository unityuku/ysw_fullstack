//symbol
// //es6引入的新的原始数据类型 表示独一无二的值
// var sym1 = Symbol();
// var sym2 = Symbol('foo');
// var sym3 = Symbol('foo');
// console.log(sym2==sym3);
// // 1.函数创建
// console.log(typeof(sym3));
// //基本数据类型不能被new symbol is not a constructor
// //2. symbol 有何用
// //symbol (字符串)做一个标识
// console.log(sym3.toString());
// 变量都是要分配内存空间的
var mySymbol = Symbol() // 初始化
// var shapeType = { // 形状的类型  json object 
//   triangle: 'Triangle', // 三角形
//   square: 'Square' // 正方形
// }
var shapeType = { // 形状的类型  json object 
    triangle: Symbol(), // 三角形//做唯一标识就行
    square: Symbol() // 正方形
  }

function getArea(shape, options) {
  var area = 0;
  switch(shape) {
    case shapeType.triangle:
      area = 0.5 * options.width *options.height;
    break;
    case shapeType.square:
      area = options.width * options.height;
    break;
  }
  return area;
}
console.log(getArea(shapeType.triangle, {
  width: 100,
  height: 100
}))