document.addEventListener('DOMContentLoaded', () => {
    const recList = document.getElementById('rec-list');
    const iniciarBtn = document.getElementById('iniciar-dinamica');
    
    function cargarRecomendaciones() {
        recList.innerHTML = '<div class="tarjeta"><h3>Obra Ejemplo</h3><p>Descripción de prueba...</p></div>';
    }
    cargarRecomendaciones();
    
    iniciarBtn.addEventListener('click', () => {
        const tipo = document.getElementById('tipo-dinamica').value;
        document.getElementById('dinamica-result').innerHTML = `<div class="tarjeta">Iniciando ${tipo}...</div>`;
    });
});
