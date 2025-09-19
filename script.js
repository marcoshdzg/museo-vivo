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
            const res = await fetch('https://museo-vivo-backend.marcos-a98.workers.dev/api/dinamica', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ tipo })
            });
            const data = await res.json();
            dinamicaResult.innerHTML = `<div class="tarjeta"><h3>${data.tipo}</h3><p>${data.instrucciones}</p></div>`;
        } catch (e) {
            dinamicaResult.innerHTML = '<div class="tarjeta"><h3>Error</h3><p>No se pudo iniciar la dinámica.</p></div>';
        }
    });

    // Ejemplo de guardar obra (botón manual por ahora)
    document.getElementById('crear').addEventListener('click', async () => {
        const usuarioId = 'algún-id-de-usuario'; // Reemplazar con lógica real
        const contenido = { titulo: 'Nueva Obra', desc: 'Creada ahora' };
        try {
            await fetch('https://museo-vivo-backend.marcos-a98.workers.dev/api/guardar-obra', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ usuario_id: usuarioId, contenido })
            });
            alert('Obra guardada!');
        } catch (e) {
            alert('Error al guardar la obra.');
        }
    });
});
