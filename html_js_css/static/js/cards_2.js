function fetchInstances() {
    return fetch('http://tech.splinex-team.com:4999/api/cards')
        .then(r => r.json())
        .catch((error) => console.log(error));
}

function createCard({ip, lastUpdate, location, request_url, resp, cores, mem, cpu}){
    const card = document.createElement('div');
    card.innerHTML = `
        <h1>${ip}</h1>
        <p>CORES: ${cores}</p>
        <p>CPU avilable: ${Math.floor(cpu)}%</p>
        <p>MEM avilable: ${Math.floor(mem)}</p>
    `;
    return card;
}

function createLocationContainer(loc) {
    var div = document.createElement('div');
    div.className = `container_${loc}`;
    div.id = loc;
    div.innerHTML = `
        <h1>${loc}</h1>
    `;
    return div;
}

async function createInstances() {
    const r = await fetchInstances();

    const cardsContainer = document.getElementById('main');
    cardsContainer.innerHTML = "";

    // create location containers
    console.log(r);
    let distinctLocations = Array.from(new Set(r.map(e=>e.location)));
    distinctLocations.forEach((loc) => {
        const locationContainer = createLocationContainer(loc);
        cardsContainer.append(locationContainer);
    });


    const ar = [];
    r.forEach((cardData, i) => {
        const card = createCard(cardData);
        const locationContainer = document.getElementById(cardData.location);
        locationContainer.append(card);
        // addInstance(e, i);
        // ar.push(e);
    });
    // console.log(ar);

    //
    //
    //
    // const tex = document.createElement('div');
    //
    // ar.forEach(function(value) {
    //     if (value.location == distinctLocations[]) {
    //         // console.log(value);
    //     }
    // });

    //setTimeout(createInstances, 1000 );
}
// function addInstance(instanceData, i) {
//     const parent1 = document.getElementById('cloud');
//     const parent2 = document.getElementById('d_1018');
//     const parent3 = document.getElementById('d_1014');
//     const parent4 = document.getElementById('svetly');
//     const parent5 = document.getElementById('pervouralsk');
//
//     let color = '';
//     array1=[];
//     array2=[];
//     // array1.push(instanceData.lastUpdate);
//     // array2.push(instanceData.location);
//
//
//     // array1.forEach(function(value) {
//     //     if (value>0) {
//     //         color = "green";
//     //     }
//     //     if (value == 0) {
//     //         color = "red";
//     //     }
//     // });
//     // instanceData.em = '';
//     // tex.className = color;
//     // instanceData.em = instanceData.mem/1024/1024/1024;
//
//  }
function init() {
    createInstances();
}

document.addEventListener('DOMContentLoaded', () => {
    init();
});

