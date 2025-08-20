const inputNewItem = document.querySelector("#input-new-item");
const buttonAddItem = document.querySelector(".button-add-item");
const list = document.querySelector(".list");
const buttonTheme = document.querySelector(".button-theme");

function createNewListItem() {
    if(inputNewItem.value.length >= 3){
        let li = document.createElement("li");
        let button = document.createElement("button");
        button.textContent = "Delete";
        button.addEventListener("click", () => {
            list.removeChild(li);
        });

        li.textContent = inputNewItem.value;
        li.appendChild(button);

        list.appendChild(li);
        inputNewItem.value = "";
    }
    else{
        alert("The new item must contain more than two letters");
    };
};
buttonAddItem.addEventListener("click", () => {
    createNewListItem();
});

window.addEventListener("keydown", (event) => {
    if(event.key === "Enter") {
        createNewListItem();
    };
});

buttonTheme.addEventListener("click", () => {
    if(buttonTheme.textContent === "dark") {
        document.body.style.backgroundColor = "#000";
        document.body.style.color = "#fff";
        buttonTheme.textContent = "light";
    }
    else if(buttonTheme.textContent === "light") {
        document.body.style.backgroundColor = "#fff";
        document.body.style.color = "#000";
        buttonTheme.textContent = "dark";
    }
});