// var s1 = Symbol('foo')
// console.log(s1 instanceof symbol);//原始数据类型

// const obj ={
//     toString(){
//         return'abc'
//     }
// }
// const sym = Symbol(obj);
// console.log(sym.toString());

// var sym2 =Symbol("my symbol")
// console.log("yousa "+sym2);

var obj={};
var a= Symbol("a");//可以给json object key
var b =Symbol("b");

obj[a]='hello';
obj[b]='world';
obj.cc='cc'
console.log(Object.keys(obj));//无法遍历
console.log(Object.getOwnPropertyNames(obj));
console.log(Object.getOwnPropertySymbols(obj));
console.log(Symbol.keyFor(a));
console.log(obj[a]);
for(let key in obj){
    console.log(obj[key]);
}
Object.getOwnPropertySymbols(obj).forEach(item=>{
    console.log(obj[item]);
})