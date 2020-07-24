function fetchInstances() {
    return fetch('http://tech.splinex-team.com:4999/api/cards')
        .then(r => r.json())
        .catch((error) => console.log(error));
  }
  async function createInstances() {
    const r = await fetchInstances();

    //console.log(r);
    const parent22 = document.getElementById('main');
    parent22.innerHTML = "";
    let p1 = document.createElement('p');
    p1.innerHTML="1018";
    p1.className="pp"

    let d_1018 = document.createElement('div');
    d_1018.id = 'd_1018';
    d_1018.classList.add('d_1018');

    let p2 = document.createElement('p');
    p2.innerHTML="1014";
    p2.className="pp"

    let d_1014 = document.createElement('div');
    d_1014.id = 'd_1014';
    d_1014.classList.add('d_1014');

    let p3 = document.createElement('p');
    p3.innerHTML="CLOUD";
    p3.className="pp"

    let div_cloud = document.createElement('div');
    div_cloud.id = 'cloud';
    div_cloud.classList.add('cloud');

    let p4 = document.createElement('p');
    p4.innerHTML="SVETLY";
    p4.className="pp"


    let svetly = document.createElement('div');
    svetly.id = 'svetly';
    svetly.classList.add('svetly');

    let p5 = document.createElement('p');
    p5.innerHTML="PERVOURALSK";
    p5.className="pp"

    let pervouralsk = document.createElement('div');
    pervouralsk.id = 'pervouralsk';
    pervouralsk.classList.add('pervouralsk');


    var currentDiv = document.getElementById("main"); 
    currentDiv.append(p1,d_1018,p2,d_1014,p3,div_cloud,p4,svetly,p5,pervouralsk);
    
    r.forEach(function(e) {
      addInstance(e);
    });

      //createInstances();
         setTimeout(createInstances, 1000 ); 
  
  }
  function addInstance(instanceData) {



    const parent1 = document.getElementById('cloud');
    const parent2 = document.getElementById('d_1018');
    const parent3 = document.getElementById('d_1014');
    const parent4 = document.getElementById('svetly');
    const parent5 = document.getElementById('pervouralsk');
    const tex = document.createElement('div');
    let color = '';
    array1=[];
    array2=[];
    array1.push(instanceData.lastUpdate);
    array2.push(instanceData.location);


    array1.forEach(function(value) {
        if (value>0){
            color = "green";
        }
        if (value == 0){
            color = "red";
        }
        
       
   });
   instanceData.em = '';
   tex.className = color
  instanceData.em = instanceData.mem/1024/1024/1024;
  let a = 0;
   array2.forEach(function(value ,i){
    console.log(i);
    
   
       if(value == 'cloud'){

        a++;  

        tex.innerHTML = `

        <p>#${i}</p>
        <h1>${instanceData.ip}</h1>
        <p>${'CORES: ' + instanceData.cores}</p>
        <p>${'CPU avilable: ' + Math.floor(instanceData.cpu) + '%'}</p>
        <p>${'MEM avilable: ' + Math.floor(instanceData.em)}</p>
        
      `;
        parent1.append(tex);
       }
       if(value == '1018'){
        console.log(value.length);

        tex.innerHTML = `
        <h1>${instanceData.ip}</h1>
        <p>${'CORES: ' + instanceData.cores}</p>
        <p>${'CPU avilable: ' + Math.floor(instanceData.cpu) + '%'}</p>
        <p>${'MEM avilable: ' + Math.floor(instanceData.em)}</p>
        

        
      `;
        parent2.append(tex);
       }
       if(value == '1014'){

        tex.innerHTML = `
        <h1>${instanceData.ip}</h1>
        <p>${'CORES: ' + instanceData.cores}</p>
        <p>${'CPU avilable: ' + Math.floor(instanceData.cpu) + '%'}</p>
        <p>${'MEM avilable: ' + Math.floor(instanceData.em)}</p>

        
      `;
        parent3.append(tex);
       }
       if(value == 'svetly'){

        tex.innerHTML = `
        <h1>${instanceData.ip}</h1>
        <p>${'CORES: ' + instanceData.cores}</p>
        <p>${'CPU avilable: ' + Math.floor(instanceData.cpu) + '%'}</p>
        <p>${'MEM avilable: ' + Math.floor(instanceData.em)}</p>

        
      `;
        parent4.append(tex);
       }
       if(value == 'pervouralsk'){

        tex.innerHTML = `
        <h1>${instanceData.ip}</h1>
        <p>${'CORES: ' + instanceData.cores}</p>
        <p>${'CPU avilable: ' + Math.floor(instanceData.cpu) + '%'}</p>
        <p>${'MEM avilable: ' + Math.floor(instanceData.em)}</p>

        
      `;
        parent5.append(tex);
       }

  });

}
function init() {
  createInstances();
}

document.addEventListener('DOMContentLoaded', () => {
init();
});
  
  