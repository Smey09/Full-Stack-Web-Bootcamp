

function promise(){
    return new Promise((resolve,reject)=>{
        console.log(' ....')
        setTimeout(()=>{
            resolve("Success!")
        },1000)
        
    });
}
console.log('Hello');
promise().then(res=>{console.log(`response succedss ${res}`)}).catch(err=>console.log(err))
console.log(promise());
console.log("Good bye");