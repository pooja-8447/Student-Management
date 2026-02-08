const form = document.getElementById("studentForm");
const table = document.getElementById("studentTable");

let editRow = null;

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const roll = document.getElementById("roll").value;
  const course = document.getElementById("course").value;

  if (editRow  == null) {

  const row = document.createElement("tr");

  row.innerHTML = `
    <td>${name}</td>
    <td>${roll}</td>
    <td>${course}</td>
    <td>
      <button onclick ="editStudent(this)">Edit</button>
      <button onclick ="deleteStudent(this)">Delete</button>
    </td>  
  `;

  table.appendChild(row);

  // form.reset();
} else {
  editRow.cells[0].innerHTML = name;
  editRow.cells[1].innerHTML = roll;
  editRow.cells[2].innerHTML = course;
  editRow = null;
}
  form.reset();
});

function editStudent(btn) {
  editRow = btn.parentElement.parentElement;

  document.getElementById("name").value = editRow.cells[0].innerHTML;
  document.getElementById("roll").value = editRow.cells[1].innerHTML;
  document.getElementById("course").value = editRow.cells[2].innerHTML;
}

function deleteStudent(btn) {
  btn.parentElement.parentElement.remove();
}