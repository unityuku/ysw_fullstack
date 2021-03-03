// 最大(2的53次方)
//更高精度的
const theBiggsInt =9007199254740991n;
console.log(typeof theBiggsInt);
const alsoHuge = BigInt(9007199254740991);
const b1 =BigInt(Number.MAX_SAFE_INTEGER)
console.log(b1);
console.log(Number.MIN_SAFE_INTEGER);

const maxPlusOne = b1 +1n;
console.log(maxPlusOne);