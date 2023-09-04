const pheroTube = async() => {
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/1000`);
    const data = await res.json();
    const pheros = data.data;
   //  console.log(pheros);
    displayPheroTube(pheros);
}
   const displayPheroTube = pheros =>{
   const pheroContainer = document.getElementById('phero-container')
    console.log(pheros);
   pheros.forEach(phero => {
   console.log(phero)
   const pheroCard = document.createElement('phero-card')
   pheroCard.classList = `card h-[300px] bg-base-100 shadow-xl`;
   pheroCard.innerHTML = `
   <figure><img src="${phero.thumbnail}" alt="Shoes" /></figure>
   <pheroCard class="card-body">
    <h2 class="card-title">${phero.title}</h2>
    <p>${phero.category_id}</p>
    <h2>${phero.others.views}</h2>
 </pheroCard>

   `;

   pheroContainer.appendChild(pheroCard); 

   });
   
}
pheroTube()  