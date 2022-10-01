const generateArrayBtn = document.getElementById("generate-rarray");
const elementToSearch = document.getElementById("valueForSearch");
const searchBtn = document.getElementById("search");
const linearSearchBtn = document.getElementById("linear-search");
const binarySearchBtn = document.getElementById("binary-search");
const ternarySearchBtn = document.getElementById("ternary-search");
const arrowIcons = document.getElementsByClassName("box-item-icon");

// colors for success and failure
const success = "#00FF00";
const failure = "#FB3640";

let randomArray = [];
let randomSortedArray = [];
let searchType = "linear";

// generate random numbers first time
 insertRandomArray();

// event listner for generating new array
generateArrayBtn.addEventListener("click", () => {
  insertRandomArray();
});

function searchKey(){
  let element = elementToSearch.value;
  if (element != "") {
    const searchValue = parseInt(element);
    if (searchType === "linear") {
      disable();
      linearSearch(randomArray, searchValue);
    }

    if (searchType === "binary") {
      disable();
      binarySearch(randomSortedArray,searchValue,0,randomSortedArray.length - 1);
    }

    if (searchType === "ternary") {
      disable();
      ternarySearch(randomSortedArray,searchValue,0,randomSortedArray.length - 1);
    }
  }
}

// event listner for searching an element in an array
searchBtn.addEventListener("click", searchKey);
elementToSearch.addEventListener("keypress",(event) =>{
   if(event.key==="Enter"){
      searchKey();
   }
});

// event listner for selecting type of search method(linear or binary)
// for linear search
linearSearchBtn.addEventListener("click", () => {
  linearSearchBtn.style.borderBottom = "1px solid white";
  binarySearchBtn.style.borderBottomColor = "#243441";
  ternarySearchBtn.style.borderBottomColor = "#243441";
  searchType = "linear";
});

// for binary search
binarySearchBtn.addEventListener("click", () => {
  linearSearchBtn.style.borderBottomColor = "#243441";
  binarySearchBtn.style.borderBottom = "1px solid white";
  ternarySearchBtn.style.borderBottomColor = "#243441";
  if (searchType != "binary") {
    searchType = "binary";
    insertRandomArray();
  }
});

// for ternary search
ternarySearchBtn.addEventListener("click", () => {
  linearSearchBtn.style.borderBottomColor = "#243441";
  binarySearchBtn.style.borderBottomColor = "#243441";
  ternarySearchBtn.style.borderBottom = "1px solid white";
  if (searchType != "ternary") {
    searchType = "ternary";
    insertRandomArray();
  }
});
