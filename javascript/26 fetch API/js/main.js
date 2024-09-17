// callbacks, promises, thenables, async/ await

// callbacks
/*
function firstFunction(parameters, callback) {
    //do stuff
    callback();
}*/

//promises (3 states: pending, fulfilled, rejected
/*const myPromise = new Promise((resolve, reject) => {
    const error = false;
    if (!error) {
        resolve("Yes! Resolved the promise.");
    } else {
        reject("No! Rejected the promise.");
    }
});
console.log(myPromise);*/

// thenables
/*myPromise.then(value => {
    return value + 1;
})
    .then(newValue => {
        console.log(newValue);
    })
    .catch(err => {
        console.error(err);
    })*/

/*const myNextPromise = new Promise((resolve, reject) => {
    setTimeout(function() {
        resolve("myNextPromise!");
    }, 3000);
});

myNextPromise.then(value => {
    console.log(value);
});

myPromise.then(value => {
    console.log(value);
});*/

/*
const users = fetch("https://jsonplaceholder.typicode.com/users");
*/

// pending promise
/*console.log(users);

const users = fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => {
        console.log(response);
        return response.json();
    })
    .then(data => {
        data.forEach(user => {
            console.log(user);
        })
    });*/

// async/ await
const myUsers = {
    userList: []
}

// const myFunction = async () => {}

/*async function myFunction() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const jsonUserData = await response.json();
    return jsonUserData;
}

const anotherFunction = async () => {
    const data = await myFunction();
    myUsers.userList = data;
    console.log(myUsers.userList);
}

anotherFunction();
console.log(myUsers.userList);*/

// examples (workflow function)
/*
const getAllUserEmails = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const jsonUserData = await response.json();
    
    const userEmailArray = jsonUserData.map(user => {
        return user.email;
    });
    
    postToWebPage(userEmailArray);
}

const postToWebPage = (data) => {
    console.log(data);
}

getAllUserEmails();*/

// 2nd parameter of fetch
// GET

/*const getDadJoke = async () => {
    const response = await fetch("https://icanhazdadjoke.com/", {
        method: "GET",
        headers: {
            Accept: "application/json"
        }
    });
    const jsonJokeData = await response.json();
    console.log(jsonJokeData);
}

getDadJoke();*/

// POST
/*const jokeObject = {
    id: "EIJmGY8Etrc",
    joke: "Doctor: Do you want to hear the good news or the bad news?\r\nPatient: Good news please.\r\nDoctor: we're naming a disease after you."
}
const postData = async (jokeObj) => {
    const response = await fetch("https://httpbin.org/post", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(jokeObj)
    });
    const jsonResponse = await response.json();
    console.log(jsonResponse);
}

postData(jokeObject);*/

//REQUESTING
/*const requestJoke = async (firstName, LastName) => {
    const response = await fetch(`/http://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${LastName}`);
    const jsonResponse = await response.json();

    console.log(jsonResponse.value.joke);
}

requestJoke("John", "Doe");*/

// abstract into functions
const getDataFromForm = () => {
    const requestObj = {
        firstName: "bruce",
        lastName: "lee",
        category: ["nerdy"]
    };
    return requestObj;
}

const buildRequestUrl = (requestData) => {
    return `https://api.icndb.com/jokes/random?firstName=${requestData.firstName}&lastName=${requestData.lastName}&limitTo=${requestData.category}`
}

const requestJoke = async (url) => {
    try {
        const response = await fetch(url);
        const jsonResponse = await response.json();
        const joke = jsonResponse.value.joke;

        postJokeToPage(joke);
    } catch (error) {
        console.error(error);
    }
}

const postJokeToPage = (joke) => {
    console.log(joke);
}

// procedural "workflow" function
const processJokeRequest = async () => {
    const requestData = getDataFromForm();
    const requestUrl = buildRequestUrl(requestData);
    await requestJoke(requestUrl);

    console.log("finished");
}

processJokeRequest();