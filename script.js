function initialize() {
  document.getElementById("finish").style.visibility = "hidden";
}

let selectedNames = []

// let unorganizedNameData = [
//   { "name": "Maria" }, { "name": "Jose" }, { "name": "Juan" }, { "name": "Carlos" }, { "name": "Octaviano" }, { "name": "Rosio" }, { "name": "Lisandro" }, { "name": "Obdulia" },

//   { "name": "Michael" }, { "name": "John" }, { "name": "David" }, { "name": "Robert" }, { "name": "Vahik" }, { "name": "Wendee" }, { "name": "Witold" }, { "name": "Yefim" },

//   { "name": "Willie" }, { "name": "Reginald" }, { "name": "Tyrone" }, { "name": "Kelvin" }, { "name": "Earnestine" }, { "name": "Ivory" }, { "name": "Tomeka" }, { "name": "Ayanna" },

//   { "name": "Mohammad" }, { "name": "Young" }, { "name": "Hung" }, { "name": "Wei" }, { "name": "Shui" }, { "name": "Weiping" }, { "name": "Woon" }, { "name": "Xuejun" }
// ]

let nameData = [
  { "name": "Yefim" }, { "name": "Young" }, { "name": "Weiping" }, { "name": "Rosio" }, { "name": "Michael" }, { "name": "Kelvin" }, { "name": "Ayanna" }, { "name": "Xuejung" },

  { "name": "Willie" }, { "name": "Jose" }, { "name": "Maria" }, { "name": "Woon" }, { "name": "Hung" }, { "name": "Ivory" }, { "name": "Wendee" }, { "name": "Robert" },

  { "name": "Vahik" }, { "name": "John" }, { "name": "David" }, { "name": "Juan" }, { "name": "Tomeka" }, { "name": "Mohammad" }, { "name": "Shui" }, { "name": "Earnestine" },

  { "name": "Reginald" }, { "name": "Lisandro" }, { "name": "Witold" }, { "name": "Obdulia" }, { "name": "Octaviano" }, { "name": "Tyrone" }, { "name": "Wei" }, { "name": "Carlos" }
]

function createGrid(data) {
  const grid = [];
  for (let i = 0; i < data.length; i += 4) {
    grid.push(data.slice(i, i + 4));
  }
  return grid;
}

function makeAGrid() {
  const grid = createGrid(nameData);

  const gridBody = document.getElementById('table');
  gridBody.innerHTML = '';

  grid.forEach(rowData => {
    const row = document.createElement('tr');
    rowData.forEach(cellData => {
      const cell = document.createElement('td');
      cell.textContent = cellData.name;
      row.appendChild(cell);
      cell.addEventListener('click', function() {
        this.classList.toggle('selected');
        if (this.classList.contains('selected')) {
          selectedNames.push(cellData.name)
        } else {
          selectedNames.splice(selectedNames.indexOf(cellData.name), 1)
        }

        document.getElementById("finish").style.visibility =
          selectedNames.length > 0 ? "visible" : "hidden";
      });
    });
    gridBody.appendChild(row);
  })

  document.getElementById("start").style.visibility = "hidden";
}

// const firebaseConfig = {
//   apiKey: "AIzaSyAxob9aavktWfoiB4tSSQFPMbxmCHUaA_A",
//   authDomain: "ap-research-project-c861d.firebaseapp.com",
//   projectId: "ap-research-project-c861d",
//   storageBucket: "ap-research-project-c861d.appspot.com",
//   messagingSenderId: "774215097786",
//   appId: "1:774215097786:web:359685496049be85a71183",
//   measurementId: "G-NZD34ERCPS"
// };

// import { initializeApp } from 'firebase/app';

// firebase.initializeApp(firebaseConfig);

// var database = firebase.database();

function submit() {
  if (selectedNames.length != 8) {
    console.log(selectedNames.length);
    alert("Please select 8 items.");
    return;
  }
  window.location.href = "studentFinal.html";
  database.ref('data').set({
    list: selectedNames,
  });
}

