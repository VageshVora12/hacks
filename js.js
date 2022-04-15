// Ternary Operators Hacks
// 1.)
// const age = 71;

// age > 50
//     ? age > 70 
//     ? console.log('you are getting really oldd') 
//     : console.log('you are between 50-69')
//     : console.log('you are below 30')
    

//mind blowing hack just beginning
    // 2.)
    // const Age = 20 + "";

    // console.log(Age)
    // console.log(typeof Age)


// arrays
// 3.)
// const users = Array(5).fill('5');

// console.log(users);

// 4.)

// const users = ['Ed','traversy daddy','Ed','the unemployed tech lead','Anna','John Dough']

// const unique = Array.from(new Set(users));

// console.log(unique);

// 5.)

// const dynamic = 'testt';

// const user = {
//     name: 'vagesh',
//     email: 'vagesh@vv.com',
//     [dynamic]: 'sleep'
// }

// console.log(user)

// 6.)
// VIMP & USEFULL

// const users = [1,2,3,4,5,6,7];

// users.length= 7;

// console.log(users);

// console.log(users.slice(-3));


// 7.)
// array to objects

// const users = [1,2,3,4,5,6,7];

// const usersObject = {...users}


// console.log(usersObject);

// 8.)

// const users = {

//     name:'Ed',
//     occupation: 'Singer',
//     hobbies: 'playing guitar'
// };

// // const useArray = Object.keys(users);
// const useArray = Object.values(users)

// console.log(useArray);

// 9.)
// this code wont work with node or js or anything except for the browser console...

// let startAt = performance.now();

// for(let i =0;i < 20399;i++){
//     console.log(i);
// }

// let endAt = performance.now();

// console.log(`${endAt - startAt} took miliseconds to test`)
