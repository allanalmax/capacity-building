// web storage api

// refers to the Window API available via the global variable: window

/*
window.alert(window.location);
alert(location);*/

const myArray = ["eat", "sleep", "repeat"];
const myObject = {
    name: "Allan",
    hobbies: ["eat", "sleep", "repeat"],
    logName: function () {
        console.log(this.name);
    }
};

/*
sessionStorage.setItem("mySessionStore", JSON.stringify(myArray));
const mySessionData = JSON.parse(sessionStorage.getItem("mySessionStore"));
console.log(mySessionData);*/

localStorage.setItem("myLocalStore", JSON.stringify(myArray));
/*localStorage.removeItem("myLocalStore"); // removing local data
localStorage.clear("myLocalStore"); // clearing local data*/
const key = localStorage.key(0);
const storeLength = localStorage.length;
const myLocalData = JSON.parse(localStorage.getItem("myLocalStore"));
console.log(storeLength);
