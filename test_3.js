let promise1=new Promise(function(resolve,reject){
    let is_clean=true;
    if(is_clean){
      resolve("room is cleaned");
    }else{
      reject("room is not cleaned");
    }
});

let promise2=new Promise(function(resolve,reject){
    let is_garbage_removed=true;
    if (is_garbage_removed){
       resolve("Garbage removed");
    }else{
       reject("Garbage is there");
    }
});

let promise3=new Promise(function(resolve,reject){
    let won_icecream=true;
    if (won_icecream){
       resolve("Won icecream");
    }else{
       reject("Lost icecream");
    }
});


promise1.then(function(clean_status){
   console.log(clean_status)
   return promise2.then(function(garbage_status){
        console.log(garbage_status)
        return promise3.then(function(icecream_status){
            console.log(icecream_status);
        }).catch(function(icecream_status){
          console.log(icecream_status)
       })
   }).catch(function(garbage_status){
       console.log(garbage_status);
   })
}).catch(function(clean_status){
   console.log(clean_status);
})