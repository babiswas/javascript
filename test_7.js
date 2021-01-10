var myArr=[{num:5,str:"Apple"},{num:7,str:"Cabbage"},{num:1,str:"Tomatoe"}]
myArr.sort(function(obj1,obj2){
   if(obj1.str>obj2.str){
      return -1;
   }else{
      return 1;
   }
})
myArr.sort(function(obj1,obj2){
   if(obj2.str>obj1.str){
      return -1;
   }else{
      return 1;
   }
})
console.log(myArr);
console.log(myArr);
