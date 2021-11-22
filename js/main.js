document.addEventListener(
  "DOMContentLoaded",
  () => {
    const unfade = (element) => {
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
    };

    const fade = (element) => {
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
    };

    function changePage(currentPage, nextPage) {
      //Checking if page is currently displayed
      if (activePage === nextPage) return 0;
      //TODO Swift page change
      fade(currentPage);
      unfade(nextPage);
    }

    unfade(document.body);

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
      () => {
        changePage(activePage, landingPage);
        if (document.body.clientWidth < 931) {
          buttonClosed ? openNav() : closeNav();
          buttonClosed = !buttonClosed;
        }
        activePage = landingPage;
      },
      false
    );
    aboutPageButton.addEventListener(
      "mousedown",
      () => {
        changePage(activePage, aboutPage);
        if (document.body.clientWidth < 931) {
          buttonClosed ? openNav() : closeNav();
          buttonClosed = !buttonClosed;
        }
        activePage = aboutPage;
      },
      false
    );
    workPageButton.addEventListener(
      "mousedown",
      () => {
        changePage(activePage, workPage);
        if (document.body.clientWidth < 931) {
          buttonClosed ? openNav() : closeNav();
          buttonClosed = !buttonClosed;
        }
        activePage = workPage;
      },
      false
    );
    contactPageButton.addEventListener(
      "mousedown",
      function () {
        changePage(activePage, contactPage);
        if (document.body.clientWidth < 931) {
          buttonClosed ? openNav() : closeNav();
          buttonClosed = !buttonClosed;
        }
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
    const OpButton = document.getElementById("leftPanelMobileIcon");
    OpButton.addEventListener(
      "click",
      () => {
        buttonClosed ? openNav() : closeNav();
        buttonClosed = !buttonClosed;
        console.log(buttonClosed);
        // openNav();
      },
      false
    );
    const CdButton = document.getElementById("leftPanelCloseIcon");
    CdButton.addEventListener(
      "click",
      (e) => {
        buttonClosed ? openNav() : closeNav();
        buttonClosed = !buttonClosed;
      },
      false
    );
  },
  false
);
