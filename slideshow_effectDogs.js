////////////////////////
//////// Dogs //////////
////////////////////////
let slideIndexDogs = 1;
showSlidesDogs(slideIndexDogs);

// Next/previous controls
function plusSlidesDogs(n) {
  showSlidesDogs(slideIndexDogs += n);
}

// Thumbnail image controls
function currentSlideDogs(n) {
  showSlidesDogs(slideIndexDogs = n);
}

function showSlidesDogs(n) {
  let i;
  let slidesDogs = document.getElementsByClassName("mySlidesDogs");
  let dotsDogs = document.getElementsByClassName("dotDogs");
  if (n > slidesDogs.length) {slideIndexDogs = 1}
  if (n < 1) {slideIndexDogs = slidesDogs.length}
  for (i = 0; i < slidesDogs.length; i++) {
    slidesDogs[i].style.display = "none";
  }
  for (i = 0; i < dotsDogs.length; i++) {
    dotsDogs[i].className = dotsDogs[i].className.replace(" active", "");
  }
  slidesDogs[slideIndexDogs-1].style.display = " block";
  dotsDogs[slideIndexDogs-1].className += " active";
}