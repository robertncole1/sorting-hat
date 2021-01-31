console.log('Hello World');

const students = []

const hogwartsHouse = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];


const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = textToPrint;
}

const formBuilder = () => {
    document.querySelector("#new-student-form").style.display = 'block';
}

const getFormInfo = (e) => {
  e.preventDefault();
    const name = document.querySelector('#name').value;


    const obj = {
      name,
      house: hogwartsHouse[Math.floor(Math.random() * hogwartsHouse.length)],
    }
 
  students.push(obj);
  studentBuilder(students);
  document.querySelector('form').reset();
}

const studentBuilder = (taco) => {
  let dom = "";
  for (const [i, item] of taco.entries()) {
    dom += `<div class="card my-2" style="width: 18rem;" id=${i}>
    <div class="card-body">
      <h5 class="card-title">${item.name}</h5>
      <p class="card-text">${item.house}</p>
    </div>
  </div>`;
  }
  printToDom('#new-student', dom);
}


const btnEvents = () => {
  document.querySelector('#Sorting').addEventListener('click', formBuilder);
  document.querySelector('form').addEventListener('submit', getFormInfo);
}

const init = () => {
  console.log(students);
  btnEvents();
}

init();
