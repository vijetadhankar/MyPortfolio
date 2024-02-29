
// function flipCard() {
//     var cardInner = document.getElementById('card-inner');
//     cardInner.style.transform = cardInner.style.transform === 'rotateY(180deg)' ? 'rotateY(0deg)' : 'rotateY(180deg)';
// }
function flipCard(cardId) {
    var cardInner = document.getElementById('card-inner' + cardId);

    cardInner.style.transform = cardInner.style.transform === 'rotateY(180deg)' ? 'rotateY(0deg)' : 'rotateY(180deg)';
}
