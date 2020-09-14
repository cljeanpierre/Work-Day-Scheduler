$(document).ready(() => {
    //display current day at the top of the calendar



    //insert standard business hours inside time blocks




    //color code timeblocks to indicate past, present, or future
var currentEvent = "";
var pastEvent = "";
var futureEvent = "";





    //click into timeblock to enter an event

event1= "";
event2= "";
event3= "";

var eventSelected = false;
var timeClicked = false;

$('.firstEvent').on('click', () => {
    eventSelected = true; 
    if (timeClicked) {
        $('.firstEvent').text(event1);
    }

$('.secondEvent').on('click', () => {
    eventSelected = true; 
    if (timeClicked) {
        $('.firstEvent').text(event2);
    }

$('.thirdEvent').on('click', () => {
    eventSelected = true; 
    if (timeClicked) {
        $('.firstEvent').text(event3);
    }
})



    //save text into local storage when save button is clicked





    //Ensure that refresh button keeps saved items
}