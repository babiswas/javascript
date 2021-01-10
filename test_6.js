let x=function(){
   console.log("I am callback function");
};

let y=function(callback){
   console.log("do something");
   callback();
};

y(x);