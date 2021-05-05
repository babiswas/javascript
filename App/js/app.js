const objlist=(function(){
   const itemlist={
      "butter":40,
      "milk":20,
      "ghee":40,
      "cheese":60
   };
   let buylist={butter:{quantity:0,price:0},cheese:{quantity:0,price:0},ghee:{quantity:0,price:0},milk:{quantity:0,price:0}};
   const addbutter=function(){
         buylist.butter.quantity=buylist.butter.quantity+1;
         buylist.butter.price=buylist.butter.quantity*20;
   };
   const addghee=function(){
         buylist.ghee.quantity=buylist.ghee.quantity+1;
         buylist.ghee.price=buylist.ghee.quantity*20;
   };
   const addcheese=function(){
        buylist.cheese.quantity=buylist.cheese.quantity+1;
        buylist.cheese.price=buylist.cheese.quantity*20;
   };
   const addmilk=function(){
        buylist.milk.quantity=buylist.milk.quantity+1;
        buylist.milk.price=buylist.milk.quantity*20;
   };

   const getlist=()=>{
       return buylist;
   }

   const getTotal=()=>{
       let total=0;
       for (let key of Object.keys(buylist)){
          total=total+buylist[key].price;
       }
       return total;
   }

   return {
      ghee:addghee,
      butter:addbutter,
      cheese:addcheese,
      milk:addmilk,
      itemlist:getlist,
      total:getTotal
   }
})();

document.getElementById('showbill').addEventListener('click',function(e){
  e.stopPropagation();
  let parent=document.getElementById('bill');
  let child=document.getElementById("tableheader");
  while (parent.lastChild){
       parent.removeChild(parent.lastChild);
  }
  parent.appendChild(child);
  let items=objlist.itemlist();
  console.log("Displaying Items");
  console.log(items);
  for (const key of Object.keys(items)){
      let tr1=document.createElement("tr");
      let td1=document.createElement("td");
      let td2=document.createElement("td");
      let td3=document.createElement("td");
      td1.innerHTML=`${key}`;
      td2.innerHTML=`${items[key].quantity}`;
      td3.innerHTML=`${items[key].price}`;
      tr1.appendChild(td1);
      tr1.appendChild(td2);
      tr1.appendChild(td3);
      parent.appendChild(tr1);
  }
  let tr2=document.createElement("tr");
  let td5=document.createElement("td");
  let td6=document.createElement("td");
  let td7=document.createElement("td");
  td6.innerHTML="Total";
  td5.style.backgroundColor="white";
  td6.style.backgroundColor="green";
  td6.style.color="white";
  td7.innerHTML=''+objlist.total();
  td7.style.backgroundColor="green";
  td7.style.color="white";
  tr2.appendChild(td5);
  tr2.appendChild(td6);
  tr2.appendChild(td7);
  parent.appendChild(tr2);
})


function removealert(){
  let parent=document.getElementById("alert");
  parent.removeChild(parent.firstChild);
}


document.getElementById('cleartable').addEventListener('click',function(e){
  e.stopPropagation();
  let parent=document.getElementById('bill');
  let child=document.getElementById("tableheader");
  while (parent.lastChild){
       parent.removeChild(parent.lastChild);
  }
  parent.appendChild(child);
})

document.getElementById('milk').addEventListener('click',(e)=>{
  e.stopPropagation();
  objlist.milk();
  let alert=document.getElementById('alert');
  let div=document.createElement('div');
  div.className="alertmsg";
  let h2=document.createElement("h2");
  h2.innerHTML="Milk Added";
  div.appendChild(h2);
  alert.appendChild(div);
  setTimeout(removealert(),3);
});

document.getElementById('ghee').addEventListener('click',(e)=>{
  e.stopPropagation();
  objlist.ghee();
  let alert=document.getElementById('alert');
  let div=document.createElement('div');
  div.className="alertmsg";
  let h2=document.createElement("h2");
  h2.innerHTML="Ghee Added";
  div.appendChild(h2);
  alert.appendChild(div);
  setTimeout(removealert(),3);
});

document.getElementById('butter').addEventListener('click',(e)=>{
  e.stopPropagation();
  objlist.butter();
  let alert=document.getElementById('alert');
  let div=document.createElement('div');
  div.className="alertmsg";
  let h2=document.createElement("h2");
  h2.innerHTML="Butter Added";
  div.appendChild(h2);
  alert.appendChild(div);
  setTimeout(removealert(),3);
});

document.getElementById('cheese').addEventListener('click',(e)=>{
  e.stopPropagation();
  objlist.cheese();
  let alert=document.getElementById('alert');
  let div=document.createElement('div');
  div.className="alertmsg";
  let h2=document.createElement("h2");
  h2.innerHTML="Cheese Added";
  div.appendChild(h2);
  alert.appendChild(div);
  setTimeout(removealert(),3);
});
