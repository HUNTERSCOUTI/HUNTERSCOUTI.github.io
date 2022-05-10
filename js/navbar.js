window.onscroll = function() {myFunction()};
            
    var header = document.getElementById("siteNav");
    var sticky = header.offsetTop;
            
    function myFunction() {
        header.classList.add("sticky");
        document.getElementById("siteNav").setAttribute("style","height:50px");
}