function create_image_element(data,parent){
    let elem=document.createElement("img");
    let cent=document.createElement("center")
    elem.className="iamgeclass";
    elem.setAttribute("src",data.attributes.imageUrl);
    elem.setAttribute("height","60px");
    elem.setAttribute("width","60px");
    elem.setAttribute("alt","Badge");
    cent.appendChild(elem);
    parent.appendChild(cent);
    return parent;
}

function create_div_element(data){
    let ele=document.createElement("div");
    let el1=document.createElement("center");
    let hdr=document.createElement("h2")
    hdr.innerHTML=data.attributes.name;
    el1.appendChild(hdr);
    ele.appendChild(el1);
    return ele;
}


function create_badges(badgedata){
    let divelement=create_div_element(badgedata);
    divelement.className="badge";
    divelement=create_image_element(badgedata,divelement);
    return divelement;
}


function get_badges(){
    get_prime_badge();
    const el=document.getElementById("mybadge");
    fetch("https://captivateprime.adobe.com/primeapi/v2/badges",{
        method:'GET',
        headers:{
            "Accept":"application/vnd.api+json",
            "Authorization":"oauth 74efed649db1f9d98456b797d2fbf0f9"
        }
    }).then(function(res){
        return res.json();
    }).then(function(response){
        response.data.forEach(element => {
            let badge=create_badges(element);
            el.appendChild(badge);
        });
    }).catch(function(err){
        let error=document.createElement("div")
        error.innerText="Something Wrong";
        error.className="error";
        el.appendChild(error);
    })
}


const http=new EasyHTTP();
obj={
    method:'GET',
    headers:{
        "Accept":"application/vnd.api+json",
        "Authorization":"oauth 74efed649db1f9d98456b797d2fbf0f9"
    }
};

function get_prime_badge(){
    console.log("Executing request");
    http.get("https://captivateprime.adobe.com/primeapi/v2/badges",obj)
      .then(data=>console.log(data))
      .catch(err=>console.log(err));
}

document.getElementById('mybutton').addEventListener('click',get_badges);