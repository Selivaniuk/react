
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
  console.log(instanceData);
  let arr = [];





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
      ID =('red');
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
setInterval(createInstances, 1000);

function sortTable() {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("myTable");
  switching = true;
  while (switching) {
    switching = false;
    rows = table.getElementsByTagName("TR");
    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("TD")[0];
      y = rows[i + 1].getElementsByTagName("TD")[0];
      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        shouldSwitch = true;
        break;
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
  }
}