document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("addActivityForm");
  const table = document
    .getElementById("activityTable")
    .getElementsByTagName("tbody")[0];

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const joined = document.getElementById("joined").value;
    const type = document.getElementById("type").value;
    const status = document.getElementById("status").value;

    const newRow = table.insertRow();

    const nameCell = newRow.insertCell(0);
    const emailCell = newRow.insertCell(1);
    const joinedCell = newRow.insertCell(2);
    const typeCell = newRow.insertCell(3);
    const statusCell = newRow.insertCell(4);
    const actionsCell = newRow.insertCell(5);

    nameCell.textContent = name;
    emailCell.textContent = email;
    joinedCell.textContent = joined;
    typeCell.textContent = type;
    statusCell.textContent = status;
    actionsCell.innerHTML = '<button onclick="deleteRow(this)">Delete</button>';

    form.reset();
  });
});

function deleteRow(button) {
  const row = button.parentNode.parentNode;
  row.parentNode.removeChild(row);
}
