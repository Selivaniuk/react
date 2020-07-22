const url = 'http://tech.splinex-team.com:4999/api/cards';
const d = document
const locs = ['1018', '1014', 'cloud', 'svetly', 'pervouralsk'];
const holder = d.getElementById('main');

function fetchCards(){

    return fetch(url)
    .then(r=>{
        return r.json();
    })
    .catch(e=>{
        console.log("error ", e);
        return[];
    });
}

async function fetchReload(){
    holder.cards = await fetchCards();
    holder.cards = holder.cards.sort((a) => isErr(a.lastUpdate));
    setTimeout(fetchReload, 1000);
}
    
function isErr(lastUpdate){
    return lastUpdate * 1000 < new Date().getTime() - 1000 * 60 * 15;;
}

 function drawCard(card, i) {
         return `    
         <div class="card ${isErr(card.lastUpdate) ? "error":""}">
            <p class="num">#${i}</p>
            <p class="ip">${card.ip}</p>           
            <p class="metric">CORES: <span class="value">${card.cores}</span></p>
            <p class="metric">CPU available: ${Math.round(card.cpu)} %</p>
            <p class="metric">MEM available: ${Math.round(Math.round(card.mem)/1024/1024/1024)} GB</p>
        </div>
     `;
}
function drawCards(cards) {
    let html1 = '';
    for (const l of locs) {
        const locCards = cards.filter(c=>c.location === l).sort((a, b)=>isErr(b.lastUpdate) - isErr(a.lastUpdate));
        let locHtml = `<p class="loc-title">${l}</p>`;
        locCards.forEach((c, i)=>{
            locHtml+=`
            ${drawCard(c, i+1)}
            `;
        });
        html1+=locHtml;
    }
    holder.innerHTML = html1;
}

function drawReload() {
    const cards = holder.cards;
    if (cards !== undefined) {
        drawCards(cards);
    }
    setTimeout(drawReload, 1000);
}

$(d).ready(function(){
    fetchReload();
    drawReload();
});
