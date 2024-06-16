const button = document.getElementById('confettiButton');

button.addEventListener('click', function() {
    changeHeaderText()
});

const messages = [
    "Happy Birthday Nysis !!!!",
    "12/10 BIRTHDAY FOR A 12/10 GUY",
    "miio was here n wishes you a happy birfday ! :3",
    "greatest day ever for the coolest guy ever",
    "hope this is the best day ever!",
    "BIRF DAY YAY",
    "WOOOOOOO CONFETTI HAPPY BIRTHDAY"
];


function getRandomMessage() {
    const randomIndex = Math.floor(Math.random() * messages.length);
    return messages[randomIndex];
}


function changeHeaderText() {
    const header = document.getElementById('message');
    header.textContent = getRandomMessage();
}
