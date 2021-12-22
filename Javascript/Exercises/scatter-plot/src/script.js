// creating the plot
const body = document.body;
const scatter = document.createElement("div");
body.append(scatter);
scatter.classList.add("scatter-plot");
const scatterPlot = document.querySelector(".scatter-plot");
scatterPlot.style.width = "600px";
scatterPlot.style.height = "500px";
scatterPlot.style.background = "	#D3D3D3";
scatterPlot.style.position = "relative";
scatterPlot.style.margin = " 100px auto";

// creatign dots
const plots = [];

// creating multiple plots
var points = [
  { x: 10, y: 20 },
  { x: 70, y: 60 },
  { x: 200, y: 360 },
  { x: 300, y: 90 },
  { x: 300, y: 160 },
  { x: 400, y: 320 },
  { x: 450, y: 180 },
];

for (i = 0; i < points.length; i++) {
  plots[i] = document.createElement("div");
  scatter.append(plots[i]);
  plots[i].style.height = "30px";
  plots[i].style.width = "30px";
  plots[i].style.borderRadius = "50%";
  plots[i].style.background = "blue";
  plots[i].style.position = "absolute";
  plots[i].style.top = points[i].x + "px";
  plots[i].style.left = points[i].y + "px";
}

// adding event lister on the click
plots.forEach((e) =>
  e.addEventListener("click", (event) => {
    e.remove();
  })
);
