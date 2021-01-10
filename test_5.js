let add=function(a,b){
   console.log("Adding the number");
   return a+b;
}

let multiply=function(c,d){
   console.log("Multiplying the number");
   return c*d;
}

let sub=function(e,f){
   console.log("Substracting the number");
   return e-f;
}

let calc=function(num1,num2,callback){
   return callback(num1,num2);
}

calc(5,2,add);
calc(6,1,sub);
calc(5,4,multiply);