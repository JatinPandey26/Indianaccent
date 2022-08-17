function displayOptions(element) {
  let q = document.querySelector(".optionsbar");
  if (element.name == "close-outline") {
    q.classList.add("translate-y-[-5rem]");
    element.name = "reorder-four-outline";
  } else {
    element.name = "close-outline";
    q.classList.remove("translate-y-[-5rem]");
  }
}

const slidecontainer = document.querySelector(".slidercontainer");
const images = document.querySelectorAll(".slidercontainer img");

//buttons
const prebtn = document.querySelector("#prevbtn");
const nexbtn = document.querySelector("#nextbtn");

//counter
let counter = 1;
const imgsize = images[0].clientWidth;

slidecontainer.style.transform = 'translateX(' + ( -imgsize * counter )+ 'px)';

nexbtn.addEventListener("click", () => {

slidecontainer.style.transition = "transform 0.4s ease-in-out";
counter++;
slidecontainer.style.transform = 'translateX(' + (-imgsize * counter) + 'px)';

});


prebtn.addEventListener("click", () => {
  console.log('hemlo');
  slidecontainer.style.transition = "transform 0.4s ease-in-out";
  counter--;
  slidecontainer.style.transform = 'translateX('+ (-imgsize * counter) + 'px)';
  });
  
slidecontainer.addEventListener('transitionend',()=>{
  console.log('sfgyasgj');
  if(images[counter].id === 'lastimgclone'){
    slidecontainer.style.transition = "none";
    counter = images.length-2;
    slidecontainer.style.transform = 'translateX('+ (-imgsize * counter) + 'px)';
  }

  if(images[counter].id === 'firstimgclone'){
    slidecontainer.style.transition = "none";
    counter = images.length-counter;
    slidecontainer.style.transform = 'translateX('+ (-imgsize * counter) + 'px)';
  }
})