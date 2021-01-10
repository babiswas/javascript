let promise1=function(){
   return new Promise(function(resolve,reject){
      let is_clean=true;
      if (is_clean){
         resolve("House is cleaned");
      }else{
         reject("House is not cleaned");
      }
   });
};


let promise2=function(message){
   return new Promise(function(resolve,reject){
      let is_garbage_cleaned=true;
      if(is_garbage_cleaned){
         resolve(message+"Garbage cleaned");
      }else{
         reject(message+"Garbage not cleaned");
      }
   });
}

let promise3=function(message){
   return new Promise(function(resolve,reject){
       resolve(message+"won the icecream");
   });
}


promise1().then(function(clean_status){
    return new promise2(clean_status);
}).then(function(garbage_status){
    return promise3(garbage_status);
}).then(function(icecream_status){
    console.log(icecream_status);
})

Promise.all([promise1(),promise2(),promise3()]).then(function(){
   console.log("All finished")
})
