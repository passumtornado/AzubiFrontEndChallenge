// const promise1 = Promise.resolve("Hello World");
// const promise2 = 10;
// const promise3 = new Promise((resolve,reject) => {
//     setTimeout(resolve,1000, 'Goodbye');
// })
// const promise4 = fetch('https://jsonplaceholder.typicode.com/todos/').then(res => res.json());

// Promise.all([promise1,promise2,promise3,promise4]).then(values => console.log(values));

const URL= 'https://jsonplaceholder.typicode.com/todos/';
const getTodos = async () => {
    try {
        const response = await fetch(URL);
        const data = await response.json();
        if(response.ok){
            console.log(data);
        }else{
            throw new Error('Something went wrong');
        }
    } catch (error) {
        console.log(error);
    }

}

getTodos()
