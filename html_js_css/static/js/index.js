
function fetchInstances() {
  return fetch('http://tech.splinex-team.com:4999/api/table')
      .then(r => r.json())
      .catch((error) => console.log(error));
}

async function createInstances() {
  console.log("23");
  
  const r = await fetchInstances();
  const q = r.dt_update;

  const parent = document.getElementById('table');
  
  

  parent.innerHTML = "";

  document.getElementById("dt").innerHTML = q;
  console.log();
  

  r.services.forEach(function(e) {
    addInstance(e);
  })

  //setInterval(createInstances, 10000);
}



function addInstance(instanceData) {
  const parent = document.getElementById('table');
  const row = document.createElement('tr');
  console.log(instanceData);
  
  

  row.className = 'table_row';
  //console.log(instanceData.status);
  let num = '';
  let color = '';
  let array =[];
  
  Object.values(instanceData).forEach(function(value) {
    console.log(value);
     Object.values(instanceData.status).forEach(function(value1) {
       if (value1.includes('[FAIL]')) {
         array.push('1 ' + value);      
         //console.log(value1); 
       }
      });
      Object.values(instanceData.status).forEach(function(value1) {
        if (value1.includes('[WARNING]')) {
          array.push('2 ' + value);       
        }
       });
       Object.values(instanceData.status).forEach(function(value1) {
        if (value1.includes('[OK]')) {
          array.push('3 ' + value);       
        }
       });
});
array.sort();

console.log(array);

  // Object.values(instanceData.status).forEach(function(value) {
  //   if (value.includes('[OK]')) {
  //     color = 'green';
  //     num = '1 ';

      

  //   };
  // });
  // Object.values(instanceData.status).forEach(function(value) {
  //   if (value.includes('[WARNING]')) {
  //     color = 'yellow';
  //   };
  // });
  // Object.values(instanceData.status).forEach(function(value) {
  //   if (value.includes('[FAIL]')) {
  //     color = 'red';
  //     num = '3 ';
      
      
  //   };
   
    
  // });
  // row.classList.add(color);
  
  // let instanceStatus = "";
  // for (const [key, value] of Object.entries(instanceData.status)) {
  //   instanceStatus += `<p>${key}: ${value}</p>`;
  // }
  
//   row.innerHTML = `
//     <td>${instanceData.name}</td>
//     <td><a href="${instanceData.url}">URL</a></td>
//     <td>${instanceData.deployed}</td>
//     <td>${instanceData.delay_between_tests_sec}</td>
//     <td >${instanceStatus}</td>
//   `;
//   parent.append(row);
// }
function init() {
    createInstances();
}

document.addEventListener('DOMContentLoaded', () => {
  console.log('inits');
  
  init();
})
}

//a
// fetchInstances
// createNewData
// sortByStatus
<<<<<<< HEAD
// drawInstances
=======
// drawInstances
>>>>>>> fbaef75bd2127d48a83c658d86ee3737e116eebb
