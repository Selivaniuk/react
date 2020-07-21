
function fetchInstances() {
  return fetch('http://tech.splinex-team.com:4999/api/table')
      .then(r => r.json())
      .catch((error) => console.log(error));
}

async function createInstances() {
  const r = await fetchInstances();
  const q =r.dt_update;
  document.getElementById("dt").innerHTML = q;
  r.services.forEach(function(e) {
    addInstance(e);
  })
}



function addInstance(instanceData) {
  const parent = document.getElementById('table');
  const row = document.createElement('tr');
  

  row.className = 'table_row';
  //console.log(instanceData.status);

  let color = '';
  Object.values(instanceData.status).forEach(function(value) {
    if (value.includes('[OK]')) {
      color = 'green';
    };
  });
  Object.values(instanceData.status).forEach(function(value) {
    if (value.includes('[WARNING]')) {
      color = 'yellow';
    };
  });
  Object.values(instanceData.status).forEach(function(value) {
    if (value.includes('[FAIL]')) {
      color = 'red';
    };
  });
  row.classList.add(color);

  let instanceStatus = "";
  for (const [key, value] of Object.entries(instanceData.status)) {
    instanceStatus += `<p>${key}: ${value}</p>`;
  }
  
  row.innerHTML = `
    <td>${instanceData.name}</td>
    <td><a href="${instanceData.url}">URL</a></td>
    <td>${instanceData.deployed}</td>
    <td>${instanceData.delay_between_tests_sec}</td>
    <td >${instanceStatus}</td>
  `;
  parent.append(row);
}
function init() {
    createInstances();
}

document.addEventListener('DOMContentLoaded', () => {
  init();
})
setInterval(createInstancesc, 1000);

function sortTable() {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("table");
  switching = true;
  /* Make a loop that will continue until
  no switching has been done: */
  while (switching) {
    // Start by saying: no switching is done:
    switching = false;
    rows = table.getElementsByTagName("TR");
    /* Loop through all table rows (except the
    first, which contains table headers): */
    for (i = 1; i < (rows.length - 1); i++) {
      // Start by saying there should be no switching:
      shouldSwitch = false;
      /* Get the two elements you want to compare,
      one from current row and one from the next: */
      x = rows[i].getElementsByTagName("TD")[0];
      y = rows[i + 1].getElementsByTagName("TD")[0];
      // Check if the two rows should switch place:
      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        // If so, mark as a switch and break the loop:
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
      and mark that a switch has been done: */
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}