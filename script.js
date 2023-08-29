const accessKey = "key"

const formEL = document.querySelector("form")
const inputEl = document.getElementById("search-input")
const searchResults = document.querySelector(".search-results")
const showMore = document.getElementById("show-more-button")

let inputData = ""
let page = 1;

function searchImages(){
    inputData = inputEl.value;
}
