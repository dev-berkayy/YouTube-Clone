function openside() {
    let element = document.querySelector(".left-btns");
    let btn = document.querySelector(".left-btns2");
    let btn2 = document.querySelector(".left-btns3")
    btn2.classList.toggle("activex4")
    btn.classList.toggle("activex3")
    element.classList.toggle("activex")
    let element2 = document.querySelectorAll(".left-btn")
    element2.forEach((e) => {
        e.classList.toggle("left-btn-new")
    })
}
function searchFunction() {
    const input = document.querySelector("input").value.toUpperCase();
    const cardcontainer = document.querySelector(".row")
    const cards = cardcontainer.getElementsByClassName("cards-content")


    for (i = 0; i < cards.length; i++) {
        let title = cards[i].querySelector(".card_text")


        if (title.innerText.toUpperCase().indexOf(input) > -1) {
            cards[i].style.display = "";
        } else {
            cards[i].style.display = "none";
        }
    }
}



document.addEventListener("DOMContentLoaded", function () {

    let videos = document.querySelector(".video2");

    // Loop through each video element
    videos.forEach(function (video) {

        video.addEventListener("mouseenter", function () {
            video.play();
        });

        video.addEventListener("mouseleave", function () {
            video.pause();

        });
    });
});