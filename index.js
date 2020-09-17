$(document).ready(function () {
    //display current date at the top of the page
    $("#currentDay").text(moment().format('[Today is] dddd, MMM Do'));

    //update hour-block colors with appropiate classes
    function hourUpdater() {
        //get the current hour of the day
        var currentHour = moment().hours();

        $(".time-block").each(function () {
            var blockHour = parseInt($(this).attr("id").split("-")[1]);

            //check if we are past the current hour
            if (blockHour < currentHour) {
                $(this).addClass("past");
            } else if (blockHour === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
            } else if (blockHour > currentHour) {
                $(this).removeClass("present");
                $(this).addClass("future");
            }

        })
    }

    hourUpdater();

    //set an interval for the hourupdater function
    
    setInterval(function() {
           var date = moment().year(year).month(month).date(day);
           var time = moment().hour(Number);
           document.getElementById("currentDay").innerHTML = time;
       }, 3000)


    //make a saveBtn click function
    //grab the values from time blocks
    //save(setItem) the values to localStorage
    var saveButton = document.querySelector('.saveBtn');

    saveButton.addEventListener("click", function (event) {
        event.preventDefault();
        var userInput = document.querySelector('.description').value;

        if (userInput === "") {
            $('#hour-9.description').val(localStorage.setItem("hour-9", userInput));

            $('#hour-10.description').val(localStorage.setItem("hour-10", userInput));

            $('#hour-11.description').val(localStorage.setItem("hour-11", userInput));

            $('#hour-12.description').val(localStorage.setItem("hour-12", userInput));

            $('#hour-13.description').val(localStorage.setItem("hour-13", userInput));

            $('#hour-14.description').val(localStorage.setItem("hour-14", userInput));

            $('#hour-15.description').val(localStorage.setItem("hour-15", userInput));

            $('#hour-16.description').val(localStorage.setItem("hour-16", userInput));

            $('#hour-17.description').val(localStorage.setItem("hour-17", userInput));
            
        }
    })


    //load(getItem) any saved data from local storage
    $("#hour-9.description").val(localStorage.getItem("hour-9"));

    $("#hour-10.description").val(localStorage.getItem("hour-10"));

    $("#hour-11.description").val(localStorage.getItem("hour-11"));

    $("#hour-12.description").val(localStorage.getItem("hour-12"));

    $("#hour-13.description").val(localStorage.getItem("hour-13"));

    $("#hour-14.description").val(localStorage.getItem("hour-14"));

    $("#hour-15.description").val(localStorage.getItem("hour-15"));

    $("#hour-16.description").val(localStorage.getItem("hour-16"));

    $("#hour-17.description").val(localStorage.getItem("hour-17"));

});
