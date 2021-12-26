const container = document.querySelector(".carousel-container");
const images = document.querySelector(".carousel-image-wrapper");
let imageWidth = 400;
const imageCount = images.children.length;
container.style.border = "5px solid grey";
container.style.borderRadius = "10px";
container.style.top = "80px";

// creating prevBtn
const prevBtn = document.createElement("button");
container.appendChild(prevBtn);

prevBtn.style.background = "transparent";
prevBtn.style.color = "white";
prevBtn.style.position = "absolute";
prevBtn.style.float = "left";
prevBtn.style.top = "50%";
prevBtn.textContent = "<";
prevBtn.style.fontSize = "50px";
prevBtn.style.fontWeight = "700";
prevBtn.style.padding = "10px";
prevBtn.style.border = "none";

// creating nextBtn
const nextBtn = document.createElement("button");
container.appendChild(nextBtn);
nextBtn.style.border = "none";
nextBtn.style.position = "absolute";
nextBtn.style.background = "transparent";
nextBtn.style.color = "white";
nextBtn.style.top = "50%";
nextBtn.style.left = "350px";
nextBtn.style.fontSize = "50px";
nextBtn.style.fontWeight = "700";
nextBtn.textContent = ">";
nextBtn.style.padding = "10px";

// creating images
images.style.width = `${imageCount * imageWidth}px`;
for (let i = 0; i < imageCount; i++) {
  const image = images.children[i];
  image.style.left = `${i * imageWidth}px`;
}

// creationg dots
const dotContainer = document.createElement("div");
container.appendChild(dotContainer);
dotContainer.style.position = "absolute";
const dots = [];
for (i = 1; i <= images.children.length; i++) {
  dots[i] = document.createElement("div");
  container.appendChild(dots[i]);
  dots[i].style.position = "absolute";
  dots[i].style.top = `${imageWidth - 50}px`;
  dots[i].style.borderRadius = "50%";
  dots[i].style.width = "15px";
  dots[i].style.left = `${i * 18}%`;
  dots[i].style.height = "15px";
  dots[i].style.border = "1px solid white";
}

// adding event to dots
dots.forEach((e) => {
  e.addEventListener("mouseenter", () => {
    e.classList.add("active");
  });
});

dots.forEach((e) => {
  e.addEventListener("click", () => {
    e.classList.add("active");
  });
});
dots.forEach((e) => {
  e.addEventListener("mouseleave", () => {
    e.classList.remove("active");
  });
});

let currentIndex = 1;
let interval = 0;
let dx = 0;

// creating dot handler
const dotHandler = function () {
  const Width = 400;
  dots.forEach((e) =>
    e.addEventListener("click", (event) => {
      for (i = 0; i <= images.children.length; i++) {
        if (dots.indexOf(e) === i + 1) {
          images.style.left = `-${i * Width}px`;
        }
      }
      console.log(`current infed of img ${currentIndex}`);
    })
  );
};
dotHandler();

// creting nextClick handler
const nextBtnHandler = function () {
  console.log(currentIndex);

  if (currentIndex <= images.children.length - 1) {
    if (dx <= imageWidth) {
      interval = setInterval(() => {
        images.style.left = `-${dx}px`;
        dx++;
        console.log(images.style.left);
        if (dx > imageWidth) {
          currentIndex++;
          dx = imageWidth;
          imageWidth = imageWidth + 400;
          clearInterval(interval);
        }
      }, 1);
    }
  } else if (currentIndex > images.children.length - 1) {
    interval = setInterval(() => {
      images.style.left = `-${dx}px`;
      dx--;
      if (dx <= 0) {
        clearInterval(interval);
        dx = 0;
      }
    }, 1);

    currentIndex = 0;
    imageWidth = 400;
    currentIndex++;
    // dx = 0;
  }
};

// creating previousClick handler
const prevBtnHandler = function () {
  console.log(currentIndex);
  if ((currentIndex <= images.children.length) & (currentIndex > 0)) {
    if (imageWidth >= dx) {
      interval = setInterval(() => {
        images.style.left = `-${imageWidth - 400}px`;
        imageWidth--;

        console.log(dx);

        if (imageWidth < dx) {
          imageWidth = dx;
          dx = dx - 400;
          currentIndex--;
          console.log(currentIndex);

          // console.log(imageWidth);
          // console.log(dx);
          clearInterval(interval);
        }
      }, 1);
    }
  } else if (currentIndex < 0) {
    console.log(currentIndex);
    console.log(dx);

    dx = 0;
    images.style.left = `${currentIndex * imageWidth}px`;
    imageWidth = 400;
    currentIndex++;
  }
};

// calling handlers
nextBtn.addEventListener("click", nextBtnHandler);
prevBtn.addEventListener("click", prevBtnHandler);
