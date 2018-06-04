/* Task 1 */

var heading = document.getElementById('heading')
console.log(heading.innerText)
/* Task 2 using plain JavaScript */

var textBtn = document.getElementById('textBtn2')
textBtn.addEventListener('click',function(){
    var task2 = document.getElementById('task2a')
    var paragraph =document.createElement('p')
    paragraph.innerText ="Hello world"
    task2.appendChild(paragraph)
})

//Task2b
function changeBgcolor(event){
    var body = document.getElementsByTagName('body')[0]
    if (event.target.innerText == "Red"){
        body.style.backgroundColor ='red'
    }
    if(event.target.innerText =="Green"){
        body.style.backgroundColor = 'green'
    }
}
//task 2c
function redirectToGoogle(){
    window.location.assign('https://www.google.com')
}

/* Task 4 using jQuery */


//task4a

$('#addText4').click(function(event){
    var paragraph =$('<p>').text('Hello world')
    $('#task4a').append(paragraph)
    
})

//task4b

function changeBG(event){
    var color = event.target.innerText.toLowerCase();
    $('body').css('backround-color,color')
}

//task4c
$('#sum').click(function(event){
    var sum =Number($('#num1').val()) +Number($('#num2').val());
    $('#answer').text(sum);
    
})