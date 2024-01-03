



let data;

(async () => {
    try {
        const response = await fetch("./data.json")
        data = await response.json();
    } catch (error) {
        data = []
    } finally {
        main()
    }
})()


function main() {
    let row = document.querySelector(".row")
    data.forEach(item => {
        let card = document.createElement("a")
        card.className = "cards-content";

        card.innerHTML = `
<video id="videos" src = "${item.video}"></video>
<div class="card_body">
    <img id="card-img" src="${item.channel.avatar}" alt="">
    <div class="content-card">
        <p class="card_text">
        ${item.title}
        </p>

        <p class="card-text2">${item.channel.name} <br>  <span style="margin-top: 6px;">
        ${item.views} watch ' ${item.date}
            </span> </p>

    </div>

</div>
`
        row.appendChild(card)

    })
}

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


let videos = document.querySelectorAll("#videos");

videos.forEach((video) => {
    video.addEventListener("mouseover", function () {
        video.play();
    });

    video.addEventListener("mouseleave", function () {
        video.pause();
        video.currentTime = 0; // Reset the video to the beginning on mouse leave
    });
});
