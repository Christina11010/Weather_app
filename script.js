// we need two variables: input box and list container
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// a function that adds a task
function addTask() {
  if (inputBox.value === "") {
    alert("You must write something");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);

    // create a cross icon after the list item that's been added
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }

  // clear the input box once task is added
  inputBox.value = "";
  saveData();
}

// add task when hit "enter" key
inputBox.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
      addTask();
  }
});

listContainer.addEventListener("click", function(e) {
    // if clicking on a task, then turn it into "checked" mode
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    // if clicking on the cross, then remove the task item
    else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);



// save the data so when refreshing the webpage, the lists will still be there
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}


showTask();