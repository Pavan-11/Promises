// const blogs = []

// function create1stBlog(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//      blogs.push({title:'First Blog'})
//             resolve();
//         },1000)
//     })
// }

// function create2ndBlog(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             blogs.push({title:"Second blog"})
//             resolve();
//         },2000)
//     }) 
// }


// function deleteBlog(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             if(blogs.length>0){
//                 const popedElemnt = blogs.pop();
//                 resolve(popedElemnt)
//             }else{
//                 reject("ERROR")
//             }
//         },1000)
//     })
// }


// create1stBlog().then(()=>{
//     create2ndBlog().then(()=>{
//         deleteBlog().then((deletedBlog1)=>{
//             console.log(deletedBlog1.title)
//             deleteBlog().then((deletedBlog2)=>{
//                 console.log(deletedBlog2.title);
//                 deleteBlog().catch((msg)=> console.log(msg))
//             })
//         })
//     })
// })


// const promise1 = Promise.resolve('Hello World')
// const promise2 = 10;
// const promise3 = new Promise((resolve,reject)=>
//     setTimeout(resolve, 2000, 'GoodBye')
// );

// Promise.all([promise1,promise2,promise3]).then(values =>
//     console.log(values))


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