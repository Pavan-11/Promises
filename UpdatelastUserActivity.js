const posts = []

function create2ndPost(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            // posts.push({title:'2nd Post'})
            let time = new Date().getHours() + ":" + new Date().getMinutes + ":" + new Date().getSeconds();
            if(true){
                posts.push({...postMessage,createdAT:new Date().getTime()});
                resolve(time);
            }else{
                reject("error")
            }
        },1000)
    })
}

const user = {
    name: 'Pavan',lastUpdatedAT:new Date().getHours() +":"+
    new Date().getMinutes()+":"+new Date().getSeconds()
}




function updateLastUserActivityTime(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let someCondition  = false;
            let temp = user.lastUpdatedAT;
            if(!someCondition)
            resolve('user activity time' + temp);
            else{
                reject('something went wrong')
            }
        },1000)
    })
}

Promise.all([create2ndPost({title:'post 4',body:'this is post 4'})
,updateLastUserActivityTime()]).then(([first, second])=>{
    console.log(second);
}).catch(err=>console.log(err));