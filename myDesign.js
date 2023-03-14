window.onload = function() {
  const dropdownBtn = document.getElementById("btn");
 
  dropdownBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    toggleDropdown();
  });
}
const body = document.getElementById("body");
const dropdownMenu = document.getElementById("dropdown");
const toggleArrow = document.getElementById("arrow");

function toggleDropdown() {
  dropdownMenu.classList.toggle("show");
  toggleArrow.classList.toggle("arrow")
};


body.addEventListener("click", function () {
  if(dropdownMenu.classList.contains("show")){
  toggleDropdown();
  }
});