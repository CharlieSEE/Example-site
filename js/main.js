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
    //Gallery
    const gallery = document.getElementById("workPageGallery");
    const galleryImg = document.getElementById("workPageGalleryImg");
    const galleryPreviewImgNode = document.getElementsByClassName(
      "workPageGalleryPreviewImg"
    );
    //Variables
    function myFunction(imgs) {
      var expandImg = document.getElementById("expandedImg");
      var imgText = document.getElementById("imgtext");
      expandImg.src = imgs.src;
      imgText.innerHTML = imgs.alt;
      expandImg.parentElement.style.display = "block";
    }
    for (let i = 0; i < galleryPreviewImgNode.length; i++) {
      galleryPreviewImgNode[i].addEventListener("click", function (e) {
        myFunction(e);
      }, false);
    }
    let previewImg = [];
    //TODO Finish gallery img change
    for (let i = 0; i < galleryPreviewImgNode.length; i++) {
      previewImg[i] = "./img/img" + (i + 2) + ".jpg";
      console.log(previewImg[i]);
    }
    //Form handle
    document.getElementById("contactForm").addEventListener(
      "submit",
      (e) => {
        //TODO Handling form
        e.preventDefault();
      },
      false
    );
  },
  false
);
