$(document).ready(function(){
    //display current date at the top of the page
    $("#currentDay").text(moment().format('[Today is] dddd, MMM Do'));

    //update hour-block colors with appropiate classes
    function hourUpdater(){
        //get the current hour of the day
        var currentHour = moment().hours();

        $(".time-block").each(function(){
            var blockHour = parseInt($(this).attr("id").split("-")[1]);

            //check if we are past the current hour
            if (blockHour < currentHour){
                $(this).addClass("past");
            }else if(blockHour === currentHour){
                $(this).removeClass("past");
                $(this).addClass("present");
            }else{
                //remove classes and add the class fo future
            }

        })
    }

    hourUpdater();

    //dont forget to set an interval for the hourupdater function
    //time for one hour is 15000ms
    var interval = setInterval();

    //make a saveBtn click function
        //grab the values from time blocks
            //remember parent and siblings
            //use this
        //save(setItem) the values to localStorage

    //load(getItem) any saved data from localstorage
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
})
