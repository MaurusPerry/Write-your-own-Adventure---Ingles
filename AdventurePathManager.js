function irHisoriaoriginal() {
    const oldContent = document.getElementById('content');
    setTimeout(() => {
        oldContent.classList.add('hidden');
        newContent.classList.remove('hidden');
    }, 2000); // Tiempo en milisegundos (coincide con el tiempo de transición en CSS)
    window.location.href = "HistoriaOriginal.html";
}