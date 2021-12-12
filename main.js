var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
console.log(date)

document.addEventListener("mousemove", parallax);
function parallax(e){
    document.querySelectorAll("#imgFront").forEach(function(move){
        let moving = move.getAttribute("data-value")
        let x = (e.clientX * moving) / 200
        let y = (e.clientY * moving) / 200

        move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)"
    })
}

function ajaxDefault(){
    
    console.log(date)
    const api_key = "pGuT7tBWOZfKfJ2Eda2eh0rzl0aYOUsWFSCbTmL4"
    let url = `https://api.nasa.gov/planetary/apod?api_key=${api_key}&date=${date}`
    console.log(url)

    $.ajax({
        url: url,
        type: "GET",
        success: function(response){
            console.log(response)
            $('#ajaxImage').attr("src", response.url)
            $('.ajaxText').text(response.title)
            $('#ajaxDesc').text(response.explanation)
        } 
    })
}
function ajaxSpace(){
    var day = document.getElementById("datePicker").value
    console.log(day)
    const api_key = "pGuT7tBWOZfKfJ2Eda2eh0rzl0aYOUsWFSCbTmL4"
    let url = `https://api.nasa.gov/planetary/apod?api_key=${api_key}&date=${day}`
    console.log(url)

    $.ajax({
        url: url,
        type: "GET",
        success: function(response){
            console.log(response)
            $('#ajaxImage').attr("src", response.url)
            $('.ajaxText').text(response.title)
            $('#ajaxDesc').text(response.explanation)
        } 
    })









}
ajaxDefault()
