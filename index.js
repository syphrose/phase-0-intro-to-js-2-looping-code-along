// Code your solutions in this file
function writeCards( namesArray, event) {
    let thankYouCards = []
    for(let i=0; i<namesArray.length; i++){
        thankYouCards.push(`Thank you, ${namesArray[i]}, for the wonderful ${event} gift!`)

    }
    return thankYouCards
}
writeCards(["Brandon","Kashmir","Phyl"],"graduation");

function countDown(number) {
    while (number>0) {
        console.log(number)
        number -= 1;

    }
    console.log(number);
}