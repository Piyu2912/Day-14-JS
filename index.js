//Callback Function: The functions which accepts another function as an argument
//and which will be executed later.

function dohomework(callback) {
    callback;
    console.log("do homework");
}

function copyhomework() {
    console.log("copy homework")
}

dohomework(copyhomework());

setTimeout(() => {
    console.log("HI")
}, 4000);

setTimeout(() => {
    console.log("Hello")
}, 2000);

//Callback Hell: It is an triangle like structure where we can handle asyncgronous operations
//and having multiple callback leads to hard to debug to developers adn it will be problem to our
//js engine compiler also


function call() {
    setTimeout(() => {
        console.log(1)
        setTimeout(() => {
            console.log(2)
            setTimeout(() => {
                console.log(3)
                setTimeout(() => {
                    console.log(4)
                    setTimeout(() => {
                        console.log(5)
                    }, 4000);
                }, 3000);
            }, 2000);
        }, 1000);



    }, 5000);


}

call()

//Promises: These are used to handle ansynchronous operations in js. They are easy
//to manage when dealing with multiple async operations where in callback hell can be created
//where it will leads to unmanagable code.
//Promises is an constructor function which will accept two parameters one is resolve and another is reject

const promise = new Promise(function (resolve, reject) {
    const x = "Goa";
    const y = "Goa";
    if (x == y) {
        resolve();

    }
    else {
        reject();
    }

})

promise.then(function () {
    console.log("You are going to Goa");
})
    .catch(function () {
        console.log("You are not going to Goa");
    })
//resolve will always be stored in then
//reject is always going to store in cache

function printNum(num) {
    return new Promise((resolve, reject) => {
        if (num % 2 == 0) {
            resolve("Condition is satisfied");
        }
        else {
            reject("Condition not satisfied");
        }
    })
}
printNum(23).then((response) => {
    console.log(response);
})
    .catch((error) => {
        console.log(error);
    })

//Promises

function printNum(time, num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(num)
            resolve();
        }, time);

    })
}
// printNum(5000, 1)
//     .then(() => printNum(2000, 2))
//     .then(() => printNum(6000, 4))
//     .then(() => printNum(4000, 6))
//     .then(() => printNum(3000, 8))

//Async and await is used to ignore promise chaining

async function print() {

    await printNum(4000, 1);
    await printNum(2000, 2);
    await printNum(4000, 3);
    await printNum(6000, 4);


}