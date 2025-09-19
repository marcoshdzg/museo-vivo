document.addEventListener('DOMContentLoaded', () => {
    const recList = document.getElementById('rec-list');
    const iniciarBtn = document.getElementById('iniciar-dinamica');
    const dinamicaResult = document.getElementById('dinamica-result');

    async function cargarRecomendaciones() {
        try {
            const res = await fetch('https://museo-vivo-backend.marcos-a98.workers.dev/api/recomendaciones');
            const data = await res.json();
            recList.innerHTML = data.map(r => `<div class="tarjeta"><h3>${r.titulo}</h3><p>${r.desc}</p></div>`).join('');
        } catch (e) {
            recList.innerHTML = '<div class="tarjeta"><h3>Error</h3><p>No se pudieron cargar las recomendaciones. Intenta de nuevo.</p></div>';
        }
    }
    cargarRecomendaciones();

    iniciarBtn.addEventListener('click', async () => {
        const tipo = document.getElementById('tipo-dinamica').value;
        try {
            const res = await fetch('https://museo-vivo-backend.marcos-a98.workers.dev/api/dinamica');
            const data = await res.json();
            dinamicaResult.innerHTML = `<div class="tarjeta"><h3>${data.tipo}</h3><p>${data.instrucciones}</p></div>`;
        } catch (e) {
            dinamicaResult.innerHTML = '<div class="tarjeta"><h3>Error</h3><p>No se pudo iniciar la dinámica.</p></div>';
        }
    });

    async function cargarUsuarios() {
        try {
            const res = await fetch('https://museo-vivo-backend.marcos-a98.workers.dev/api/usuarios');
            const data = await res.json();
            console.log('Usuarios:', data);
        } catch (e) {
            console.log('Error al cargar usuarios:', e);
        }
    }
    cargarUsuarios();
});
