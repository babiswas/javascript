let user=function(firstname,lastname,age){
   this.firstname=firstname;
   this.lastname=lastname;
   this.age=age;
}

console.log(typeof(user));
let user1=new user("Bapan","Biswas",21);
let user2=new user("Tapan","Biswas",32);
let user3=new user("Madan","Biswas",34);
console.log(user1);
console.log(user2);
console.log(user3);
let users=new Array();
users.push(user1);
users.push(user2);
users.push(user3);
console.log(users);
console.log(users.length);
function display(){
   for(let i=0;i<users.length;i++){
      console.log(users[i]);
   }
}
display();
users.shift();
console.log(users);
let new_user=[...users];
console.log("Displaying new user");
console.log(new_user);
new_user.unshift(new user("Gopal","Das",45));
console.log(new_user);
for(let user of new_user){
   console.log(user);
}


for(let key in new_user){
  console.log(new_user[key]);
}

console.log(String(new_user));

