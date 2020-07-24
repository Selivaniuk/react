function fetchInstances() {
    return fetch('http://tech.splinex-team.com:4999/api/cards')
        .then(r => r.json())
        .catch((error) => console.log(error));
}
async function createInstances() {
    const r = await fetchInstances();


    

    // //console.log(r);
    const parent22 = document.getElementById('main');
    parent22.innerHTML = "";
    var currentDiv = document.getElementById("main");

    

    const ar = [];
    r.forEach(function(e, i) {
        addInstance(e, i);   
       
        ar.push(e); 
       
       

    });
    // console.log(ar);
    let distinctLocations = Array.from(new Set(ar.map(e=>e.location)));
    // console.log(lok);


    function createDiv(Name){
        var div = document.createElement('div');
        div.className = Name;
        div.id = Name;
        return div;
    }
     

      distinctLocations.forEach(function(value) {
        currentDiv.append(createDiv(value));
      });
    const tex = document.createElement('div');
    function createValue(Name){
        tex.innerHTML = `
        <h1>${instanceData.ip}</h1>
        <p>${'CORES: ' + instanceData.cores}</p>
        <p>${'CPU avilable: ' + Math.floor(instanceData.cpu) + '%'}</p>
        <p>${'MEM avilable: ' + Math.floor(instanceData.em)}</p>
      `;
            Name.append(tex);

    }
ar.forEach(function(value) { 
    if (value.location == distinctLocations[]) {
        console.log(value);
    }

    
});

    //setTimeout(createInstances, 1000 );
}
function addInstance(instanceData, i) {
    const parent1 = document.getElementById('cloud');
    const parent2 = document.getElementById('d_1018');
    const parent3 = document.getElementById('d_1014');
    const parent4 = document.getElementById('svetly');
    const parent5 = document.getElementById('pervouralsk');

    let color = '';
    array1=[];
    array2=[];
    // array1.push(instanceData.lastUpdate);
    // array2.push(instanceData.location);


    // array1.forEach(function(value) {
    //     if (value>0) {
    //         color = "green";
    //     }
    //     if (value == 0) {
    //         color = "red";
    //     }
    // });
    // instanceData.em = '';
    // tex.className = color;
    // instanceData.em = instanceData.mem/1024/1024/1024;
   
 }
function init() {
    createInstances();
}

document.addEventListener('DOMContentLoaded', () => {
    init();
});

