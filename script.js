// scrolltrigger and locomotive cdn links

function init() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}
init();

//custom mouse positioning
var crsr = document.querySelector(".cursor");
var main = document.getElementById("main");
var videos = document.querySelectorAll("video");
main.addEventListener("mousemove", (event) => {
  crsr.style.display = "block";

  let posX = event.clientX;
  let posY = event.clientY;

  crsr.animate(
    {
      left: `${posX}px`,
      top: `${posY}px`,
    },
    { duration: 200, fill: "forwards" }
  );
});

//removing cursor if cursor moves out of screen
document.addEventListener("mouseout", () => {
  crsr.style.display = "none";
});

//on hovering on video it displays "play" text in cursor
videos.forEach((vid) => {
  vid.addEventListener("mouseenter", () => {
    crsr.innerHTML = "Play";
    crsr.classList.add("video-pointer");
  });
});

//it removes "play" text from cursor
videos.forEach((vid) => {
  vid.addEventListener("mouseleave", () => {
    crsr.innerHTML = "";
    crsr.classList.remove("video-pointer");
  });
});

var links = document.querySelectorAll("#page-5 ul li");

// displaying images while hovering on links in page 5
links.forEach((link) => {
  link.addEventListener("mouseenter", () => {
    let imgLink = link.getAttribute("data-img"); //getting img link from list
    crsr.style.width = "300px";
    crsr.style.height = "300px";
    crsr.style.borderRadius = "0px";
    crsr.style.backgroundImage = `url(${imgLink})`;
  });
  link.addEventListener("mouseleave", () => {
    //removing the img
    crsr.style.width = "20px";
    crsr.style.height = "20px";
    crsr.style.borderRadius = "50%";
    crsr.style.backgroundImage = `none`;
  });
});

// creating the timeline function for the gsap
var tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#page-1 h1",
    scroller: "#main",
    start: "top 25%",
    end: "top 0",
    scrub: 3,
  },
});

// pushing the first header text to left
tl.to(
  "#page-1 h1",
  {
    x: -150,
  },
  "text-anim"
);

// pushing the second header text to right
tl.to(
  "#page-1 h2",
  {
    x: 150,
  },
  "text-anim"
);

// pushing the video to the top
tl.to(
  "#page-1 video",
  {
    width: "90%",
  },
  "text-anim"
);

// creating the second timeline
var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: "#page-1 h1",
    scroller: "#main",
    // markers:true,
    start: "top -125%",
    end: "top -130%",
    scrub: 3,
  },
});

//changing the background color
tl2.to("#main", {
  backgroundColor: "#fff",
});

//creating the third timeline
var tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: "#page-1 h1",
    scroller: "#main",
    // markers:true,
    start: "top -280%",
    end: "top -300%",
    scrub: 3,
  },
});

//changing the background color to white
tl3.to("#main", {
  backgroundColor: "#0F0D0D",
});

let mobileScreenWidth = window.matchMedia("(max-width:600px)");
mobileScreenHandler(mobileScreenWidth)
function mobileScreenHandler(width) {
  if (width.matches) {
    // creating the second timeline
    var tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: "#page-1 h1",
        scroller: "#main",
        // markers: true,
        start: "top -10%",
        end: "top -15%",
        scrub: 3,
      },
    });

    //changing the background color
    tl2.to("#main", {
      backgroundColor: "#fff",
    });

    var tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: "#page-1 h1",
        scroller: "#main",
        // markers:true,
        start: "top -130%",
        end: "top -250%",
        scrub: 3,
      },
    });

    //changing the background color to white
    tl3.to("#main", {
      backgroundColor: "#0F0D0D",
    });

    console.log("max-width:600px");
  } else {
    console.log("max-width:601px");
  }
}
