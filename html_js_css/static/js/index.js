
function fetchInstances() {
  return fetch('http://tech.splinex-team.com:4999/api/table')
      .then(r => r.json())
      .catch((error) => console.log(error));
}

async function createInstances() {
  
  const r = await fetchInstances();
  const q = r.dt_update;
  q.classList.add("qq");
  //console.log(q);
  
  const parent = document.getElementById('table');
  const par = document.getElementsByClassName('qq');

  parent.innerHTML = "";
  par.innerHTML = "";

  let th1 = document.createElement('th');
  th1.innerHTML="ID";
  table.append(th1);
  th1.classList.add("n");
  let th2 = document.createElement('th');
  th2.innerHTML="Service";
  table.append(th2);
  let th3 = document.createElement('th');
  th3.innerHTML="Url";
  table.append(th3);
  let th4 = document.createElement('th');
  th4.innerHTML="Deploy";
  table.append(th4);
  let th5 = document.createElement('th');
  th5.innerHTML="Update";
  table.append(th5);
  let th6 = document.createElement('th');
  th6.innerHTML="Status";
  table.append(th6);


  
  document.getElementById("dt").innerHTML = q;
  r.services.forEach(function(e) {
    addInstance(e);
  })

  setInterval(createInstances, 1000 );
  sortTable();
  
  
}

function addInstance(instanceData) {
    const parent = document.getElementById('table');
    const row = document.createElement('tr');


    row.className = 'table_row';
    //console.log(instanceData.status);
    let color = '';
    let array = [];
    instanceData.key = '';

    
    Object.values(instanceData.status).forEach(function(value) {
      if (value.includes('[OK]')) {
        instanceData.key= '3'
        color = 'green';


      };
    });
    Object.values(instanceData.status).forEach(function(value) {
      if (value.includes('[WARNING]')) {
        instanceData.key= '2'
        color = 'yellow';
      };
    });
    Object.values(instanceData.status).forEach(function(value) {
      if (value.includes('[FAIL]')) {
        instanceData.key= '1'
        color = 'red';
      };
    });
    row.classList.add(color);
    // if(instanceData.key){

    // }
    let instanceStatus = "";
    for (const [key, value] of Object.entries(instanceData.status)) {
      instanceStatus += `<p>${key}: ${value}</p>`;
    }



  row.innerHTML = `
    <td class="n" >${instanceData.key}</td>
    <td>${instanceData.name}</td>
    <td><a href="${instanceData.url}">URL</a></td>
    <td>${instanceData.deployed}</td>
    <td>${instanceData.delay_between_tests_sec}</td>
    <td >${instanceStatus}</td>
    
  `;
  parent.append(row);

}
function sortTable() {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("table");
  switching = true;
  while (switching) {
    switching = false;
    rows = table.getElementsByTagName("TR");
    for (i = 0; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("TD")[0];
      y = rows[i + 1].getElementsByTagName("TD")[0];
      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}


function init() {
    createInstances();
}

document.addEventListener('DOMContentLoaded', () => {
  init();
});