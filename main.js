console.log("Hello World");

const students = [];
let expelledStudents = [];

const hogwartsHouse = [ 
  {
    houseName: "Gryffindor",
    imageUrl: "https://static.wikia.nocookie.net/harrypotter/images/e/ee/Gryffindor_Crest-0.jpg/revision/latest/scale-to-width-down/182?cb=20160729145529",
  },
  {
    houseName: "Hufflepuff",
    imageUrl: "https://static.wikia.nocookie.net/harrypotter/images/d/da/Hufflepuff_House_Crest_old.jpg/revision/latest/scale-to-width-down/160?cb=20160729145653",
  },
  {
    houseName: "Ravenclaw",
    imageUrl: "https://static.wikia.nocookie.net/harrypotter/images/7/77/Ravenclaw_House_Crest.jpg/revision/latest/scale-to-width-down/160?cb=20160729145945",
  },
  {
    houseName: "Slytherin",
    imageUrl: "https://static.wikia.nocookie.net/harrypotter/images/7/71/Slytherin_crest_old.jpg/revision/latest/scale-to-width-down/160?cb=20160729150848",
  }
];

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = textToPrint;
};

const formBuilder = () => {
  document.querySelector("#new-student-form").style.display = "block";
};


const getForm = (e) => {
  e.preventDefault();
  const name = document.querySelector("#name").value;

  const house = hogwartsHouse[Math.floor(Math.random() * hogwartsHouse.length)].houseName;

  let crest = "";

  // // get all the student IDs and create a new array and sort them lowest to highest
  // const studentIds = students
  //   .map((student) => student.id)
  //   .sort((a, b) => a - b);

  // // ternary operator: if the students array is not empty, create an ID that is +1 of the last item in the array. Otherwise make the id 1
  // const id = studentIds.length ? studentIds[studentIds.length - 1] + 1 : 1;

  const obj = {
    name,
    house,
    crest,
    // id,
  };

  if (house === "Gryffindor") {
    obj.crest = hogwartsHouse[0].imageUrl;
  } else if (house === "Hufflepuff") {
    obj.crest = hogwartsHouse[1].imageUrl;
  } else if (house === "Ravenclaw") {
    obj.crest = hogwartsHouse[2].imageUrl;
  } else if (house === "Slytherin") {
    obj.crest = hogwartsHouse[3].imageUrl;
  }

  students.push(obj);
  studentBuilder(students);
  document.querySelector("form").reset();
};

const studentBuilder = (taco) => {
  let dom = "";
  for (const [i, item] of taco.entries()) {
    dom += `<div class="card my-2" id=${i}>
    <div class="card-body">
      <div class="img-container" style="background-image: url('${item.crest}');"></div>
      <h5 class="card-title">${item.name}</h5>
      <p class="card-text">${item.house}</p>
      <button type="button" class="btn btn-danger" id="${i}">Expel</button>
    </div>
  </div>`;
  }
  printToDom("#new-student", dom);
};

const deleteStudent = (e) => {
  const targetType = e.target.type;
  const targetId = e.target.id;
  if (targetType === "button") {
    let expelled = students.splice(targetId, 1);
    expelledStudents.push(...expelled); //spread
  }
  studentBuilder(students);
  expelledBuilder(expelledStudents);
  console.log(expelledStudents)
};

const expelledBuilder = (taco) => {
  let dom = "";
  for (const [i, item] of taco.entries()) {
    dom += `<div class="card my-2" id=${i}>
    <div class="card-body">
    <div class="img-container-2" style="background-image: url('https://upload.wikimedia.org/wikipedia/en/7/7d/DeathEaters.jpg');"></div>
    <h5 class="card-title">Sorry, <strong>${item.name}</strong> went to the darkside.</h5>
    </div>
  </div>`;
  }
  printToDom("#expel-student", dom);
};

const btnEvents = () => {
  document.querySelector("#Sorting").addEventListener("click", formBuilder);
  document.querySelector("form").addEventListener("submit", getForm);
  document.querySelector("#new-student").addEventListener("click", deleteStudent);
};

const init = () => {
  btnEvents();
};

init();
