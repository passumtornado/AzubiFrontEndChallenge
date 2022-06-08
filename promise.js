const Users = [
    {name:'John Doe', email:'john@gmail.com'},
    {name:'Smith Rowde', email:'smith@gmail.com'}
]

// get user
function getUsers(){
    let output = '';
    setTimeout(() => {
       Users.forEach(user => {
           output += `<li>${user.name}:${user.email}</li>`;
       })
       document.body.innerHTML = output;
    }, 1000);
}

// create user
// function createUser(user,callback){
//     setTimeout(() => {
//         Users.push(user);
//         callback();
//     }, 2000);
// }

function createUser(user){
    return new Promise((resolve,reject) => {
    setTimeout(() => {
        let error = false;
        if(!error){
            Users.push(user);
            resolve();
        }else{
            reject('Something went wrong');
        }
    }, 2000);
})
}

// createUser({name:'Martha Mensah', email:'martha@gmail.com'})
//           .then(getUsers)
//           .catch(err => console.log(err));


// Async Await
async function init(){
    try{
    await createUser({name:'Kofi Mensah', email:'martha@gmail.com'})
    getUsers();
    }catch(err){
        console.log(err);
    }
}
init();