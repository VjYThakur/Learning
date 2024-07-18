// Function to handle form submission
document
  .getElementById("addActivityForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Get form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var joined = document.getElementById("joined").value;
    var type = document.getElementById("type").value;
    var status = document.getElementById("status").value;

    // Add new row to the table
    var activityTable = document
      .getElementById("activityTable")
      .getElementsByTagName("tbody")[0];
    var newRow = activityTable.insertRow();
    newRow.innerHTML = `
    <td>${name}</td>
    <td>${email}</td>
    <td>${joined}</td>
    <td>${type}</td>
    <td>${status}</td>
    <td>
      <button class="deleteBtn" onclick="deleteActivity(this)">Delete</button>
    </td>
  `;

    // Log to console
    console.log("New Customer Added:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Joined:", joined);
    console.log("Type:", type);
    console.log("Status:", status);

    // Clear form inputs
    document.getElementById("addActivityForm").reset();

    // Update dashboard metrics
    updateDashboardMetrics();
  });

// Function to delete activity (customer)
function deleteActivity(button) {
  var row = button.parentNode.parentNode;
  row.parentNode.removeChild(row);
  updateDashboardMetrics(); // Update dashboard metrics after deletion
}

// Function to update dashboard metrics
function updateDashboardMetrics() {
  var totalCustomers = document.querySelectorAll(
    "#activityTable tbody tr"
  ).length; // Count number of customers

  // Update dashboard metrics
  var totalCustomersMetric = document.getElementById("totalCustomersMetric");
  if (totalCustomersMetric) {
    totalCustomersMetric.textContent = totalCustomers;
  }

  // Example data, replace with actual calculations
  var totalProducts = document.querySelectorAll(".box.skyblue h3")[0];
  var totalInventory = document.querySelectorAll(".box.yellow h3")[0];
  var dailySales = document.querySelectorAll(".box.purple h3")[0];
  var monthlySales = document.querySelectorAll(".box.red h3")[0];
  var newCustomers = document.querySelectorAll(".box.green h3")[0];
  var totalRevenue = document.querySelectorAll(".box.orange h3")[0];

  totalProducts.textContent = "1,000"; // Example data, replace with actual calculations
  totalInventory.textContent = "5,000"; // Example data, replace with actual calculations
  dailySales.textContent = "$1,200"; // Example data, replace with actual calculations
  monthlySales.textContent = "$25,000"; // Example data, replace with actual calculations
  newCustomers.textContent = totalCustomers; // Update new customers count
  totalRevenue.textContent = "$150,000"; // Example data, replace with actual calculations
}

// Initial update of dashboard metrics on page load
updateDashboardMetrics();

// Script for user section:

function addOption() {
  const userType = document.getElementById("userType");
  if (userType.value === "Select") {
    alert("Please select correct option");
  } else {
    console.log(userType.options[userType.selectedIndex].value);
  }
  document.getElementById("userType").value = "Select";
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
