let main = function() {
    let myButton = document.querySelector("#toTopButton");
    myButton.onclick = (event) => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };
    window.onscroll = () => {
        if(document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
            myButton.style.display = "block";
        } else {
            myButton.style.display = "none";
        }
    }
}
main();