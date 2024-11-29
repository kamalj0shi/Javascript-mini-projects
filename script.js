const inputBox = document.getElementById("input-box")
const listContainer = document.getElementById("list-container")

function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!")
    }
    else{
        let li = document.createElement("li")
        li.innerHTML = inputBox.value
        listContainer.appendChild(li)
        let span = document.createElement("span")
        span.innerHTML="\u00d7"
        li.appendChild(span)
    }
    inputBox.value =""
    saveData();
}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData()
    }
    else if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }

},false)

// it stores data and changes to local storages 
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML)
}
// this function  fetch the dsta from the local storage which we have saved using above function.
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data")
}

showTask();