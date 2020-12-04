document.addEventListener('DOMContentLoaded',function(){
    function unfade(element) {
        var op = 0.1;  // initial opacity
        element.style.display = 'block';
        var timer = setInterval(function () {
            if (op >= 1){
                clearInterval(timer);
            }
            element.style.opacity = op;
            element.style.filter = 'alpha(opacity=' + op * 100 + ")";
            op += op * 0.04;
        }, 10);
    }
    function fade(element) {
        var op = 1;  // initial opacity
        var timer = setInterval(function () {
            if (op <= 0.1){
                clearInterval(timer);
                element.style.display = 'none';
            }
            element.style.opacity = op;
            element.style.filter = 'alpha(opacity=' + op * 100 + ")";
            op -= op * 0.04;
        }, 10);
    }
    function changePage(currentPage, nextPage){
        //Checking if page is currently displayed
        if(activePage === nextPage) return 0;
        //TODO Swift page change
        fade(currentPage);
        unfade(nextPage);
    }
        
    //unfade(document.body);

    //Variables
    //Buttons
    var homePageButton = document.getElementById('home');
    var aboutPageButton = document.getElementById('about');
    var workPageButton = document.getElementById('work');
    var contactPageButton = document.getElementById('contact');
    //Pages
    var landingPage = document.getElementsByClassName('landingPage')[0];
    var aboutPage = document.getElementsByClassName('aboutPage')[0];
    var workPage = document.getElementsByClassName('workPage')[0];
    var contactPage = document.getElementsByClassName('contactPage')[0];
    //Page shown on screen
    var activePage = landingPage;
    //Handlers for menu buttons
    homePageButton.addEventListener('mousedown',function(){
        changePage(activePage,landingPage);
        activePage = landingPage;
    },false);
    aboutPageButton.addEventListener('mousedown',function(){   
        changePage(activePage,aboutPage);
        activePage = aboutPage;
    },false);
    workPageButton.addEventListener('mousedown',function(){
        changePage(activePage,workPage);
        activePage = workPage;
    },false);
    contactPageButton.addEventListener('mousedown',function(){
        changePage(activePage,contactPage);
        activePage = contactPage;
    },false);
},false);