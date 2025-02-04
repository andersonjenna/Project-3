// Get DOM Elements


const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");
const optionsList = document.querySelectorAll(".option");
const arrow = document.querySelector("#arrow");

console.log(selected, optionsContainer, optionsList, arrow);

selected.onfocus = () => {
   // console.log("focus");
   selected.style.backgroundColor = "var(--dark)";
   optionsContainer.classList.toggle("active");
   if (arrow.classList.contains("fa-arrow-down")) {
    arrow.classList.remove("fa-arrow-down");
    arrow.classList.add("fa-arrow-up");
   }
};

selected.onblur = () => {
   // console.log("blur");
   selected.style.backgroundColor = "initial";
   optionsContainer.classList.toggle("active");
   if (arrow.classList.contains("fa-arrow-up")) {
    arrow.classList.remove("fa-arrow-up");
    arrow.classList.add("fa-arrow-down");
   }
};

// Select element from dropdown list and display selected element(team)

let teamName = "";

optionsList.forEach((item) => item.onclick = () => {
    console.log(item.innerHTML);
    selected.placeholder = item.innerText;
    document.querySelector("h1").innerHTML = item.innerHTML;
    teamName = item.innerText.trim();

    getData();
});

