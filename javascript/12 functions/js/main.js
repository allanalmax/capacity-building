// functions

// declaration 1
//function getUserNameFromEmai(email) {
//    return email.slice(0, email.indexOf("@"));
//}

//console.log(getUserNameFromEmai("me@domain.com"));

// declaration 2
//const getUserNameFromEmail = function (email) {
//    return email.slice(0, email.indexOf("@"));
//};

//console.log(getUserNameFromEmail("me@domain.com"));

// declaration 3
const getUserNameFromEmail = (email) => {
    return email.slice(0, email.indexOf("@"));
};

console.log(getUserNameFromEmail("me@domain.com"));

const toProperCase = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
};

console.log(toProperCase("bellingham"));