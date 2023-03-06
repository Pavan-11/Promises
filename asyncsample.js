console.log("Person 1: shows Tickets")
console.log("Person 2: shows Tickets")

const preMovie = async ()=>{
    const promiseWifeBringingTicks = new Promise((resolve, reject)=>{
       setTimeout(() => resolve('Ticket'),3000);
    });

    const getpopCorn = new Promise((resolve, reject)=>resolve(`popCorn`));

    const addButter = new Promise((resolve, reject)=> resolve(`butter`));

    const getColdDrinks = new Promise((resolve,reject)=>resolve(`drinks`))


    let Ticket = await promiseWifeBringingTicks;

    console.log(`Wife: I have the ${Ticket}`)
    console.log('Husband: We should go in');
    console.log("Wife: No i am hungry")

    let popCorn = await getpopCorn;

    console.log(`Husband: I got some ${popCorn}`)
    console.log('Husband: Now lets go in');
    console.log("Wife: No i want butter in popcorn")

    let butter = await addButter;

    console.log(`husband: i got some ${butter} on popCorn`);
    console.log(`husband: Anything else`)
    console.log(`Wife: lets go we are getting late`)

    let drinks = await getColdDrinks;

    console.log(`husband: I got some ${drinks}`)
    console.log(`Wife: Thankyou, lets watch the movie`)


    
    return Ticket
}

preMovie().then((m) => console.log(`person 5: shows ${m}`));

console.log("Person 3: shows Tickets")
console.log("Person 4: shows Tickets")




const blogs = async ()=>{

    const promiseWifeBringingTicks = new Promise((resolve, reject)=>{
        setTimeout(() => resolve('Ticket'),3000);
    });

    const create1stBlog = new Promise((resolve,reject)=> resolve(`firstBlog`))

    const create2ndBlog = new Promise((resolve,reject) => resolve(`secondBlog`));

    const deleteBlog = new Promise((resolve,reject) =>{
        setTimeout(()=>{
            if(blogs.length > 0) {
                const popedElemnt = blogs.pop();
                resolve(popedElemnt)
            }else{
                reject("Error")
            }
        },1000)
    }) 

    let Ticket = await promiseWifeBringingTicks;

    // let firstBlog = await create1stBlog;

    // let secondBlog = await create2ndBlog;

    // let popedElemnt = await deleteBlog;

    let [firstBlog, secondBlog, popedElemnt] = await Promise.all([create1stBlog, create2ndBlog, deleteBlog])

    console.log(`${firstBlog}, ${secondBlog}, ${popedElemnt}`)
}

