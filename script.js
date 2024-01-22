
const form = document.getElementById('form');

form.addEventListener('submit', function (event) {

    addPlayer(event);
});

let PlayerList = [];


function addPlayer(event) {

    event.preventDefault();


    const playerList = document.getElementById('player-list');

    const firstName = document.getElementById('first-name').value.toUpperCase();
    const lastName = document.getElementById('last-name').value.toUpperCase();
    const country = document.getElementById('country').value.toUpperCase();
    const score = document.getElementById('score').value.toUpperCase();
    const nofield = document.getElementById('no-field');

    if (firstName === '' || lastName === '' || country === '' || score === '') {
        nofield.innerHTML = 'All fields are required';
        return;
    }

    // if(firstName === '' || lastName === '' || country === '' || score === '')
    // return (LI.style.display = "block");
    const playerData = {
        name: firstName + " " + lastName,
        country: country,
        score: Number(score)
    }

    PlayerList.push(playerData);
    PlayerList.sort((player1, player2) => parseInt(player2.score) - parseInt(player1.score));

    playerList.innerHTML = "";

    for (let index = 0; index < PlayerList.length; index++) {

        let player = PlayerList[index];

        const LI = document.createElement('li');
        const nameContent = document.createElement('span');
        const scoreContent = document.createElement('span');
        const countryContent = document.createElement('span');


        const incrementButton = document.createElement('button');
        const decrementButton = document.createElement('button');
        const deleteButton = document.createElement('button');

        incrementButton.innerHTML = '+5';
        decrementButton.innerHTML = '-5';
        deleteButton.innerHTML ='<i class="fa-solid fa-trash"></i>';

        incrementButton.setAttribute('onclick', `increment5(${index})`);
        decrementButton.setAttribute('onclick', `decrement5(${index})`);
        deleteButton.setAttribute('onclick', `remove(${index})`);

        nameContent.innerHTML = player.name;
        countryContent.innerHTML = player.country;
        scoreContent.innerHTML = player.score
        
        LI.append(nameContent, countryContent, scoreContent,deleteButton, incrementButton, decrementButton);

        playerList.appendChild(LI);
       

    }

}


function refreshList() {
    const playerList = document.getElementById('player-list');
    PlayerList.sort((player1, player2) => parseInt(player2.score) - parseInt(player1.score));


    playerList.innerHTML = "";

    for (let index = 0; index < PlayerList.length; index++) {

        let player = PlayerList[index];

        const LI = document.createElement('li');
        const nameContent = document.createElement('span');
        const scoreContent = document.createElement('span');
        const countryContent = document.createElement('span');


        const incrementButton = document.createElement('button');
        const decrementButton = document.createElement('button');
        const deleteButton = document.createElement('button');

        incrementButton.innerHTML = '+5';
        decrementButton.innerHTML = '-5';
        deleteButton.innerHTML ='<i class="fa-solid fa-trash"></i>';

        incrementButton.setAttribute('onclick', `increment5(${index})`);
        decrementButton.setAttribute('onclick', `decrement5(${index})`);
        deleteButton.setAttribute('onclick', `remove(${index})`);

        nameContent.innerHTML = player.name;
        countryContent.innerHTML = player.country;
        scoreContent.innerHTML = player.score
        
        LI.append(nameContent, countryContent, scoreContent,deleteButton, incrementButton, decrementButton);

        playerList.appendChild(LI);

    }
}

    function increment5(index) {

        PlayerList[index].score += 5;
        refreshList();

    }
    function decrement5(index) {

        PlayerList[index].score -= 5;
        refreshList();

    }
    function remove(index) {

        delete PlayerList[index];
        refreshList();

    }
   


















