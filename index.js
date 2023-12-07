// Time complexity of isPrime() function is O(n/2)
// Space complexity of isPrime() function is O(1)
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= num / 2; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function openPopup() {
  const startNumber = parseInt(document.getElementById("inputOne").value);
  const endNumber = parseInt(document.getElementById("inputTwo").value);

  if (isNaN(startNumber) || isNaN(endNumber) || startNumber >= endNumber) {
    alert("Please enter valid start and end numbers.");
    return;
  }
  const popup = document.getElementById("popup");
  popup.style.display = "block";
  selectedTab = document.getElementById("tab1");
  selectedTab.style.backgroundColor = "blueviolet";
  selectedTab.click();
}

function closePopup() {
  const popup = document.getElementById("popup");
  popup.style.display = "none";
  tableContainer = document.getElementById("tableContainer");
  tableContainer.innerHTML = "";
}
// Time complexity of getPrimesInRangeForAllNumbers() function is O(n)
// Space complexity of getPrimesInRangeForAllNumbers() function is O(1)
function getPrimesInRangeForAllNumbers() {
  const startNumber = parseInt(document.getElementById("inputOne").value);
  const endNumber = parseInt(document.getElementById("inputTwo").value);

  const tab1 = document.getElementById("tab1");
  tab1.style.backgroundColor = "blueviolet";
  const tab2 = document.getElementById("tab2");
  tab2.style.backgroundColor = "gray";

  if (isNaN(startNumber) || isNaN(endNumber) || startNumber >= endNumber) {
    alert("Please enter valid start and end numbers.");
    return;
  }
  var columns = ["Number", "Prime", "Time in ms"];
  var table = document.createElement("table");
  var thead = document.createElement("thead");
  var headerRow = document.createElement("tr");
  headerRow.style.backgroundColor = "blueviolet";
  headerRow.style.color = "white";
  for (var j = 0; j < columns.length; j++) {
    var th = document.createElement("th");
    th.textContent = columns[j];
    headerRow.appendChild(th);
  }
  thead.appendChild(headerRow);
  table.appendChild(thead);
  var tbody = document.createElement("tbody");
  for (let i = startNumber; i <= endNumber; i++) {
    const isPrimeResult = isPrime(i);
    const startTime = performance.now();
    var row = document.createElement("tr");
    row.style.textAlign = "center";
    for (let j = 0; j < columns.length; j++) {
      var td = document.createElement("td");
      td.textContent =
        columns[j] === "Number"
          ? i
          : columns[j] === "Prime"
          ? isPrimeResult
            ? "Prime"
            : "Normal"
          : (performance.now() - startTime).toFixed(4);
      row.appendChild(td);
    }
    tbody.appendChild(row);
  }
  table.appendChild(tbody);
  table.style.width = "100%";
  var container = document.getElementById("tableContainer");
  container.innerHTML = "";
  container.appendChild(table);
}

// Time complexity of getPrimesInRangeForPrimeNumbers() function is O(n)
// Space complexity of getPrimesInRangeForPrimeNumbers() function is O(1)

function getPrimesInRangeForPrimeNumbers() {
  const startNumber = parseInt(document.getElementById("inputOne").value);
  const endNumber = parseInt(document.getElementById("inputTwo").value);

  const tab1 = document.getElementById("tab1");
  tab1.style.backgroundColor = "gray";
  const tab2 = document.getElementById("tab2");
  tab2.style.backgroundColor = "blueviolet";

  if (isNaN(startNumber) || isNaN(endNumber) || startNumber >= endNumber) {
    alert("Please enter valid start and end numbers.");
    return;
  }
  let columns = ["Number", "Time in ms"];
  let table = document.createElement("table");
  let thead = document.createElement("thead");
  let headerRow = document.createElement("tr");
  headerRow.style.backgroundColor = "blueviolet";
  headerRow.style.color = "white";

  for (let j = 0; j < columns.length; j++) {
    let th = document.createElement("th");
    th.textContent = columns[j];
    headerRow.appendChild(th);
  }

  thead.appendChild(headerRow);

  table.appendChild(thead);

  let tbody = document.createElement("tbody");

  for (let i = startNumber; i <= endNumber; i++) {
    const startTime = performance.now();
    let row = document.createElement("tr");
    row.style.textAlign = "center";

    if (isPrime(i)) {
      for (let j = 0; j < columns.length; j++) {
        let td = document.createElement("td");
        td.textContent =
          columns[j] === "Number"
            ? i
            : (performance.now() - startTime).toFixed(4);
        row.appendChild(td);
      }
      tbody.appendChild(row);
    }
  }

  table.appendChild(tbody);
  table.style.width = "100%";
  var container = document.getElementById("tableContainer");
  container.innerHTML = "";
  container.appendChild(table);
}
