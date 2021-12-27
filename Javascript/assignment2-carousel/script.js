class slide {
  constructor(id, hold, time) {
    this.container = document.getElementById(id);
    this.wrapper = this.container.querySelector(".carousel-wrapper");
    this.images = this.wrapper.querySelectorAll(".carousel-wrapper img");
    this.count = this.images.length;
    this.imageWidth = 400;
    this.imageHeight = 400;
    this.hold = hold;
    this.time = time;
    this.currentIndex = 0;
    this.isSliding = false;
    this.wrapperSlideWidth = 0;
    this.dots = [];
  }

  // reseting css
  cssReset = () => {
    document.body.style.margin = "0px";
    document.body.style.padding = "0px";
    document.body.style.boxSizing = "border-box";
  };

  // creating container
  createContainer = () => {
    this.container.style.width = `${this.imageWidth}px`;
    this.container.style.height = `${this.imageHeight}px`;
    this.container.style.overflow = "hidden";
    this.container.style.margin = "1% auto";
    this.container.style.position = "relative";
    this.container.style.border = "5px solid grey";
    this.container.style.borderRadius = "5px";
  };

  //creating wrapper
  createWrapper = () => {
    this.wrapper.style.width = `${this.imageWidth * this.count}px`;
    this.wrapper.style.height = `${this.imageHeight}px`;
    this.wrapper.style.marginLeft = "0px";
    this.wrapper.style.position = "absolute";
    this.wrapper.style.left = "0px";
  };

  //creating left btn
  createPrevBtn = () => {
    this.prevBtn = document.createElement("div");
    this.prevBtn.setAttribute("id", "prevBtn");
    this.prevBtn.style.content = "hello";
    this.prevBtn.style.paddingLeft = "30px";
    this.prevBtn.style.fontSize = "40px";
    this.prevBtn.style.left = "0";
    this.prevBtn.style.position = "absolute";
    this.prevBtn.style.color = "white";

    this.prevBtn.style.top = "50%";
    this.prevBtn.innerHTML = "<b><</b>";
    this.container.appendChild(this.prevBtn);
  };

  // creating right btn
  createNextBtn = () => {
    this.nextBtn = document.createElement("div");
    this.container.appendChild(this.nextBtn);
    this.nextBtn.style.fontSize = "40px";
    this.nextBtn.style.position = "absolute";
    this.nextBtn.style.top = "50%";
    this.nextBtn.style.color = "white";
    this.nextBtn.innerHTML = "<b>></b>";
    this.nextBtn.setAttribute("id", "nextBtn");
    this.nextBtn.style.paddingRight = "30px";
    this.nextBtn.style.right = "0";
  };

  // creating dots
  createDots = () => {
    for (var i = 0; i < this.count; i++) {
      this.images[i].style.float = "left";
      this.dot = document.createElement("div");
      this.dotContainer.appendChild(this.dot);
      this.dot.style.border = "1px solid white";
      this.dot.style.display = "inline-block";
      this.dot.style.height = "15px";
      this.dot.style.width = "15px";
      this.dot.style.borderRadius = "50%";
      this.dot.style.marginRight = "15px";
      this.dot.style.cursor = "pointer";

      // handling event click
      let a = i;
      this.dot.addEventListener("click", () => {
        this.sliderAnimation(this.currentIndex, a);
        return (this.currentIndex = a);
      });

      this.dots.push(this.dot);
    }
  };

  // left btn click handler
  prevBtnClick = () => {
    this.prevBtn.addEventListener("click", () => {
      if (!this.isSliding) {
        let pastIndex = (this.currentIndex - 1 + this.count) % this.count;
        this.currentIndex = this.sliderAnimation(this.currentIndex, pastIndex);
      }
    });
  };

  // right btn click handler
  nextBtnClick = () => {
    this.nextBtn.addEventListener("click", () => {
      if (!this.isSliding) {
        if (this.currentIndex == this.count - 1) {
          this.currentIndex = 0;
          this.currentIndex = this.sliderAnimation(
            this.count - 1,
            this.currentIndex
          );
        } else {
          this.currentIndex = this.sliderAnimation(
            this.currentIndex,
            this.currentIndex + 1
          );
        }
      }
    });
  };

  //creating dots
  createDot = () => {
    this.dotContainer = document.createElement("div");
    this.dotContainer.className = "dotContainer";
    this.dotContainer.style.display = "inline-block";
    this.dotContainer.style.position = "absolute";
    this.dotContainer.style.left = "50%";
    this.dotContainer.style.transform = "translate(-37%, 0%)";
    this.dotContainer.style.bottom = "15px";
    this.container.appendChild(this.dotContainer);
    this.createDots();
  };

  dotActiveState = (index) => {
    for (var i = 0; i < this.dots.length; i++) {}
  };

  // sliding images with delay
  slideShows = () => {
    setInterval(() => {
      this.currentIndex = this.sliderAnimation(
        this.currentIndex,
        (this.currentIndex + 1) % this.count
      );
    }, this.hold);
  };

  sliderAnimation(currentIndex, nextIndex) {
    //Taking current and next index as argument
    // SLIDER ANIMATION FUNCTION WITH SETINTERVAL OF WHICH RETURNS NEXT INDEX

    var interval = setInterval(() => {
      // To check wether toogle is taking in right or left direction
      var dx;
      if (nextIndex > currentIndex) {
        dx = 1;
      } else {
        dx = -1;
      }

      //Creates Animation for the slider Transition ( with given FPS (IMAGE Width * next index ))
      this.wrapperSlideWidth += -dx * (this.imageWidth / this.time);
      this.wrapper.style.left = `${this.wrapperSlideWidth}px`;

      // For the Right direction and sets dot
      if (dx == 1 && this.wrapperSlideWidth <= -nextIndex * this.imageWidth) {
        this.wrapper.style.left = `${-nextIndex * this.imageWidth}px`;
        this.dotActiveState(nextIndex);
        clearInterval(interval);
        this.isSliding = false;
      }

      // For the Left Direction and sets dot
      else if (
        dx == -1 &&
        this.wrapperSlideWidth >= -nextIndex * this.imageWidth
      ) {
        this.wrapper.style.left = `${-nextIndex * this.imageWidth}px`;
        clearInterval(interval);
        this.dotActiveState(nextIndex);
        this.isSliding = false;
      }

      // sliding : last to first
      if (currentIndex === 0 && nextIndex === this.count - 1) {
        this.wrapperSlideWidth += -dx * (this.imageWidth / 10);
        // Transition Animation of 1/10th width i.e. 10FPS for last image
      } else if (currentIndex === this.count - 1 && nextIndex === 0) {
        this.wrapperSlideWidth += -dx * (this.imageWidth / 10);
        // Transition Animation of 1/10th width for first image
      }
    }, 10);

    return nextIndex;
    // Returns Next Index and Setinterval of 10MS
  }

  display() {
    this.createNextBtn();
    this.createPrevBtn();
    this.createContainer();
    this.createWrapper();
    this.createDot();
    this.prevBtnClick();
    this.nextBtnClick();
    this.slideShows();
    this.cssReset();
  }
}

//  creating carous
const carousel1 = new slide("carousel-1", 1000, 80);
carousel1.display();

const carousel2 = new slide("carousel-2", 6000, 60);
carousel2.display();

const carousel3 = new slide("carousel-3", 4000, 40);
carousel3.display();
