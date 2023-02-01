// Code your solutions in this file

function writeCards(names){
    let cards = [];
    for(let i = 0; i < names.length; i++){
        cards.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    }

    return cards;
}

function countDown(i){
    while(i >= 0){
        console.log(i);
        i--;
    }
}