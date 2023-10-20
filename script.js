

window.addEventListener("load", (event) => {

    console.log("page is fully loaded");

    const input = document.getElementById('input');
    const submitBtn = document.getElementById('submitBtn');

    input.addEventListener('keydown', function (event) {

        if (event.key === 'Enter') {
            addTask(input);
        }
    });

    submitBtn.addEventListener('click', function (event) {
        addTask(input);
    });
});


function addTask(input) {

    let divParent = document.createElement('div');
    let divChild = document.createElement('div');
    let checkIcon = document.createElement('i');
    let trashIcon = document.createElement('i');

    divParent.className = 'item';
    divParent.innerHTML = `<div>${input.value}</div>`

    checkIcon.className = 'fas fa-check-square';
    checkIcon.style.color = 'lightgray';
    checkIcon.addEventListener('click', function () {
        if (checkIcon.style.color == 'lightgray') {
            checkIcon.style.color = 'limegreen';
        }
        else {
            checkIcon.style.color = 'lightgray'
        }
    });


    divChild.appendChild(checkIcon);

    trashIcon.className = 'fas fa-trash';
    trashIcon.style.color = 'darkgray';
    trashIcon.addEventListener('click', function () {
        divParent.remove();
    });

    divChild.appendChild(trashIcon);

    divParent.appendChild(divChild);


    const toDoItems = document.getElementsByClassName('to-do-items')[0];

    toDoItems.appendChild(divParent);

    input.value = '';


}