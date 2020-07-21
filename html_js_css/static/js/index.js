
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
  setInterval(init, 1000);
})
