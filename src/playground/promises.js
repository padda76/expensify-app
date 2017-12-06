const promise = new Promise((resolve, reject) => {
    //any longrunning async task
    //the library usually set up the promise
    setTimeout(() => {
        // resolve({
        //     name: 'Julenissen',
        //     age: 16.5
        // });
        reject('Something went wrong');
    },3500)
});

console.log('before');

promise.then((data) => {
    console.log(data);
}).catch((error) => {
    console.log('error:', error)
});

console.log('after');