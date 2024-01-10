
let data;
const filterbuttons = document.querySelectorAll(".filter_buttons button")
const cardcontainer = document.querySelector(".row");
(async () => {
    try {
        const response = await fetch("./data.json")
        data = await response.json();
        main(data)
        myfunction()
    } catch (error) {
        data = []
    }
})()

function main(items) {
    cardcontainer.innerHTML = ""

    items.forEach(item => {
        let card = document.createElement("a")
        card.setAttribute("href", `index2.html?videoid=${item.id}`)
        card.className = "cards-content";

        card.innerHTML = `
<video id="videos" src ="${item.video}"></video>
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
        cardcontainer.appendChild(card)
    })
}
function myfunction() {
    let videos = document.querySelectorAll("#videos");

    videos.forEach(async (video) => {
        video.addEventListener("mouseenter", function () {
            video.play();
            console.log("a");
        });
        video.addEventListener("mouseout", function () {
            video.pause();
            video.currentTime = 0; // Reset the video to the beginning on mouse leave
        });
    });
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
    filter(input, "title")
}

filterbuttons.forEach(el => {
    el.addEventListener("click", () => {
        let category = el.getAttribute("data-category")
        if (category === "all") {
            main(data);
        } else {
            filter(category, "category")
        }

    })
})

filterbuttons.forEach(el => {
    el.addEventListener("click", function () {
        filterbuttons.forEach(el2 => el2.classList.remove("active"))
        this.classList.add("active");
    })
})


function filter(text, field) {
    const filterdata = data.filter(item => {
        return item[field].includes(text)
    })
    main(filterdata)
}



