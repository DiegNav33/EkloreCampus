document.addEventListener("DOMContentLoaded", function() {

    // BURGER MENU TOGGLE START
      let burgerIconElts = document.getElementById("icons");
      let navBurgerMenu = document.getElementById("burgerMenu");
    
      burgerIconElts.addEventListener("click", function() {

        if (burgerIconElts.classList.contains("burgerIcon")) {

          navBurgerMenu.style.display = 'block';
          navBurgerMenu.style.height = navBurgerMenu.scrollHeight + "px";
          burgerIconElts.classList.add("crossIcon");
          burgerIconElts.classList.remove("burgerIcon");
        } 
        else {

          navBurgerMenu.style.height = "0px";
          setTimeout(function() {
              navBurgerMenu.style.display = "none";
            }, 500);
          burgerIconElts.classList.remove("crossIcon");
          burgerIconElts.classList.add("burgerIcon");
        }
      });
    // BURGER MENU TOGGLE END
});