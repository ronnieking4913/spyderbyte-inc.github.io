/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function dropdownFunction() {
    document.getElementById("dropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.drop-button')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

var index = 0;

function slideshow() {
    var i;
    var x = document.getElementsByClassName("psych-photos");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    index++;
    if (index > x.length) {index = 1}    
    x[index-1].style.display = "block";  
    setTimeout(slideshow, 3000);
}