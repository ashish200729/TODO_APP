

const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const addBtn = document.getElementById("add-btn");
const li_list = document.getElementsByTagName("li");

function createLi(task_value) {
    let li = document.createElement("li")
    li.innerHTML = task_value;
    
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);

    return li;
}
function addTask() {
    if (inputBox.value == ''){
        alert("Please Write Something to Add!")
    }
    else{
        const li = createLi(inputBox.value);
        if (li_list.length < 5) {
            listContainer.appendChild(li);
        }
        else {
            alert("You can only add up to 5 tasks!");
        }
    }
    inputBox.value = "";
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
});

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
});

document.addEventListener("keydown", function(event){

    if(event.key == "Enter"){
        if (inputBox.value == ''){
            alert('Please Write Something To add TODO')
        }
        else{
        const li = createLi(inputBox.value);
           if (li_list.length < 5) {
            listContainer.appendChild(li);
            inputBox.value = '';
            }
            else {
                alert("You can only add up to 5 tasks!");
            }
    }}
});