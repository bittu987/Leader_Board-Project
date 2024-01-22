
const submit_Button = document.getElementById("btn");


submit_Button.addEventListener('click', (e)=>{

    e.preventDefault();

    const players_Data = document.getElementById("playerList");

    const first_Name = document.getElementById("F-N").value;
    const last_Name = document.getElementById("L-N").value;
    const country = document.getElementById("ctry").value;
    const player_Score = document.getElementById("P-Score").value;

    const list = document.createElement('li');
    const Name = document.createElement('span');
    const country_content = document.createElement('span');
    const score_content = document.createElement('span');

    Name.innerText = first_Name+" "+last_Name;
    country_content.innerText = country;
    score_content.innerText = player_Score;

    list.append(Name,country_content,score_content);
    players_Data.append(list);

})