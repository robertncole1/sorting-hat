console.log("Hello World");

const students = [];
let expelledStudents = [];

const hogwartsHouse = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = textToPrint;
};

const formBuilder = () => {
  document.querySelector("#new-student-form").style.display = "block";
};

const getFormInfo = (e) => {
  e.preventDefault();
  const name = document.querySelector("#name").value;

  const house = hogwartsHouse[Math.floor(Math.random() * hogwartsHouse.length)];

  // get all the student IDs and create a new array and sort them lowest to highest
  const studentIds = students
    .map((student) => student.id)
    .sort((a, b) => a - b);

  // ternary operator: if the students array is not empty, create an ID that is +1 of the last item in the array. Otherwise make the id 1
  const id = studentIds.length ? studentIds[studentIds.length - 1] + 1 : 1;

  const obj = {
    name,
    house,
    id,
  };

  students.push(obj);
  studentBuilder(students);
  document.querySelector("form").reset();
};

const studentBuilder = (taco) => {
  let dom = "";
  for (const [i, item] of taco.entries()) {
    dom += `<div class="card my-2" style="width: 18rem;" id=${i}>
    <div class="card-body">
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
    expelledStudents.push(expelled);
  }
  studentBuilder(students);
  expelledBuilder(expelledStudents);
};

const expelledBuilder = (taco) => {
  let dom = "";
  for (const [i, item] of taco.entries()) {
    dom += `<div class="card my-2" style="width: 18rem;" id=${i}>
    <div class="card-body">
      <h5 class="card-title">${item.name}</h5>
      <p class="card-text">${item.house}</p>
    </div>
  </div>`;
  }
  printToDom("#expel-student", dom);
};

const btnEvents = () => {
  document.querySelector("#Sorting").addEventListener("click", formBuilder);
  document.querySelector("form").addEventListener("submit", getFormInfo);
  document.querySelector("#new-student").addEventListener("click", deleteStudent);
};

const init = () => {
  console.log(students);
  console.log(expelledStudents);
  btnEvents();
};

init();
