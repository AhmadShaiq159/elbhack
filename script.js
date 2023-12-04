// get elements
let hackerManSection = document.getElementById("hacker-man");
let initializing = document.getElementsByClassName("initializing")[0];
let username = document.getElementsByClassName("username")[0];
let usernameFound = document.getElementsByClassName("username-found")[0];
let connecting = document.getElementsByClassName("connecting")[0];
let fetching = document.getElementsByClassName("fetching")[0];
let waiting = document.getElementsByClassName("wait")[0];
let usernameValue
let SMediaValue


// refresh after re-enter 
const valueF = () => {
    usernameValue = document.getElementsByClassName("input")[0].value;
    SMediaValue = document.getElementsByClassName("input")[1].value;

    initializing.innerHTML = "";
    username.innerHTML = "";
    usernameFound.innerHTML = "";
    connecting.innerHTML = "";
    fetching.innerHTML = "";
    waiting.innerHTML = "";
}


// promises
const promiseFunction = async () => {
    hackerManSection.style.display = "block";


    let ini = async () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("Initializing ElbHack Program...");
            }, 1000)
        });
    };

    let user = async () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(`Searching ${usernameValue} Username...`);
            }, 2000)
        });
    };

    let userFound = async () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(`Username ${usernameValue} found...`);
            }, 2000)
        });
    };

    let connect = async () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(`Connecting to the ${SMediaValue} account...`);
            }, 2000)
        });
    };

    let fetch = async () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(`Fetching Password from ${SMediaValue} Data-Base...`);
            }, 2000)
        });
    };

    let wait = async () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(`Wait awhile to Fetch Password from ${SMediaValue} Data-Base...`);
            }, 2000)
        });
    };

    initializing.innerHTML = await ini();
    username.innerHTML = await user();
    usernameFound.innerHTML = await userFound();
    connecting.innerHTML = await connect();
    fetching.innerHTML = await fetch();
    waiting.innerHTML = await wait();

}


// array
let socialMediaArr = ["facebook", "instagram", "tiktok", "snapchat", "twitter", "skype"];

// function for entering right or wrong
const inputFunction = () => {
    valueF();

    if (usernameValue.length > 3 && SMediaValue.length > 3 && socialMediaArr.includes(SMediaValue)) {
        promiseFunction();
    } else {
        alert("please provide a valid username & social media platform...");
    }
};
