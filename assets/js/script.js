const html = document.documentElement;
let buttonToggle = document.querySelector("#switch");

buttonToggle.addEventListener("click", () => {
    if (html.classList.contains("light")) {
        html.classList.remove("light");
    } else {
        html.classList.add("light");
    }
})
