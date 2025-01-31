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

optionsList.forEach((item) => item.onclick = () => {
    console.log(item.innerHTML);
    selected.placeholder = item.innerText;
    document.querySelector("h1").innerHTML = item.innerHTML;
});

document.addEventListener("DOMContentLoaded", showPieChart);

function showPieChart(){
   console.log("pie-chart on load");

   let sliceA={size:250, color: "green"};
   let sliceB={size:750, color: "red"};

   const values=[sliceA.size, sliceB.size];

   const total = values.reduce((acc, val) => acc+values, 0);

   let startAngle = 0;

   const canvas = document.getElementById("pie-chart");

   const ctx = canvas.getContext("2d");

   values.forEach((value, index) => {
      const angle = (value/total) * Math.PI * 2;
      ctx.beginPath();
      ctx.moveTo(canvas.width /2, canvas.height /2);
      ctx.arc(
         canvas.width /2,
         canvas.height /2,
         canvas.wdith /2,
         startAngle,
         startAngle + angle
      );
      ctx.closePath();
      ctx.fillStyle = index === 0 ? sliceA.color : sliceB.color;
      ctx.fill();

      startAngle += angle;

   });

   const legend = document.getElementById("pie-chart-legend");

   legend.innerHTML=`
   <div class="legend-item">
   <div class="legend-color" style="background-color:${sliceA.color}"></
   div>
   <div class="legend-label"> Wins: ${sliceA.size} </div>
   </div>
   <div class="legend-item">
   <div class="legend-color" style="background-color:${sliceB.color}"></
   div>
   <div class="legend-label"> Wins: ${sliceB.size} </div>
   </div>
   `;

}