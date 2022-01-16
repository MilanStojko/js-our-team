const team = [
  {
    name: 'Wayne Barnett',
    role: 'Founder & CEO',
    image: 'wayne-barnett-founder-ceo.jpg',
  },
  {
    name: 'Angela Caroll',
    role: 'Chief Editor',
    image: 'angela-caroll-chief-editor.jpg',
  },
  {
    name: 'Walter Gordon',
    role: 'Office Manager',
    image: 'walter-gordon-office-manager.jpg',
  },
  {
    name: 'Angela Lopez',
    role: 'Social Media Manager',
    image: 'angela-lopez-social-media-manager.jpg',
  },
  {
    name: 'Scott Estrada',
    role: 'Developer',
    image: 'scott-estrada-developer.jpg',
  },
  {
    name: 'Barbara Ramos',
    role: 'Graphic Designer',
    image: 'barbara-ramos-graphic-designer.jpg',
  },
];


let newButton = document.getElementById("addMemberButton");

let teamcontainer = document.querySelector(".team-container");

onload = anna();

function anna(){
  for (let i = 0; i < team.length; i++){
    aggiungi(i);
  }
}

function aggiungi(i){
  teamcontainer.innerHTML += `
    <div class="team-card">
      <div class="card-image">
        <img
          src="img/${team[i].image}"
          alt="error 404 not found"
        />
      </div>
        <div class="card-text">
        <h3>${team[i].name}</h3>
        <p>${team[i].role}</p>
      </div>
    </div>`
};

newButton.addEventListener("click", function(){
    let newName = document.getElementById("name").value;
    let newRole = document.getElementById("role").value;
    let newImage = document.getElementById("image").value;
    addNew = {
      name: newName,
      role: newRole,
      image: newImage,
    }
    team.push(addNew);
    aggiungi(team.length - 1);
})

