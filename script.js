function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
        console.log("System running")
      } else {
        reveals[i].classList.remove("active");
        console.log("scroll counter inheriting")
      }
    }
  }
  
  
  window.addEventListener("scroll", reveal);