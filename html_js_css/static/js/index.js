
function fetchInstances() {
  return fetch('http://tech.splinex-team.com:4999/api/table')
      .then(r => r.json())
      .catch((error) => console.log(error));
}

async function createInstances() {
  const r = await fetchInstances();
  const q = r.dt_update;

  const parent = document.getElementById('table');
  
  

  parent.innerHTML = "";

  document.getElementById("dt").innerHTML = q;

  r.services.forEach(function(e) {
    addInstance(e);
  })

  //setInterval(createInstances, 10000);
}



function addInstance(instanceData) {
  const parent = document.getElementById('table');
  const row = document.createElement('tr');
  //console.log(instanceData);
  
  

  row.className = 'table_row';
  //console.log(instanceData.status);
  let num = '';
  let color = '';
  let arr = new Array();
  Object.values(instanceData.status).forEach(function(value) {
    if (value.includes('[OK]')) {
      color = 'green';
      num = '1 ';

      

    };
  });
  Object.values(instanceData.status).forEach(function(value) {
    if (value.includes('[WARNING]')) {
      color = 'yellow';
      num = '2 '; 
      arr.push(num + instanceData.name);
    };
  });
  Object.values(instanceData.status).forEach(function(value) {
    if (value.includes('[FAIL]')) {
      color = 'red';
      num = '3 ';
      arr.push(num + instanceData.name);
      
      
    };
   
    arr.sort();
    console.log(arr);
    
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


// fetchInstances
// createNewData
// sortByStatus
// drawInstances