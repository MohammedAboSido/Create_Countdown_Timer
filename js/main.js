// The End Of The Year Date To Countdown To
// 1000 milliseconds = 1 Second

let countDownDate = new Date( "Dec 31, 2022 23:59:59" ).getTime();

let counter = setInterval( () =>
{
    // Get Date Now
    let dateNow = new Date().getTime();

    // Find The Date Difference Between Now And Countdown Date
    let dateDiff = countDownDate - dateNow;

    // Get Time Units
    let days = Math.floor( dateDiff / ( 1000 * 60 * 60 * 24 ) );
    let hour = Math.floor( ( dateDiff % ( 1000 * 60 * 60 * 24 ) ) / ( 1000 * 60 * 60 ) );
    let minutes = Math.floor( ( dateDiff % ( 1000 * 60 * 60 ) ) / ( 1000 * 60 ) );
    let seconds = Math.floor( ( dateDiff % ( 1000 * 60 ) ) / 1000 );

    document.querySelector( ".days" ).innerHTML = days < 10 ? `0${ days }` : days;
    document.querySelector( ".hours" ).innerHTML = hour < 10 ? `0${ hour }` : hour;
    document.querySelector( ".minutes" ).innerHTML = minutes < 10 ? `0${ minutes }` : minutes;
    document.querySelector( ".seconds" ).innerHTML = seconds < 10 ? `0${ seconds }` : seconds;


}, 1000 );
