const req_config={
 base_url:"https://captivateprime.adobe.com/primeapi/v2/",
 access_token:"de6ca398f6effda2ce7a732aab568531", 
}

function get_request(endpoint){
       const xhr=new XMLHttpRequest();
       xhr.open('GET',req_config.base_url+endpoint,true);
       xhr.setRequestHeader('Authorization','oauth '+req_config.access_token);
       xhr.setRequestHeader('Accept','application/vnd.api+json');
       xhr.onprogress=function(){
          console.log('On progress');
       }
       xhr.onload=function(){
           if(this.status===200){
                console.log(JSON.parse(this.responseText));
           }else{
                console.log("Some error occured");
           }
       }
       params={"page[limit]":10,"filter.loTypes":"course","sort":"name"};
       xhr.send(params);
       console.log("We are done");
};

