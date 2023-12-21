







const filterButtons = document.querySelectorAll(".filter_buttons button")
const filterableCards = document.querySelectorAll(".filterable_cards a")

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

filterButtons.forEach(button => button.addEventListener("click", filterCards));


function openside() {
    let element = document.querySelector(".left-btns");
    let btn = document.querySelector(".left-btns2");
    btn.classList.toggle("activex3")
    element.classList.toggle("activex")
}









