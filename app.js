async function load(){
 const c=await fetch('config.json').then(r=>r.json());
 const p=await fetch('products.json').then(r=>r.json());
 const g=document.getElementById('grid');
 p.forEach(x=>{
  let d=document.createElement('div');
  d.className='card';
  d.innerHTML=`<img src="${x.image}"><h3>${x.name}</h3><p>${x.desc}</p><p><b>${x.currency} ${x.price}</b></p><button>Comprar</button>`;
  d.querySelector('button').onclick=()=>window.open(`https://wa.me/${c.contact.whatsapp_number_international}?text=Hola,+quiero+comprar:+${x.name}+(${x.currency}+${x.price})`,'_blank');
  g.appendChild(d);
 });
}
load();