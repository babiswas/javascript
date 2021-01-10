let promise1=new Promise(function(resolve,reject){
   let is_clean=false;
   if(is_clean){
      resolve("Clean");
   }else{
      reject("not clean");
   }
})

promise1.then(function(fromresolve){
  console.log("the room is"+fromresolve);
}).catch(function(fromreject){
  console.log("the room is"+fromreject);
})