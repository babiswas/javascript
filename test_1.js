var clsre=function (a){
   return function (b){
      return b+a;
   }
};

var test=clsre(4)
console.log(test(5))
console.log(test(6))
console.log(test(7))
