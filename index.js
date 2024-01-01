
let data;


(async () => {
    try {
        const response = await fetch("./data.json")
        data = await response.json();
    } catch (error) {
        console.log(error)
        data = []

    } finally {
        main()
    }
})()





function main() {
    let row = document.querySelector("row")
    row.appendChild(data)
    console.log(data)
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


// let params = new URLSearchParams(document.location.search);
// params.get("videoId");
