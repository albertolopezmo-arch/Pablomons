document.querySelector('#year').textContent=new Date().getFullYear();
document.querySelectorAll('[data-link]').forEach(link=>link.addEventListener('click',event=>{event.preventDefault();link.querySelector('small').textContent='Enlace pendiente de configurar'}));
document.querySelector('#whatsapp').addEventListener('click',()=>{document.querySelector('#contact-status').textContent='Falta añadir el número de WhatsApp'});
