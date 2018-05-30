/* Task 1 */

var heading = document.getElementById('heading');
console.log(heading.innerText)

/* Task 2 using plain JavaScript */

var textBtn = document.getElementById('textBtn2');
textBtn.addEventListener('click',function (){
    var task2 = document.getElementById('task2a');
    var paragraph = document.createElement('p');
    paragraph.innerText = "Hello World";
    task2.appendChild(paragraph);
});

/* Task 4 using jQuery */
