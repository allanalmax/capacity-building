// Event Listeners

view1.style.display = "none";
view2.style.display = "none";
view3.style.display = "flex";

// adding an event listener (event, function, useCapture)
const doSomething = () => {
    alert("doing something");
}

/*h2.addEventListener("click", doSomething, false); // adding an event listener
h2.removeEventListener("click", doSomething, false); // removing an event listener

h2.addEventListener("click", (event) => {
    console.log(event.target);
    event.target.textContent = "Clicked";
});*/

document.addEventListener("readystatechange", (event) => {
    if (event.target.readyState === "complete") {
        console.log("readyState: complete");
        initApp();
    }
})


// view 2
/*
const initApp = () => {
    const view = document.querySelector("#view2");
    const div = view.querySelector("div");
    const h2 = div.querySelector("h2");
    
    view.addEventListener("click", (event) => {
        view.classList.toggle("purple");
        view.classList.toggle("darkblue");
    }, false);

    div.addEventListener("click", (event) => {
        div.classList.toggle("blue");
        div.classList.toggle("black");
    }, false);

    h2.addEventListener("click", (event) => {
        const myText = event.target.textContent;
        myText === "My 2nd view" ?
            event.target.textContent = "Clicked"
            : event.target.textContent = "My 2nd view"
    }, false);
    
    const nav = document.querySelector("nav");
    nav.addEventListener("mouseover", (event) => {
        event.target.classList.add("height100");
    });
    
    nav.addEventlistener("mouseout", (event) => {
        event.target.classList.remove("height100");
    })
}*/

// view 3
const initApp = () => {
    const view3 = document.querySelector("#view3");
    const myForm = view3.querySelector("#myForm");
    myForm.addEventListener("submit", (event) => {
        event.preventDefault();
        console.log("submit event");
    })
}
