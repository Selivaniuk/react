function fetchInstances() {
    return fetch('http://tech.splinex-team.com:4999/api/cards')
        .then(r => r.json())
        .catch((error) => console.log(error));
  }
  async function createInstances() {
    const r = await fetchInstances();
  
    r.services.forEach(function(e) {
      addInstance(e);
    })
  }
  
  function init() {
    createInstances();
}

document.addEventListener('DOMContentLoaded', () => {
  init();
})