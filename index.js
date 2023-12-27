


let filterButtons = document.querySelectorAll(".filter_buttons button")
let filterableCards = document.querySelectorAll(".filterable_cards a")

let a = document.querySelector("a")

const filterCards = (e) => {
    document.querySelector(".active").classList.remove("active")
    e.target.classList.add("active")

    filterableCards.forEach(a => {
        a.classList.add("hide")

        if (a.dataset.name === e.target.dataset.name || e.target.dataset.name === "all") {
            a.classList.remove("hide")
        }
    })
}
filterButtons.forEach(button => button.addEventListener("click", filterCards))


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

    const cardcontainer = document.querySelector(".row");


    const cards = cardcontainer.querySelectorAll(".cards-content");



    for (let i = 0; i < cards.length; i++) {
        let title = cards[i].querySelector(".content-card .card_text")
        console.log(title)

        if (title.innerText.toUpperCase().indexOf(input) > -1) {
            cards[i].style.display = "";
        } else {
            cards[i].style.display = "none";
        }
    }

}
