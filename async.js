/*console.log("person 1 shows ticket");

console.log("person 2 shows ticket");

const promiseWifeBingingTickets = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve('ticket')
    },3000)
});
const getPopcorn = promiseWifeBingingTickets.then((t) => {

console.log(`wife: i got the tickets`);

console.log(`husband: ok. we should go in.`);

console.log(`wife: not yet..i need popcorn too.`);

return new Promise((resolve,reject) => resolve(`${t} popcorn`))
})



const butter = getPopcorn.then((t) => {

console.log(`husband: i got the popcorn`);
console.log(`husband: now we should go in.`);
console.log(`wife: i need butter on my popcorn`);

return new Promise((resolve,reject) => resolve(`${t} butter`))

});
butter.then((t) => console.log(t));
*/

console.log("person 1 shows ticket");

console.log("person 2 shows ticket");

const preMovie = async () => {

  const promiseWifeBingingTickets = new Promise((resolve,reject) => {

    setTimeout(() => resolve('Person 3 shows ticket'),3000)

  })



  const getPOPcorn = new Promise((resolve,reject) => resolve('popcorn'));



  const getbutterPOPcorn = new Promise((resolve,reject) => resolve('butter popcorn'));



  const getcoldDrinks = new Promise((resolve,reject) => resolve('coldrinks'));



  let ticket = await promiseWifeBingingTickets;



  console.log(`wife: i got the tickets`);

  console.log(`husband: ok. we should go in.`);

  console.log(`wife: not yet..i need popcorn too.`);

  

  let Popcorn = await getPOPcorn;



  console.log(`husband: i got the popcorn`);

  console.log(`husband: now we should go in.`);

  console.log(`wife: i need butter on my popcorn`);



  let butterPopcorn = await getbutterPOPcorn;



  console.log(`husband: i got the butter popcorn now`);

  console.log(`husband: Anything else?`);

  console.log(`wife: cold drinks are left!!`);



  let coldDrinks = await getcoldDrinks;

  

  console.log(`husband: Anything left? now`);

  console.log(`wife: No, we are good to go now.!!`);



  return ticket;

};



preMovie().then((t) => console.log(t));



console.log("person 4 shows ticket");

console.log("person 5 shows ticket");