document.addEventListener(
  "DOMContentLoaded",
  function () {
    function unfade(element) {
      let op = 0.1; // initial opacity
      element.style.display = "block";
      let timer = setInterval(function () {
        if (op >= 1) {
          clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = "alpha(opacity=" + op * 100 + ")";
        op += op * 0.04;
      }, 10);
    }
    function fade(element) {
      let op = 1; // initial opacity
      let timer = setInterval(function () {
        if (op <= 0.1) {
          clearInterval(timer);
          element.style.display = "none";
        }
        element.style.opacity = op;
        element.style.filter = "alpha(opacity=" + op * 100 + ")";
        op -= op * 0.04;
      }, 10);
    }
    function changePage(currentPage, nextPage) {
      //Checking if page is currently displayed
      if (activePage === nextPage) return 0;
      //TODO Swift page change
      fade(currentPage);
      unfade(nextPage);
    }

    //unfade(document.body);

    //Variables
    //Buttons
    const homePageButton = document.getElementById("home");
    const aboutPageButton = document.getElementById("about");
    const workPageButton = document.getElementById("work");
    const contactPageButton = document.getElementById("contact");
    //Pages
    const landingPage = document.getElementsByClassName("landingPage")[0];
    const aboutPage = document.getElementsByClassName("aboutPage")[0];
    const workPage = document.getElementsByClassName("workPage")[0];
    const contactPage = document.getElementsByClassName("contactPage")[0];
    //Page shown on screen
    let activePage = landingPage;
    //Handlers for menu buttons
    homePageButton.addEventListener(
      "mousedown",
      function () {
        changePage(activePage, landingPage);
        activePage = landingPage;
      },
      false
    );
    aboutPageButton.addEventListener(
      "mousedown",
      function () {
        changePage(activePage, aboutPage);
        activePage = aboutPage;
      },
      false
    );
    workPageButton.addEventListener(
      "mousedown",
      function () {
        changePage(activePage, workPage);
        activePage = workPage;
      },
      false
    );
    contactPageButton.addEventListener(
      "mousedown",
      function () {
        changePage(activePage, contactPage);
        activePage = contactPage;
      },
      false
    );
    //Form handle
    document.getElementById("contactForm").addEventListener(
      "submit",
      (e) => {
        //TODO Handling form
        e.preventDefault();
      },
      false
    );
    //Close Button
    let buttonClosed = true;
    function openNav() {
      document.getElementsByClassName("leftPanel")[0].style.width = "100%";
    }    
    function closeNav() {
      document.getElementsByClassName("leftPanel")[0].style.width = "0";
    }
    const OpCdButton = document.getElementById('leftPanelMobileIcon');
    OpCdButton.addEventListener('click',()=>{
      buttonClosed ? openNav():closeNav();
      buttonClosed = !buttonClosed;
      console.log(buttonClosed);
      // openNav();
    },false);
  },
  false
);
