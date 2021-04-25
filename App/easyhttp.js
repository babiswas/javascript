class EasyHTTP{
    get(url,obj){
        return new Promise((resolve,reject)=>{
            fetch(url,obj)
            .then(res=>res.json())
            .then(data=>resolve(data))
            .catch(err=>reject(err))
        });
    }
}
