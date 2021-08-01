const emojis = ['👌','🤣','😜','😈','💀','🤑','🥰','👽','👀','💯','😂','😎'];

function displayBall(){
    var amount = document.getElementById('amount').value;
    var selectedEmoji = document.getElementById('selectEmoji').value;
    var setContainer = document.getElementById('set-container');
    var ballContainer = document.createElement('div');
    ballContainer.classList.add('ball-container');
    for(let i = 1; i <= amount; i++){
        var ball = document.createElement('div');
        ball.classList.add('ball');
        if(selectedEmoji == 0){
            ball.textContent = randomEmoji();
        }
        else{
            ball.textContent = emojis[selectedEmoji-1];
        }
        ball.style.animationDelay = `${Math.random()}s`;
        ball.style.backgroundColor = randomColor();
        ball.style.background = `radial-gradient(circle, ${randomColor()} 0%, ${randomColor()} 100%)`;
        ballContainer.appendChild(ball);
    }
    setContainer.appendChild(ballContainer);
}

function toggleRave(){
    var body = document.getElementsByTagName('body')[0];
    if (document.getElementById('checkRave').checked) {
        body.style.animation = 'rave 6s infinite';
    } else {
        body.style.animation = 'none';
    }
}

function toggleMoreOptions(){
    var options = document.getElementById('more-options');
    if (options.style.display === "block") {
        options.style.display = "none";
    } else {
        options.style.display = "block";
    }
}

function resetView(){
    document.getElementById("checkRave").click();
    document.getElementById('selectEmoji').value = 0;
    var setContainer = document.getElementById('set-container');
    while (setContainer.lastElementChild) {
        setContainer.removeChild(setContainer.lastElementChild);
    }
}

function randomColor(){
    const randomHex = Math.floor(Math.random()*16777215).toString(16);
    var color = '#' + randomHex;
    return color;
}

function randomEmoji(){
    const MIN = 0;
    const MAX = emojis.length-1;
    var random = Math.floor(Math.random() * (MAX - MIN + 1) + MIN);
    return emojis[random];
}

