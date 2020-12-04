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
            op += op * 0.03;
        }, 10);
    }
    document.addEventListener('keydown',function(w){
        window.scroll(0,2000)
        console.log('Hello');
         
    },false);
    //unfade(document.body);
    console.log('Hello');
    //TODO:React
    function changePage(currentPage, nextPage){
        currentPage.style.display = 'none';
        unfade(nextPage);
        nextPage.style.display = 'block';
    }
    var homePageButton = document.getElementById('home');
    var landingPage = document.getElementsByClassName('landingPage')[0];
    var aboutPage = document.getElementsByClassName('aboutPage')[0];
    homePageButton.addEventListener('mousedown',function(){
        changePage(aboutPage,landingPage);
    },false);
},false);