console.log('Hello World');

const students = [
  {
    name: "",
    house: "",
    id: "",
  },
];

const domPrint = (Id, textToAdd) => {
  const selectedDiv = document.querySelector(Id);
  selectedDiv.innerHTML = textToAdd;
}

const formBuilder = (taco) => {
    document.querySelector("#new-student-form").innerHTML = `<h3>Enter First Year's Name</h3>
  <form>
    <div class="mb-3">
      <label class="form-label">Student</label>
      <input type="text" class="form-control" id="name" required>
    </div>
    <button type="submit" class="btn btn-secondary">Sort!</button>
  </form>`;
}

const btnEvents = () => {
  document.querySelector('#Sorting').addEventListener('click', formBuilder);
}

const init = () => {
  btnEvents();
}

init();
